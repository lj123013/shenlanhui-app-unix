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
 * 发布内容
 * @param params 
 * @returns Promise
 */
export function pulish(data : any) : Promise<any> {
	return request({
		url: "/posts",
		method: "POST",
		data
	}) as Promise<any>;
}
/**
 * 获取发布内容列表
 * @param params 
 * @returns Promise
 */
export function pulishList(data : any) : Promise<any> {
	return request({
		url: "/posts",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取发布内容关注列表
 * @param params 
 * @returns Promise
 */
export function postsFollowing(data : any) : Promise<any> {
	return request({
		url: "/posts/following",
		method: "GET",
		data
	}) as Promise<any>;
}

/**
 * 获取发布内容详情
 * @param params 
 * @returns Promise
 */
export function postsInfo(id : string | number, data : any) : Promise<any> {
	return request({
		url: `/posts/${id}`,
		method: "GET",
		data
	}) as Promise<any>;
}

/**
 * 获取我的动态
 * @param params 
 * @returns Promise
 */
export function postMylist(data : any) : Promise<any> {
	return request({
		url: "/posts/my/list",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 删除我发布的动态
 * @param params 
 * @returns Promise
 */
export function deletepost(id : string | number, data : any) : Promise<any> {
	return request({
		url: `/posts/${id}`,
		method: "DELETE",
		data
	}) as Promise<any>;
}
/**
 * 获取公告列表
 * @param params 
 * @returns Promise
 */
export function announcements(data : any) : Promise<any> {
	return request({
		url: "/announcements",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取发布内容详情
 * @param params 
 * @returns Promise
 */
export function announcementsInfo(id : string | number, data : any) : Promise<any> {
	return request({
		url: `/announcements/${id}/pdf-info`,
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 转发动态
 * @param params 
 * @returns Promise
 */
export function repost(id : string | number, data ?: any) : Promise<any> {
	return request({
		url: `/posts/${id}/repost`,
		method: "POST",
		data
	}) as Promise<any>;
}

/**
 * 
//获取AI分析
 * @param params 
 * @returns Promise
 */
export function getAimessage(contentType : string, contentId : string | number, type : string, data ?: any) : Promise<any> {
	return request({
		url: `/contents/${contentType}/${contentId}/ai-analysis/${type}`,
		method: "get",
		data
	}) as Promise<any>;
}