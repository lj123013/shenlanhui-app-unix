import { request } from "@/cool/service";

/**
 * 使用验证码登录
 * @param data 
 * @returns Promise
 */
export function loginWithCode(data: any): Promise<any> {
  return request({
    url: "/users/login-with-code",
    method: "POST",
    data
  }) as Promise<any>;
}

/**
 * 发送短信
 * @param data 
 * @returns Promise
 */
export function smsSend(data: any): Promise<any> {
  return request({
    url: "/sms/send",
    method: "POST",
    data
  }) as Promise<any>;
}
/**
 * 用户统计
 * @param params 分页参数
 * @returns Promise
 */
export function userStatistics(user: string|number,params: any): Promise<any> {
  return request({
    url: `/users/${user}/statistics`,
    method: "GET",
	params
  }) as Promise<any>;
}
/**
 * 获取擅长领域
 * @param params 分页参数
 * @returns Promise
 */
export function getareas(params?: any): Promise<any> {
  return request({
    url: `/users/verification/expertise-areas/grouped`,
    method: "GET",
	params
  }) as Promise<any>;
}
/**
 * 申请认证
 * @param data 
 * @returns Promise
 */
export function verification(data: any): Promise<any> {
  return request({
    url: "/users/verification",
    method: "POST",
    data
  }) as Promise<any>;
}
/**
 * 取消认证
 * @param data 
 * @returns Promise
 */
export function cancelverification(data: any): Promise<any> {
  return request({
    url: "/users/verification/organization/cancel",
    method: "POST",
    data
  }) as Promise<any>;
}
/**
 * 获取粉丝用户列表
 * @param params 
 * @returns Promise
 */
export function followers(data : any) : Promise<any> {
	return request({
		url: "/users/follow/followers",
		method: "GET",
		data
	}) as Promise<any>;
}
/**
 * 获取关注用户列表
 * @param params 
 * @returns Promise
 */
export function followlist(data : any) : Promise<any> {
	return request({
		url: "/users/follow/following",
		method: "GET",
		data
	}) as Promise<any>;
}

/**
 * 关注用户
 * @param params 
 * @returns Promise
 */
export function follow(data : any) : Promise<any> {
	return request({
		url: "/users/follow",
		method: "POST",
		data
	}) as Promise<any>;
}
/**
 * 取消关注用户
 * @param params 
 * @returns Promise
 */
export function Cancelfollow(data : any) : Promise<any> {
	return request({
		url: "/users/follow",
		method: "DELETE",
		data
	}) as Promise<any>;
}
/**
 * 点赞收藏分享举报
 * @param params 
 * @returns Promise
 */
export function interactions(contentType:string,contentId:string|number,data : any) : Promise<any> {
	return request({
		url: `/interactions/${contentType}/${contentId}`,
		method: "POST",
		data
	}) as Promise<any>;
}
// ai对话接口封装
/**
 * 普通对话接口
 * @param params 
 * @returns Promise
 */
export function aichartAPI(data : any) : Promise<any> {
	return request({
		url: "/ai/chat",
		method: "POST",
		data
	}) as Promise<any>;
}
/**
 * 获取我的点赞，收藏列表
 * @param params 
 * @returns Promise
 */
export function myInteractions(data : any) : Promise<any> {
	return request({
		url: "/interactions/my",
		method: "GET",
		data
	}) as Promise<any>;
}
