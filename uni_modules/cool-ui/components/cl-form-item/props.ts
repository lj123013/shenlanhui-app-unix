import type { ClFormItemPassThrough } from "./props";
import type { ClFormRule } from "../cl-form/props";

export type ClFormItemProps = {
	className?: string;
	pt?: ClFormItemPassThrough;
	label?: string;
	prop?: string;
	required?: boolean;
	labelPosition?: "left" | "top" | "right";
	labelWidth?: string;
	rules?: ClFormRule | ClFormRule[];
	showRequiredAsterisk?: boolean;
	error?: string;
	disabled?: boolean;
};
