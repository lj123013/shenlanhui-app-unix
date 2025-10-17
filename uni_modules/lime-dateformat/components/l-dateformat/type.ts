// @ts-nocheck
export interface DateformatProps {
	date: string;
	locale: 'zh' | 'en';
	format: string;
	threshold: number[];
	refreshRate: number;
}


export type LocaleType = {
	year: string;
	month: string;
	day: string;
	hour: string;
	minute: string;
	second: string;
	ago: string;
	later: string;
	justNow: string;
	soon: string;
	template: string;
};

export type DateType = {
	year: number
	month: number
	day: number
	hour: number
	minute: number
	second: number
	millisecond: number
}
