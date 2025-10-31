import { computed, ref } from "vue";
import type { AiRequest } from "@/types";
export class Aimessage {
	AiRequest = ref<AiRequest>({ type: '', content: '', instruction: '' });
	savesummary = ref<string>("")
	setAiRequest(data : AiRequest) {
		console.log('存储的AI请求内容:', data);
		this.AiRequest.value = data
	}
	setAisummary(val:string){
		// console.log("存储获取的照耀文本",val)
	}
}
export const aimessage = new Aimessage();