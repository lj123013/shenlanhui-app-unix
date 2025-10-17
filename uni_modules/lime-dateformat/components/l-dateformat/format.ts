// @ts-nocheck
import {type LocaleType, type DateType} from './type';
import locales from './locales';

function pad(str: string, length:number = 2):string {
	return str.padStart(length, '0')
}

function parser(matched:string, dateObj:DateType):string {
	const length = matched.length
	if(['yyyy', 'yy'].includes(matched)) {
		return pad(`${dateObj.year}`, length)
	}
	if(['MM', 'M'].includes(matched)) {
		return pad(`${dateObj.month}`, length)
	}
	if(['dd', 'd'].includes(matched)) {
		return pad(`${dateObj.day}`, length)
	}
	if(['hh', 'h'].includes(matched)) {
		return pad(`${dateObj.hour}`, length)
	}
	if(['mm', 'm'].includes(matched)) {
		return pad(`${dateObj.minute}`, length)
	}
	if(['ss', 's'].includes(matched)) {
		return pad(`${dateObj.second}`, length)
	}
	if(['SSS', 'S'].includes(matched)) {
		return pad(`${dateObj.millisecond}`, length)
	}
	return ''
}

export function getDate(timestamp: string) {
	if(timestamp.indexOf('T') > -1) {
		return new Date(timestamp)
	}
	if(/^\d+$/.test(timestamp)) {
		return new Date(parseInt(timestamp))
	}
	return new Date(timestamp.replace(/-/g, '/'))
}

export function formatDate(date:Date, format:string = 'yyyy/MM/dd hh:mm:ss'):string {
	const tokenRegExp = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/
	const dateObj:DateType = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds(),
		millisecond: date.getMilliseconds()
	}
	let result = format
	while (tokenRegExp.test(result)) {
		result = result.replace(tokenRegExp, (match:string, _offset: number, _string: string):string => {
			return parser(match, dateObj)
		})
	}
	return result
	
}

export function friendlyDate(
	timestamp: string, 
	locale: string = 'zh', 
	threshold: number[] = [60000, 3600000],
	format: string = 'yyyy/MM/dd hh:mm:ss'
	) : string {
	
	if(timestamp == '' || timestamp == '-') {
		return ''
	}
	// #ifndef APP-ANDROID
	const _locale = (locales[locale] ?? locales['zh']) as LocaleType
	// #endif
	// #ifdef APP-ANDROID
	const __locale = (locales.getJSON(locale) ?? locales.getJSON('zh'))!
	const _locale:LocaleType = {
		year: __locale.getString('year') ?? '',
		month: __locale.getString('month') ?? '',
		day: __locale.getString('day') ?? '',
		hour: __locale.getString('hour') ?? '',
		minute: __locale.getString('minute') ?? '',
		second: __locale.getString('second') ?? '',
		ago: __locale.getString('ago') ?? '',
		later:__locale.getString('later') ?? '',
		justNow: __locale.getString('justNow') ?? '',
		soon: __locale.getString('soon') ?? '',
		template: __locale.getString('template') ??'',
	}
	// #endif
	
	let date = getDate(timestamp)
	let ms = date.getTime() - Date.now()
	let absMs = Math.abs(ms)
	if (absMs < threshold[0]) {
		return ms < 0 ? _locale.justNow : _locale.soon
	}
	if (absMs >= threshold[1]) {
		return formatDate(date, format)
	}
	let num:string;
	let unit:string;
	let suffix:string = _locale.later
	
	if (ms < 0) {
		suffix = _locale.ago
		ms = -ms
	}
	
	const seconds = Math.floor((ms) / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)
	const months = Math.floor(days / 30)
	const years = Math.floor(months / 12)
	
	if(years > 0) {
		num = `${years}`;
		unit = _locale.year;
	} else if(months > 0) {
		num = `${months}`
		unit = _locale.month
	} else if(days > 0) {
		num = `${days}`
		unit = _locale.day
	} else if(hours > 0) {
		num = `${hours}`
		unit = _locale.hour
	} else if(minutes > 0) {
		num = `${minutes}`
		unit = _locale.minute
	} else {
		num = `${seconds}`
		unit = _locale.second
	}
	
	if (locale == 'en') {
		if (num == '1') {
			num = 'a'
		} else {
			unit += 's'
		}
	}
	
	return _locale.template
		.replace(/\{\s*num\s*\}/g, num)
		.replace(/\{\s*unit\s*\}/g, unit)
		.replace(/\{\s*suffix\s*\}/g, suffix)
}