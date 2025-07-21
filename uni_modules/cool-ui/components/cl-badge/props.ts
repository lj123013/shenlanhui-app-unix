import type { Type } from "../../types";

export type ClBadgePassThrough = {
	className?: string;
};

export type ClBadgeProps = {
	className?: string;
	pt?: ClBadgePassThrough;
	type?: Type;
	dot?: boolean;
	value?: any;
	position?: boolean;
};
