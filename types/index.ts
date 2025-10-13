
type UserStatistics = {
	followers_count : number;
	following_count : number;
	articles_count : number;
	likes_received_count : number;
}
export type UserInfo = {
	id : number;
	username : string;
	avatar : string;
	nickname : string;
	display_name : string;
	gender : string;
	city : string;
	bio : string | null;
	user_type : string;
	created_at : string;
	verification : any | null;
	is_verified : boolean;
	is_virtual : boolean;
	is_system : boolean;
	is_media : boolean;
	is_active : boolean;
	mobile : string;
	statistics ?: UserStatistics; // 可选
};

export type UserLogin = {
	id : number;
};