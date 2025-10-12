import { get } from "@/cool";
import { proxy, value } from "./proxy";

export const dev = () => {
	const host = get(proxy, `${value}.target`) as string;

	let baseUrl: string;

	baseUrl = host + "/api/v2";

	return {
		host,
		baseUrl
	};
};
