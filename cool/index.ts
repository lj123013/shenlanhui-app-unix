import { initTheme, setH5 } from "./theme";
import { initLocale } from "@/locale";

export function cool(app: VueApp) {
	app.mixin({
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

export * from "./utils";
export * from "./theme";
export * from "./router";
export * from "./service";
export * from "./hooks";
export * from "./ctx";
export * from "./store";
export * from "./upload";
