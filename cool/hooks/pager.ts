import { ref } from "vue";
import { assign, parse } from "../utils";
import type { Response } from "../service";

type Pagination = {
	page: number;
	size: number;
	total: number;
};

type PagerResponse = {
	list: UTSJSONObject[];
	pagination: Pagination;
};

type PagerCallback = (params: UTSJSONObject) => Promise<UTSJSONObject>;

export class Pager {
	public page = 1;
	public size = 20;
	public total = 0;
	public list = ref<UTSJSONObject[]>([]);
	public loading = ref(false);
	public refreshing = ref(false);
	public finished = ref(false);
	public params = {} as UTSJSONObject;
	public cb: PagerCallback | null = null;

	constructor(cb: PagerCallback) {
		this.cb = cb;
	}

	done() {
		this.loading.value = false;
	}

	clear() {
		this.list.value = [];
		this.finished.value = false;
		this.refreshing.value = false;
		this.loading.value = false;
	}

	public refresh = async (params: UTSJSONObject): Promise<UTSJSONObject> => {
		return new Promise((resolve, reject) => {
			assign(this.params, params);

			const data = {
				page: this.page,
				size: this.size,
				...this.params
			};

			this.loading.value = true;

			this.cb!(data)
				.then((res) => {
					const { list, pagination } = parse<PagerResponse>(res)!;

					this.page = pagination.page;
					this.size = pagination.size;
					this.total = pagination.total;
					this.finished.value = this.list.value.length >= this.total;

					if (data.page == 1) {
						this.list.value = list;
					} else {
						this.list.value.push(...list);
					}

					resolve(res);
				})
				.catch((err) => {
					reject(err);
				})
				.finally(() => {
					this.loading.value = false;
				});
		});
	};

	public loadMore = () => {
		if (this.loading.value || this.finished.value) {
			return;
		}

		this.page += 1;
		this.refresh({});
	};
}

export function usePager(cb: PagerCallback) {
	return new Pager(cb);
}
