import type { Justify, PassThroughProps } from "../../types";
import type { ClIconProps } from "../cl-icon/props";

export type ClListItemPassThrough = {
	className?: string;
	inner?: PassThroughProps;
	label?: PassThroughProps;
	content?: PassThroughProps;
	icon?: ClIconProps;
	collapse?: PassThroughProps;
};

export type ClListItemProps = {
	className?: string;
	pt?: ClListItemPassThrough;
	icon?: string;
	label?: string;
	justify?: Justify;
	arrow?: boolean;
	swipeable?: boolean;
	hoverable?: boolean;
	disabled?: boolean;
	collapse?: boolean;
};
