import type { ClFormLabelPosition, PassThroughProps } from "../../types";

export type ClFormItemPassThrough = {
	className?: string;
	inner?: PassThroughProps;
	label?: PassThroughProps;
	content?: PassThroughProps;
	error?: PassThroughProps;
};

export type ClFormItemProps = {
	className?: string;
	pt?: ClFormItemPassThrough;
	label?: string;
	prop?: string;
	labelPosition?: ClFormLabelPosition;
	labelWidth?: string | any;
	showAsterisk?: boolean | any;
	showMessage?: boolean | any;
	required?: boolean;
};
