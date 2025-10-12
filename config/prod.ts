import { get } from "@/cool";
import { proxy } from "./proxy";

export const prod = () => {
	const host = get(proxy, `prod.target`) as string;

	let baseUrl: string;

	baseUrl = host + "/api/v2";
	return {
		host,
		baseUrl
	};
};
