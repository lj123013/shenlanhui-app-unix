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