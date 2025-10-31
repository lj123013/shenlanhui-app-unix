
type UserStatistics = {
	followers_count : number;
	following_count : number;
	articles_count : number;
	likes_received_count : number;
}
type Dadge = {
	category : string
	color : string
	is_valid : string
	label : string
	title : string
	type : string
}
export type Organization = {
	full_name : string
	city : string
	authorization_letter : string
	intro : string
	short_name : string
	manager_position : string
	business_license : string
	areas_labels : string[]


}
// 认证信息
export type Verification = {
	category_label : string
	display_title : string
	verified : boolean
	description : string
	created_at : string
	status : string
	type : string
	status_label : string
	organization : Organization
	type_label : string
}
type extra_fields = {
	original_id : number
}
export type Profile = {
	id : number
	position ?: string
	company : string | null
	address : string
	created_at : string
	education : string | null
	extra_fields : extra_fields
	income_range : string | null
	industry : string // 或者使用 string 如果保持原样: string
	postal_code : string | null
	social_links : string
	updated_at : string
}
export type UserInfo = {
	avatar ?: string
	bio : string | null
	birthday ?: string
	city ?: string
	created_at ?: string
	display_name ?: string
	email ?: string
	email_verified ?: boolean
	gender ?: string
	id ?: number | string
	is_active ?: boolean
	is_media ?: boolean
	is_system ?: boolean
	is_verified ?: boolean
	is_virtual ?: boolean
	last_login_at ?: string
	is_followed ?: boolean
	mobile ?: string
	mobile_verified ?: boolean
	nickname ?: string
	profile ?: Profile
	real_name ?: string
	statistics ?: UserStatistics
	status ?: string
	updated_at ?: string
	user_type ?: string
	username ?: string
	verification ?: Verification
};

export type UserLogin = {
	id : number;
};
export type AiRequest = {
	type : string
	content : string
	instruction : string
}

//发布文章用户数据类型
export type UserInputType = {
	userTitle : string | null//长文标题
	content : string | null//用户输入正文
	images : string[] | null//用户传入的图片
	imageType : number | null
}
type typeauthor = {
	id : number
	avatar ?: string
	username ?: string
	nickname ?: string
	is_followed ?: boolean
}
type timestamps = {
	created_at : string
	published_at : string
	updated_at : string
}
export type ArticleData = {
	id ?: number
	title ?: string
	cover_image ?: string
	featured_image ?: string
	content ?: string;//新闻稿描述
	created_at ?: string;
	ip_location ?: string
	is_following_author ?: boolean//是否关注
	is_liked ?: boolean//是否点赞
	is_bookmarked ?: boolean//是否收藏
	author ?: typeauthor
	timestamps ?: timestamps
	images ?: Array<string>


};