export type UserAddressEntity = {
	/**
	 * ID
	 */
	id?: number;

	/**
	 * 用户ID
	 */
	userId?: number;

	/**
	 * 联系人
	 */
	contact?: string;

	/**
	 * 手机号
	 */
	phone?: string;

	/**
	 * 省
	 */
	province?: string;

	/**
	 * 市
	 */
	city?: string;

	/**
	 * 区
	 */
	district?: string;

	/**
	 * 地址
	 */
	address?: string;

	/**
	 * 是否默认
	 */
	isDefault?: boolean;

	/**
	 * 创建时间
	 */
	createTime?: string;

	/**
	 * 更新时间
	 */
	updateTime?: string;

	/**
	 * 任意键值
	 */
};

export type UserInfoEntity = {
	/**
	 * ID
	 */
	id?: number;

	/**
	 * 登录唯一ID
	 */
	unionid?: string;

	/**
	 * 头像
	 */
	avatarUrl?: string;

	/**
	 * 昵称
	 */
	nickName?: string;

	/**
	 * 手机号
	 */
	phone?: string;

	/**
	 * 性别
	 */
	gender?: number;

	/**
	 * 状态
	 */
	status?: number;

	/**
	 * 登录方式
	 */
	loginType?: number;

	/**
	 * 密码
	 */
	password?: string;

	/**
	 * 介绍
	 */
	description?: string;

	/**
	 * 生日
	 */
	birthday?: string;

	/**
	 * 省
	 */
	province?: string;

	/**
	 * 市
	 */
	city?: string;

	/**
	 * 区
	 */
	district?: string;

	/**
	 * 创建时间
	 */
	createTime?: string;

	/**
	 * 更新时间
	 */
	updateTime?: string;

	/**
	 * 任意键值
	 */
};

export type json = any;

export type PagePagination = {
	size: number;
	page: number;
	total: number;
};

export interface PageResponse<T> {
	pagination: PagePagination;
	list: T[];
}

export type UserAddressPageResponse = {
	pagination: PagePagination;
	list: UserAddressEntity[];
};

export type BaseComm = {
	/**
	 * 文件上传模式
	 */
	uploadMode(data?: any): Promise<any>;

	/**
	 * 文件上传
	 */
	upload(data?: any): Promise<any>;

	/**
	 * 参数配置
	 */
	param(data?: any): Promise<any>;

	/**
	 * 实体信息与路径
	 */
	eps(data?: any): Promise<any>;
};

export type DictInfo = {
	/**
	 * 获得所有字典类型
	 */
	types(data?: any): Promise<any>;

	/**
	 * 获得字典数据
	 */
	data(data?: any): Promise<any>;
};

export type UserAddress = {
	/**
	 * 默认地址
	 */
	default(data?: any): Promise<any>;

	/**
	 * 删除
	 */
	delete(data?: any): Promise<any>;

	/**
	 * 修改
	 */
	update(data?: any): Promise<any>;

	/**
	 * 单个信息
	 */
	info(data?: any): Promise<UserAddressEntity>;

	/**
	 * 列表查询
	 */
	list(data?: any): Promise<UserAddressEntity[]>;

	/**
	 * 分页查询
	 */
	page(data?: any): Promise<UserAddressPageResponse>;

	/**
	 * 新增
	 */
	add(data?: any): Promise<any>;
};

export type UserComm = {
	/**
	 * 获取微信公众号配置
	 */
	wxMpConfig(data?: any): Promise<any>;
};

export type UserInfo = {
	/**
	 * 更新用户密码
	 */
	updatePassword(data?: any): Promise<any>;

	/**
	 * 更新用户信息
	 */
	updatePerson(data?: any): Promise<any>;

	/**
	 * 绑定手机号
	 */
	bindPhone(data?: any): Promise<any>;

	/**
	 * 绑定小程序手机号
	 */
	miniPhone(data?: any): Promise<any>;

	/**
	 * 获取用户信息
	 */
	person(data?: any): Promise<any>;

	/**
	 * 注销
	 */
	logoff(data?: any): Promise<any>;
};

export type UserLogin = {
	/**
	 * 刷新token
	 */
	refreshToken(data?: any): Promise<any>;

	/**
	 * 绑定小程序手机号
	 */
	miniPhone(data?: any): Promise<any>;

	/**
	 * 一键手机号登录
	 */
	uniPhone(data?: any): Promise<any>;

	/**
	 * 密码登录
	 */
	password(data?: any): Promise<any>;

	/**
	 * 图片验证码
	 */
	captcha(data?: any): Promise<any>;

	/**
	 * 验证码
	 */
	smsCode(data?: any): Promise<any>;

	/**
	 * 微信APP授权登录
	 */
	wxApp(data?: any): Promise<any>;

	/**
	 * 手机号登录
	 */
	phone(data?: any): Promise<any>;

	/**
	 * 小程序登录
	 */
	mini(data?: any): Promise<any>;

	/**
	 * 公众号登录
	 */
	mp(data?: any): Promise<any>;
};

export type DictKey = "brand" | "occupation";

export type BaseInterface = { comm: BaseComm };

export type DictInterface = { info: DictInfo };

export type UserInterface = {
	address: UserAddress;
	comm: UserComm;
	info: UserInfo;
	login: UserLogin;
};

export type Service = { base: BaseInterface; dict: DictInterface; user: UserInterface };
