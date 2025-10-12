import { request } from "@/cool/service";

/**
 * 验证码登录
 * @param data 登录参数
 * @returns Promise
 */
export function loginWithCode(data : any) : UTSPromise<Any | null | undefined> {
	return request({
		url: "/users/login-with-code",
		method: "POST",
		// 补充 data 参数（确保请求参数正确传递）
		data
	});
}

/**
 * 验证码登录
 * @param data 登录参数
 * @returns Promise
 */
export function smsSend(data : any) : UTSPromise<Any | null | undefined> {
	return request({
		url: "/sms/send",
		method: "POST",
		data
	});
}