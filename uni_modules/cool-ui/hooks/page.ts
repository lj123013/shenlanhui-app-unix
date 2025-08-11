import { router, useParent } from "@/cool";
import { computed, watch } from "vue";

type PageScrollCallback = (top: number) => void;

class Page {
	listeners: PageScrollCallback[] = [];
	pageRef: ClPageComponentPublicInstance | null = null;

	constructor() {
		this.pageRef = useParent<ClPageComponentPublicInstance>("cl-page");

		if (this.pageRef != null) {
			// TODO: 小程序异常
			watch(
				computed(() => this.pageRef!.scrollTop),
				(top: number) => {
					this.listeners.forEach((listener) => {
						listener(top);
					});
				}
			);
		}
	}

	/**
	 * 获取页面路径
	 * @returns 页面路径
	 */
	path() {
		return router.path();
	}

	/**
	 * 获取滚动位置
	 * @returns 滚动位置
	 */
	getScrollTop(): number {
		return this.pageRef!.scrollTop as number;
	}

	/**
	 * 滚动到指定位置
	 * @param top 滚动位置
	 */
	scrollTo(top: number) {
		this.pageRef!.scrollTo(top);
	}

	/**
	 * 回到顶部
	 */
	scrollToTop() {
		this.pageRef!.scrollToTop();
	}

	/**
	 * 监听页面滚动
	 * @param callback 回调函数
	 */
	onPageScroll(callback: PageScrollCallback) {
		this.listeners.push(callback);
	}
}

export function usePage(): Page {
	return new Page();
}
