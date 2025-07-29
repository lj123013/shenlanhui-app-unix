import { base64ToBlob } from "./comm";

export type CanvasToPngOptions = {
	canvasId: string;
	proxy?: ComponentPublicInstance;
	canvasRef: UniElement;
};

/**
 * 将canvas转换为png图片
 * @param options 转换参数
 * @returns 图片路径
 */
export function canvasToPng(options: CanvasToPngOptions): Promise<string> {
	return new Promise((resolve) => {
		// #ifdef APP
		options.canvasRef.parentElement!.takeSnapshot({
			success(res) {
				resolve(res.tempFilePath);
			},
			fail(err) {
				console.error(err);
				resolve("");
			}
		});
		// #endif

		// #ifdef H5
		const url = URL.createObjectURL(
			base64ToBlob(
				(options.canvasRef as unknown as HTMLCanvasElement)
					.querySelector("canvas")
					?.toDataURL("image/png", 1) ?? ""
			)
		);

		resolve(url);
		// #endif

		// #ifdef MP
		uni.createCanvasContextAsync({
			id: options.canvasId,
			component: options.proxy,
			success(context) {
				// 获取2D绘图上下文
				const ctx = context.getContext("2d")!;
				const canvas = ctx.canvas;

				// 将canvas转换为base64格式的PNG图片数据
				const data = canvas.toDataURL("image/png", 1);
				// 获取base64数据部分(去掉data:image/png;base64,前缀)
				const bdataBase64 = data.split(",")[1];

				// 获取文件系统管理器
				const fileMg = uni.getFileSystemManager();
				// 生成临时文件路径
				// @ts-ignore
				const filepath = `${wx.env.USER_DATA_PATH}/${uuid()}.png`;
				// 将base64数据写入文件
				fileMg.writeFile({
					filePath: filepath,
					data: bdataBase64,
					encoding: "base64",
					success() {
						// 写入成功返回文件路径
						resolve(filepath);
					},
					fail() {
						// 写入失败返回空字符串
						resolve("");
					}
				});
			},
			fail(err) {
				console.error(err);
				resolve("");
			}
		});
		// #endif
	});
}
