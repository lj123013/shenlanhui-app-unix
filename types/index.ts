
interface UserStatistics {
  followers_count: number;
  following_count: number;
  articles_count: number;
  likes_received_count: number;
}
export type UserInfo = {
	avatar?: string; // 头像
	bio?: boolean;
	city?: string; // 城市
	created_at: string;//创建时间
	display_name: string;//app属性名
	gender: string;// 性别
	id: number; // 用户id
	is_active: boolean;
	is_media: boolean;
	is_system: boolean;
	is_verified: boolean;
	is_virtual: boolean;
	mobile: string;//手机号
	nickName: string; // 昵称
    statistics: UserStatistics;
	user_type: string;
	username: string;//用户名
	verification?: boolean;//是否认证
};

