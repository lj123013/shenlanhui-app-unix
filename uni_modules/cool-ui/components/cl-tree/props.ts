import type { ClTreeItem, ClTreeNodeInfo } from "../../types";

export type ClTreeProps = {
	className?: string;
	pt?: any;
	list?: ClTreeItem[];
	icon?: string;
	expandIcon?: string;
	showCheckbox?: boolean;
	checkStrictly?: boolean;
};
