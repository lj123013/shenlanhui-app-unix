import { isNull, forInObject, isEmpty, storage } from "@/cool";
import { ref } from "vue";
import { zhcn } from "./zh-cn";
import { en } from "./en";
import { es } from "./es";
import { config } from "@/config";

// 语言包对象，包含所有支持的语言
const messages = {
	"zh-cn": zhcn,
	en,
	es
};

// 当前语言，默认中文
export const locale = ref<string>(config.locale);

// 设置当前语言
export const setLocale = (value: string) => {
	locale.value = value;

	// #ifdef APP
	// APP 环境下，存储语言到本地
	storage.set("locale", value, 0);
	// #endif

	// #ifndef APP
	// 其他环境下，直接设置全局语言
	uni.setLocale(value);
	// #endif
};

// 获取当前语言
export const getLocale = (): string => {
	let value: string;

	// #ifdef APP
	// APP 环境下，优先从本地存储获取
	const _locale = storage.get("locale") as string | null;

	if (_locale != null && !isEmpty(_locale)) {
		value = _locale;
	} else {
		// @ts-ignore
		value = uni.getDeviceInfo().osLanguage as string;
	}

	// #endif

	// #ifndef APP
	// 其他环境下，直接获取全局语言
	value = uni.getLocale();
	// #endif

	if (isNull(value) || isEmpty(value)) {
		value = config.locale;
	}

	return value;
};

// 不带参数的翻译方法
export const t = (name: string) => {
	let data = messages[locale.value] as string[][] | null;

	if (data == null) {
		return name;
	}

	return data.find((e) => e[0] == name)?.[1] ?? name;
};

// 带参数的翻译方法
export const $t = (name: string, data: any) => {
	let text = t(name);

	// 替换参数
	if (!isNull(data)) {
		forInObject(data, (value, key) => {
			if (typeof value === "number") {
				value = value.toString();
			}

			text = text.replaceAll(`{${key}}`, value as string);
		});
	}

	return text;
};

// 初始化语言设置
export const initLocale = () => {
	locale.value = getLocale();

	// #ifndef APP
	// 监听语言切换事件，自动更新 locale
	uni.onLocaleChange((res) => {
		setLocale(res.locale!);
	});
	// #endif
};
