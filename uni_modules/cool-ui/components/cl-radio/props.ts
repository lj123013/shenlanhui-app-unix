import type { PassThroughProps } from "../../types";
import type { ClIconProps } from "../cl-icon/props";

export type ClRadioPassThrough = {
	className?: string;
	icon?: ClIconProps;
	label?: PassThroughProps;
};

export type ClRadioProps = {
	className?: string;
	modelValue: any;
	pt?: ClRadioPassThrough;
	activeIcon?: string;
	inactiveIcon?: string;
	showIcon?: boolean;
	label?: string;
	value: any;
	disabled?: boolean;
};
