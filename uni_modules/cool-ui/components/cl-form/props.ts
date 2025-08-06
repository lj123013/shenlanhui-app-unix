import type { ClFormData, ClFormRule, ClFormValidateResult, ClFormPassThrough } from "./props";

export type ClFormProps = {
	className?: string;
	pt?: ClFormPassThrough;
	modelValue?: ClFormData;
	rules?: Record<string, ClFormRule | ClFormRule[]>;
	labelPosition?: "left" | "top" | "right";
	labelWidth?: string;
	showRequiredAsterisk?: boolean;
	disabled?: boolean;
};
