import { request } from "@/cool/service";

/**
 * 获取新闻稿文章列表
 * @param data 
 * @returns Promise
 */
export function newsData(data : any) : Promise<any> {
	return request({
		url: "/ai/shenlantong/articles",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取新闻稿详情
 * @param data 
 * @returns Promise
 */
export function articleinfo(articleId : string | number,params? : any, ) : Promise<any> {
	return request({
		url: `/ai/shenlantong/articles/${articleId}`,
		method: "GET",
		params
	}) as Promise<any>;
}