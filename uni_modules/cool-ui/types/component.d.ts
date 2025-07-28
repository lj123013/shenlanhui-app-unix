declare type ComponentPublicInstance = any;

declare type ClInputComponentPublicInstance = {
	isFocus: boolean;
	focus: () => void;
	clear: () => void;
};

declare type ClTextareaComponentPublicInstance = {
	isFocus: boolean;
	focus: () => void;
};

declare type ClPopupComponentPublicInstance = {
	isOpened: boolean;
	isOpen: boolean;
	open: () => void;
	close: () => void;
};

declare type ClSelectComponentPublicInstance = {
	open: (cb: ((value: any) => void) | null) => void;
	close: () => void;
};

declare type ClSelectDateComponentPublicInstance = {
	open: (cb: ((value: string) => void) | null) => void;
	close: () => void;
	setValue: (value: string) => void;
	setValues: (values: string[]) => void;
	clear: () => void;
	setRange: (index: number) => void;
	setRangeValue: (value: string[], index: number) => void;
	toDate: () => string;
	confirm: () => void;
};

declare type ClSelectTimeComponentPublicInstance = {
	open: (cb: ((value: string) => void) | null) => void;
	close: () => void;
};

declare type ClRowComponentPublicInstance = {
	gutter: number;
};

declare type ClConfirmComponentPublicInstance = {
	open: (options: {
		title: string;
		message: string;
		confirmText?: string;
		showConfirm?: boolean;
		cancelText?: string;
		showCancel?: boolean;
	}) => void;
	close: () => void;
};

declare type ClActionSheetComponentPublicInstance = {
	open: (options: {
		title?: string;
		list: {
			label: string;
			icon?: string;
			disabled?: boolean;
			color?: string;
			callback?: () => void;
		}[];
		cancelText?: string;
		showCancel?: boolean;
	}) => void;
	close: () => void;
};

declare type ClToastComponentPublicInstance = {
	open: (options: {
		message: string;
		duration?: number;
		icon?: string;
		position?: "top" | "center" | "bottom";
	}) => void;
	close: () => void;
};

declare type ClKeyboardNumberComponentPublicInstance = {
	open: () => void;
	close: () => void;
};

declare type ClKeyboardCarComponentPublicInstance = {
	open: () => void;
	close: () => void;
};

declare type ClKeyboardPasswordComponentPublicInstance = {
	open: () => void;
	close: () => void;
};

declare type ClPaginationComponentPublicInstance = {
	prev: () => void;
	next: () => void;
};

declare type ClCollapseComponentPublicInstance = {
	show: () => void;
	hide: () => void;
	toggle: () => void;
};

declare type ClCountdownComponentPublicInstance = {
	start: () => void;
	stop: () => void;
	done: () => void;
	isRunning: boolean;
};

declare type ClStickyComponentPublicInstance = {
	getRect: () => void;
};

declare type ClListIndexComponentPublicInstance = {
	scrollToIndex: (index: string) => void;
};

declare type ClListItemComponentPublicInstance = {
	resetSwipe: () => void;
	initSwipe: () => void;
};

declare type ClCascaderComponentPublicInstance = {
	open: () => void;
	close: () => void;
	reset: () => void;
	clear: () => void;
};

declare type ClWaterfallComponentPublicInstance = {
	append: (data: UTSJSONObject[]) => Promise<void>;
	remove: (id: string | number) => void;
	update: (id: string | number, data: UTSJSONObject) => void;
	clear: () => void;
};

declare type ClQrcodeComponentPublicInstance = {
	toPng: () => Promise<string>;
};

declare type ClProgressCircleComponentPublicInstance = {
	animate: (value: number) => void;
};
