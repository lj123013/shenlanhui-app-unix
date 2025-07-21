import type { PassThroughProps } from "../../types";

export type ClPaginationPassThrough = {
	className?: string;
	item?: PassThroughProps;
	prev?: PassThroughProps;
	next?: PassThroughProps;
};

export type ClPaginationProps = {
	className?: string;
	pt?: ClPaginationPassThrough;
	modelValue?: number;
	total?: number;
	size?: number;
};
