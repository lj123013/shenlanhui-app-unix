import type { ClIconProps } from "../cl-icon/props";

export type ClSelectTriggerPassThrough = {
	className?: string;
	icon?: ClIconProps;
};

export type ClSelectTriggerProps = {
	className?: string;
	pt?: ClSelectTriggerPassThrough;
	text?: string;
	placeholder?: string;
	arrowIcon?: string;
	disabled?: boolean;
	focus?: boolean;
};
