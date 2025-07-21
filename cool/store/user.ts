import { reactive } from "vue";
import type { UserInfoEntity } from "../types";
import { forInObject, isNull, parse, storage } from "../utils";
import { service } from "../service";
import { router } from "../router";

/**
 * Token类型定义
 * @property token 访问token
 * @property expire token过期时间（秒）
 * @property refreshToken 刷新token
 * @property refreshExpire 刷新token过期时间（秒）
 */
export type Token = {
	token: string;
	expire: number;
	refreshToken: string;
	refreshExpire: number;
};

export class User {
	/**
	 * 用户信息，响应式对象，属性结构见UserInfoEntity
	 */
	info = reactive<UserInfoEntity>({});

	/**
	 * 当前token，字符串或null
	 */
	token: string | null = null;

	constructor() {
		// 获取本地用户信息
		const userInfo = storage.get("userInfo");

		// 获取本地token
		const token = storage.get("token") as string | null;

		// 如果token为空字符串则置为null
		this.token = token == "" ? null : token;

		// 初始化用户信息
		this.set(userInfo!);
	}

	/**
	 * 获取用户信息（从服务端拉取最新信息并更新本地）
	 * @returns Promise<void>
	 */
	async get() {
		if (this.token != null) {
			await service.user.info
				.person({})
				.then((res) => {
					if (!isNull(res)) {
						this.set(res);
					}
				})
				.catch(() => {
					this.logout();
				});
		}
	}

	/**
	 * 设置用户信息并存储到本地
	 * @param data 用户信息对象
	 */
	set(data: any) {
		if (isNull(data)) {
			return;
		}

		// 先清空原有信息
		this.remove();

		// 逐项赋值到响应式info对象
		forInObject(data, (value, key) => {
			this.info[key] = value;
		});

		// 持久化到本地存储
		storage.set("userInfo", data, 0);
	}

	/**
	 * 更新用户信息（本地与服务端同步）
	 * @param data 新的用户信息
	 */
	async update(data: UserInfoEntity) {
		if (isNull(data) || this.isNull()) {
			return;
		}

		const params = { ...data };

		// 本地同步更新
		forInObject(params as any, (value, key) => {
			this.info[key] = value;
		});

		// 同步到服务端
		await service.user.info.updatePerson(params);
	}

	/**
	 * 移除用户信息（仅清空本地响应式对象，不清除本地存储）
	 */
	remove() {
		forInObject({ ...this.info } as any, (_, key) => {
			// #ifdef APP
			this.info[key] = null;
			// #endif

			// #ifndef APP
			delete this.info[key];
			// #endif
		});
	}

	/**
	 * 判断用户信息是否为空（以id字段为准）
	 * @returns boolean
	 */
	isNull() {
		return isNull(this.info["id"]);
	}

	/**
	 * 清除本地所有用户信息和token
	 */
	clear() {
		storage.remove("userInfo");
		storage.remove("token");
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
	setToken(data: Token) {
		this.token = data.token;

		// 访问token，提前5秒过期，防止边界问题
		storage.set("token", data.token, data.expire - 5);
		// 刷新token，提前5秒过期
		storage.set("refreshToken", data.refreshToken, data.refreshExpire - 5);
	}

	/**
	 * 刷新token（调用服务端接口，自动更新本地token）
	 * @returns Promise<string> 新的token
	 */
	refreshToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			service.user.login
				.refreshToken({
					refreshToken: storage.get("refreshToken")
				})
				.then((res) => {
					const token = parse<Token>(res);

					if (token != null) {
						this.setToken(token);
						resolve(token.token);
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
 * 获取用户单例实例（组合式API用法）
 * @returns User
 */
export function useUser() {
	return user;
}
