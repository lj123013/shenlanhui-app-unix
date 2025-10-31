/**
 * 简易 Markdown 转 HTML（支持常用语法，兼容 UTS）
 * 支持：# 标题、**加粗**、*斜体*、`代码`、- 列表、[链接]()、换行
 */
export const markdownToHtml = (markdownText : string) : string => {
	if (markdownText == '') return '';
	let html = markdownText;

	// 1. 转义 HTML 特殊字符（替代 DOMPurify，防止 XSS）
	html = html
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');

	// 2. 标题（# 到 ######）
	  // 关键：使用 UTSRegExp 替代正则字面量，补全回调参数
	  html = html.replace(
	    new RegExp('^(#{1,6}) (.*?)$', 'gm'),  // 转为 UTSRegExp 实例
	    (match: string, level: string, text: string, index: number, original: string) => {
	      const tag = `h${level.length}`;
	      return `<${tag}>${text}</${tag}>`;
	    }
	  );

	// 3. 加粗（**文本**）
	html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

	// 4. 斜体（*文本*）
	html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

	// 5. 行内代码（`代码`）
	html = html.replace(/`(.*?)`/g, '<code>$1</code>');

	// 6. 无序列表（- 项目）
	html = html.replace(/^- (.*?)$/gm, '<li>$1</li>');
	html = html.replace(/(<li>.*?<\/li>)\s+(?=<li>)/gs, '$1'); // 合并列表项
	html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>'); // 包裹列表

	// 7. 链接（[文本](url)）
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

	// 8. 换行（保留空行）
	html = html.replace(/\n/g, '<br>');
	html = html.replace(/<br>\s*<br>/g, '<p></p>'); // 空行转为段落

	return html;
};

/**
 * 转换为 rich-text 支持的 nodes 格式
 */
export type RichTextNode= {
	name : string;
	attrs : Record<string, string>;
	children : any[];
}
export const htmlToNodes = (html: string): RichTextNode[] => {
  return [{
    name: 'div',
    attrs: { class: 'markdown-content' },
    children: [{ type: 'html', text: html }]
  }];
};