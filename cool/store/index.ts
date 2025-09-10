import { Dict, dict } from "./dict";
import { User, user } from "./user";
import { App, app } from "./app";

type Store = {
	user: User;
	dict: Dict;
	app: App;
};

export function useStore(): Store {
	return {
		user,
		dict,
		app
	};
}

export * from "./dict";
export * from "./user";
export * from "./app";
