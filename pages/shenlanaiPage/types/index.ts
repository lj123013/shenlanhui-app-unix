export interface ListItem {
	text: string;
}

export interface TagItem {
	title: string;
	type: string;
	list?: ListItem[];
}