import { config } from "@/config";
import { router } from "../router";
import { getPx, isH5, isHarmony } from "../utils";
import { ctx } from "../ctx";

class Page {
	scrolls: Map<string, ((top: number) => void)[]> = new Map();

	path() {
		return router.path();
	}

	/**
	 * 触发滚动事件
	 * @param top 滚动距离
	 */
	triggerScroll(top: number) {
		const callbacks = this.scrolls.get(this.path()) ?? [];
		callbacks.forEach((cb) => {
			cb(top);
		});
	}

	/**
	 * 注册滚动事件回调
	 * @param callback 回调函数
	 */
	onPageScroll(callback: (top: number) => void) {
		const callbacks = this.scrolls.get(this.path()) ?? [];
		callbacks.push(callback);
		this.scrolls.set(this.path(), callbacks);
	}

	/**
	 * 是否需要计算 tabBar 高度
	 * @returns boolean
	 */
	hasCustomTabBar() {
		if (router.isTabPage()) {
			if (isHarmony()) {
				return false;
			}

			return config.isCustomTabBar || isH5();
		}

		return false;
	}

	/**
	 * 是否存在自定义 topbar
	 * @returns boolean
	 */
	hasCustomTopbar() {
		return router.route()?.isCustomNavbar ?? false;
	}

	/**
	 * 获取 tabBar 高度
	 * @returns tabBar 高度
	 */
	getTabBarHeight() {
		let h = ctx.tabBar.height == null ? 50 : getPx(ctx.tabBar.height!);

		if (this.hasCustomTabBar()) {
			h += this.getSafeAreaHeight("bottom");
		}

		return h;
	}

	/**
	 * 获取安全区域高度
	 * @param type 类型
	 * @returns 安全区域高度
	 */
	getSafeAreaHeight(type: "top" | "bottom") {
		const { safeAreaInsets } = uni.getWindowInfo();

		let h: number;

		if (type == "top") {
			h = safeAreaInsets.top;
		} else {
			h = safeAreaInsets.bottom;

			// #ifdef APP-ANDROID
			if (h == 0) {
				h = 16;
			}
			// #endif
		}

		return h;
	}

	/**
	 * 获取视图高度
	 * @returns 视图高度
	 */
	getViewHeight() {
		// #ifndef APP
		return uni.getWindowInfo().windowHeight;
		// #endif

		// #ifdef APP
		const { screenHeight } = uni.getWindowInfo();

		let h = screenHeight;

		if (!this.hasCustomTopbar()) {
			h -= 44 + this.getSafeAreaHeight("top");
		}

		return h;
		// #endif
	}

	/**
	 * 获取视图宽度
	 * @returns 视图宽度
	 */
	getViewWidth() {
		const { screenWidth } = uni.getWindowInfo();
		return screenWidth;
	}
}

export const page = new Page();

export function usePage(): Page {
	return page;
}
