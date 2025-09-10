import { ref } from "vue";
import { storage } from "../utils";

export class App {
	/**
	 * 当前选中的AI工具名称
	 */
	selectedAiTool = ref<string>("");

	constructor() {
		// 从本地存储恢复选中的AI工具
		const savedTool = storage.get("selectedAiTool") as string | null;
		if (savedTool != null) {
			this.selectedAiTool.value = savedTool;
		}
	}

	/**
	 * 设置选中的AI工具
	 * @param toolName 工具名称
	 */
	setSelectedAiTool(toolName: string) {
		this.selectedAiTool.value = toolName;
		// 持久化到本地存储
		storage.set("selectedAiTool", toolName, 0);
	}

	/**
	 * 清除选中的AI工具
	 */
	clearSelectedAiTool() {
		this.selectedAiTool.value = "";
		storage.remove("selectedAiTool");
	}
}

/**
 * 单例应用对象，项目全局唯一
 */
export const app = new App();