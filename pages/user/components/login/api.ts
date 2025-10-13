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