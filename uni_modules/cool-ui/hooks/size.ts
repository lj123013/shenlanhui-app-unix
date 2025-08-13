import { computed, type ComputedRef } from "vue";
import { config } from "../config";
import { px2rpx } from "@/cool";

/**
 * 字号管理类
 * 用于处理文本大小的缩放和样式
 */
class Size {
	// 预设的字号类名
	public names = [
		"text-xs",
		"text-sm",
		"text-md",
		"text-lg",
		"text-xl",
		"text-2xl",
		"text-3xl",
		"text-4xl",
		"text-5xl",
		"text-6xl",
		"text-7xl",
		"text-8xl",
		"text-9xl"
	];

	// 对应的字号大小(px)
	public sizes = [10, 12, 14, 16, 18, 22, 28, 34, 46, 58, 70, 94, 126];

	// 对应的行高(px)
	public lineHeights = [14, 18, 22, 26, 26, 1, 1, 1, 1, 1, 1, 1, 1];

	// 原始类名
	public className: ComputedRef<string> = computed(() => "");

	// 计算后的类名
	public ptClassName: ComputedRef<string>;

	constructor(cb: (() => string) | null) {
		this.className = computed(cb ?? (() => ""));

		// 根据全局字号配置动态计算类名
		this.ptClassName = computed(() => {
			if (config.fontSize == null) {
				return this.className.value;
			}

			const name = this.names[this.getIndex()];
			return this.className.value.replace(`-important-${name}`, "").replace(name, "");
		});
	}

	/**
	 * 获取全局字号缩放比例
	 */
	getScale = () => {
		return config.fontSize ?? 1;
	};

	/**
	 * 根据缩放比例计算rpx值
	 * @param val - 需要转换的值
	 */
	getRpx = (val: number | string) => {
		const scale = this.getScale();

		if (typeof val == "number") {
			return val * scale + "rpx";
		} else {
			const num = parseFloat(val);
			const unit = val.replace(`${num}`, "");

			return num * scale + unit;
		}
	};

	/**
	 * 获取当前字号在预设中的索引
	 */
	getIndex = () => {
		let index = this.names.findIndex((name) => {
			if (this.className.value.includes(name)) {
				return true;
			}

			return false;
		});

		// 默认使用 text-md (14px)
		if (index < 0) {
			index = 2;
		}

		return index;
	};

	/**
	 * 获取最终的字号大小
	 * @param size - 指定字号大小，为空则使用预设值
	 */
	getSize = (size: number | string | null): null | string => {
		// 未设置全局字号时返回null
		if (config.fontSize == null) {
			return null;
		}

		return this.getRpx(size ?? px2rpx(this.sizes[this.getIndex()]));
	};

	/**
	 * 获取当前行高
	 */
	getLineHeight = (): null | string => {
		// 未设置全局字号时返回null
		if (config.fontSize == null) {
			return null;
		}

		const lineHeight = this.lineHeights[this.getIndex()];
		return lineHeight == 1 ? `1` : this.getRpx(px2rpx(lineHeight));
	};
}

/**
 * 字号管理Hook
 * @param className - 类名
 */
export function useSize(cb: (() => string) | null = null): Size {
	return new Size(cb);
}
