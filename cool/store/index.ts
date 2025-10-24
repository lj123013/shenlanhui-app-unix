import { Dict, dict } from "./dict";
import { User, user } from "./user";
import { App, app } from "./app";
import { Aimessage, aimessage } from "./aimessage";


type Store = {
	user: User;
	dict: Dict;
	app: App;
	aimessage: Aimessage;
};

export function useStore(): Store {
	return {
		user,
		dict,
		app,
		aimessage
	};
}

export * from "./dict";
export * from "./user";
export * from "./app";
export * from "./aimessage";
