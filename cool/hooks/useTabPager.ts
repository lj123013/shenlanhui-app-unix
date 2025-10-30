import { ref, computed, reactive } from 'vue';
import { isNull, parse, router, usePager, type Response } from "@/cool";
import type { ClTabsItem} from "@/uni_modules/cool-ui";
export function useTabPager(tabs : ClTabsItem[], cb : (params : UTSJSONObject, pager : Pager) => void) {
	// 当前激活的选项卡索引
	const currentTab = ref(0);

	// 存储所有选项卡的 Pager 实例
	const pagers = reactive(new Map<number, Pager>());

	// 初始化每个选项卡的 Pager 实例
	tabs.forEach(tab => {
		// 为每个选项卡创建一个 Pager 实例，并在回调函数中固定传入 content_type
		const pager = usePager((params, pager) => {
			// 在请求参数中加上当前选项卡的 content_type
			const tabParams = {
				...params,
				content_type: tab.contentType
			};
			return cb(tabParams, pager);
		});
		pagers[tab.value] = pager;
	});

	// 当前激活的 Pager 实例
	const currentPager = computed(() => pagers[currentTab.value]);

	// 切换选项卡
	const switchTab = (index : number) => {
		currentTab.value = index;
		// 如果当前选项卡的数据还没有加载过，则加载第一页
		if (currentPager.value.list.value.length === 0) {
			currentPager.value.refresh({ page: 1 });
		}
	};

	// 刷新当前选项卡的数据
	const refresh = (params : UTSJSONObject = {}) => {
		return currentPager.value.refresh({ ...params, page: 1 });
	};

	// 加载更多
	const loadMore = () => {
		currentPager.value.loadMore();
	};

	return {
		currentTab,
		switchTab,
		refresh,
		loadMore,
		currentPager,
		pagers
	};
}