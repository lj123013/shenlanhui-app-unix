import type { ClListViewItem, PassThroughProps } from "../../types";

export type ClListViewPassThrough = {
	className?: string;
	item?: PassThroughProps;
	indexBar?: PassThroughProps;
};

export type ClListViewProps = {
	className?: string;
	pt?: ClListViewPassThrough;
	data?: ClListViewItem[];
	itemHeight?: number;
	headerHeight?: number;
	topHeight?: number;
	bottomHeight?: number;
	bufferSize?: number;
	virtual?: boolean;
	// 下拉刷新相关属性
	refresherEnabled?: boolean;
	refresherThreshold?: number;
	refresherTriggered?: boolean;
	refresherBackground?: string;
	refresherDefaultText?: string;
	refresherPullingText?: string;
	refresherRefreshingText?: string;
};
