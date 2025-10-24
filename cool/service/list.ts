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
export function newsinfo(articleId : string | number, params ?: any,) : Promise<any> {
	return request({
		url: `/ai/shenlantong/articles/${articleId}`,
		method: "GET",
		params
	}) as Promise<any>;
}
/**
 * 获取文章列表
 * @param params 
 * @returns Promise
 */
export function articles(data : any) : Promise<any> {
	return request({
		url: "/articles",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取文章详情
 * @param data 
 * @returns Promise
 */
export function articleinfo(articleId : string | number, params ?: any,) : Promise<any> {
	return request({
		url: `/articles/${articleId}`,
		method: "GET",
		params
	}) as Promise<any>;
}
/**
 * 获取评论列表
 * @param params 
 * @returns Promise
 */
export function comments(data : any) : Promise<any> {
	return request({
		url: "/comments",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 评论文章
 * @param params 
 * @returns Promise
 */
export function clickcomments(data : any) : Promise<any> {
	return request({
		url: "/comments",
		method: "POST",
		data
	}) as Promise<any>;
}


/**
 * 获取快讯列表
 * @param params 
 * @returns Promise
 */
export function dispatches(data : any) : Promise<any> {
	return request({
		url: "/dispatches",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取快讯详情
 * @param data 
 * @returns Promise
 */
export function dispatchesinfo(id : string | number, params ?: any,) : Promise<any> {
	return request({
		url: `/dispatches/${id}`,
		method: "GET",
		params
	}) as Promise<any>;
}

/**
 * 获取热门公司
 * @param params 
 * @returns Promise
 */
export function hotcompany(data : any) : Promise<any> {
	return request({
		url: "/trending/companies",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取活跃用户
 * @param params 
 * @returns Promise
 */
export function hotUser(data : any) : Promise<any> {
	return request({
		url: "/trending/active-users",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取用户所有对话
 * @param params 
 * @returns Promise
 */
export function getConversations(data : any) : Promise<any> {
	return request({
		url: "/ai/conversations",
		method: "GET",
		data
	}) as Promise<any>;
}
export function getConversationsinfo(conversation_id?:string,data : any) : Promise<any> {
	return request({
		url: `/ai/conversations/${conversation_id}`,
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 发布内容
 * @param params 
 * @returns Promise
 */
export function pulish(data : any) : Promise<any> {
	return request({
		url: "/contents",
		method: "POST",
		data
	}) as Promise<any>;
}
