// @ts-nocheck
export interface TextEllipsisProps {
	/**
	 * 文本行数限制
	 */
	rows : number;
	/**
	 * 原始内容文本
	 */
	content : string;

	/**
	 * 展开按钮文案
	 */
	expandText ?: string;

	/**
	 * 收起按钮文案
	 */
	collapseText ?: string;

	/**
	 * 折叠位置（文本溢出方向）
	 */
	position ?: 'top' | 'bottom' | 'both';

	/**
	 * 省略符号
	 */
	dots ?: string;

	/**
	 * 操作按钮颜色
	 * @format hex/rgba
	 * @example '#2c3e50'
	 */
	actionColor ?: string;

	/**
	 * 自定义操作样式
	 */
	actionStyle ?: string | UTSJSONObject;
}