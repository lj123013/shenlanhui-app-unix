import { computed, ref } from "vue";
import type { AiRequest } from "@/types";
export class Aimessage {
	AiRequest = ref<AiRequest>({ type: '', content: '', instruction: '' });
	setAiRequest(data : AiRequest) {
		console.log('存储的AI请求内容:', data);
		this.AiRequest.value = data
	}
}
export const aimessage = new Aimessage();