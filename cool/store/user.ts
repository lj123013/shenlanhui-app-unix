import type { UserInfo, UserLogin } from "@/types";
import { computed, ref } from "vue";
import { router } from "../router";
import { request } from "../service";
import { forInObject, isNull, isObject, parse, storage } from "../utils";
export type Token = {
	token : string; // 访问token
	user : UserLogin;
};

export class User {
	/**
	 * 用户信息，响应式对象
	 */
	info = ref<UserInfo | null>(null);
	/**
	 * 当前userId，数字或null
	 */
	userId : number | null = null;
	/**
	 * 当前token，字符串或null
	 */
	token : string | null = null;

	constructor() {
		// 获取本地用户信息
		const userInfo = storage.get("userInfo");
		// 获取本地token
		const token = storage.get("token") as string | null;
		const userId = storage.get("userId") as number | null;
		if (!isNull(userId)) {
			this.userId = userId
		}
		// console.log(this.userId)
		this.token = token == "" ? null : token;
		// 初始化用户信息
		if (userInfo != null && isObject(userInfo)) {
			console.log("用户信息", userInfo)
			this.set(userInfo);
		}
	}

	/**
	 * 获取用户信息（从服务端拉取最新信息并更新本地）
	 * @returns Promise<void>
	 */
	async get() {
		if (this.token != null && this.userId != null) {
			await request({
				url: `/users/${this.userId}`,
				method: "GET",
			})
				.then((res) => {
					if (res != null) {
						this.set(res);
					}
				})
				.catch(() => {
					// this.logout();
				});
		}
	}

	/**
	 * 设置用户信息并存储到本地
	 * @param data 用户信息对象
	 */
	set(data : any) {
		if (isNull(data)) {
			return;
		}
		// console.log(data, 'data111')
		// console.log(parse<UserInfo>(data)!, 'data12222222')
		// 设置
		this.info.value = parse<UserInfo>(data)!;
		// console.log(this.info.value,999999)

		// 持久化到本地存储
		storage.set("userInfo", data, 0);
	}

	/**
	 * 更新用户信息（本地与服务端同步）
	 * @param params 新的用户信息
	 */
	async update(data : any) : Promise<boolean> {
		console.log(data, '更新用户信息参数值');
		if (isNull(data) || isNull(this.info.value)) {
			return false;
		}
		// 本地同步更新
		forInObject(data, (value, key) => {
			this.info.value![key] = value;
		});

		try {
			// 同步到服务端
			await request({
				url: `/users/${this.userId}`,
				method: "PUT",
				data
			});

			return true; // 请求成功
		} catch (err) {
			console.error('更新用户信息失败:', err);
			return false; // 请求失败
		}
	}

	/**
	 * 移除用户信息
	 */
	remove() {
		this.info.value = null;
		storage.remove("userInfo");
	}

	/**
	 * 判断用户信息是否为空
	 * @returns boolean
	 */
	isNull() {
		return this.info.value == null;
	}

	/**
	 * 清除本地所有用户信息和token
	 */
	clear() {
		storage.remove("userInfo");
		storage.remove("token");
		storage.remove("userId");
		storage.remove("refreshToken");
		this.token = null;
		this.remove();
	}

	/**
	 * 退出登录，清除所有信息并跳转到登录页
	 */
	logout() {
		this.clear();
		router.login();
	}

	/**
	 * 设置token并存储到本地
	 * @param data Token对象
	 */
	setToken(data : Token) {
		this.token = data.token;
		// 2. 计算过期时间（假设原有效期从接口返回，若没有则手动设置，这里以1小时为例）
		// 提前5秒过期 = 总有效期(毫秒) - 5000毫秒
		const totalExpires = 3600 * 1000; // 假设原有效期1小时（3600秒），可根据实际接口返回调整
		const expires = totalExpires - 5000; // 提前5秒
		// 3. 调用storage.set，补充expires参数，且token已确保非空
		// 访问token，提前5秒过期，防止边界问题
		storage.set("token", data.token, expires);
		storage.set("userId", data.user.id, 0);

	}

	/**
	 * 刷新token（调用服务端接口，自动更新本地token）
	 * @returns Promise<string> 新的token
	 */
	refreshToken() : Promise<string> {
		return new Promise((resolve, reject) => {
			request({
				url: "/app/user/login/refreshToken",
				method: "POST",
				data: {
					refreshToken: storage.get("refreshToken")
				}
			})
				.then((res) => {
					if (res != null) {
						const token = parse<Token>(res);
						if (token != null) {
							// this.setToken(token);
							resolve(token.token);
						}
					}
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

/**
 * 单例用户对象，项目全局唯一
 */
export const user = new User();

/**
 * 用户信息，响应式对象
 */
// console.log(user.info.value)
export const userInfo = computed<UserInfo | null>(() => {
	return user.info.value != null ? user.info.value as UserInfo : null;
});