import type { ClTextType } from "../../types";

export type ClTextPassThrough = {
	className?: string;
};

export type ClTextProps = {
	className?: string;
	pt?: ClTextPassThrough;
	value?: string | number | any;
	color?: string;
	type?: ClTextType;
	mask?: boolean;
	currency?: string;
	precision?: number;
	maskStart?: number;
	maskEnd?: number;
	maskChar?: string;
	ellipsis?: boolean;
	selectable?: boolean;
	space?: "ensp" | "emsp" | "nbsp";
	decode?: boolean;
	preWrap?: boolean;
};
