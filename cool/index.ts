import { scroller } from "./scroller";
import { initTheme, setH5 } from "./theme";
import { initLocale } from "@/locale";

export function cool(app: VueApp) {
	app.mixin({
		onPageScroll(e) {
			scroller.emit(e.scrollTop);
		},
		onShow() {
			// #ifdef H5
			setTimeout(() => {
				setH5();
			}, 0);
			// #endif
		}
	});

	initTheme();
	initLocale();

	console.log(app);
}

export * from "./ctx";
export * from "./hooks";
export * from "./router";
export * from "./scroller";
export * from "./service";
export * from "./store";
export * from "./theme";
export * from "./upload";
export * from "./utils";
