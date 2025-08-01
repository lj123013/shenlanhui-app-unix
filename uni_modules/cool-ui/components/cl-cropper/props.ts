import type { PassThroughProps } from "../../types";

export type ClCropperPassThrough = {
	className?: string;
	inner?: PassThroughProps;
	image?: PassThroughProps;
	cropBox?: PassThroughProps;
	button?: PassThroughProps;
};

export type ClCropperProps = {
	className?: string;
	pt?: ClCropperPassThrough;
	src?: string;
	width?: string | number;
	height?: string | number;
	cropWidth?: string | number;
	cropHeight?: string | number;
	maxScale?: number;
	showButtons?: boolean;
	quality?: number;
	format?: "jpg" | "png";
	disabled?: boolean;
	canResize?: boolean; // 是否可以自定义裁剪框大小
	canFlip?: boolean; // 是否显示翻转功能
};