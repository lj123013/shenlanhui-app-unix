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
	minScale?: number;
	showButtons?: boolean;
	quality?: number;
	format?: "jpg" | "png";
	disabled?: boolean;
};