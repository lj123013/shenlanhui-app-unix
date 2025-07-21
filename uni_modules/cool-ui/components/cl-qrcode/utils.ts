/**
 * 将base64转换为blob
 * @param data base64数据
 * @returns blob数据
 */
export function base64ToBlob(data: string, type: string = "image/jpeg"): Blob {
	// #ifdef H5
	let bytes = window.atob(data.split(",")[1]);
	let ab = new ArrayBuffer(bytes.length);
	let ia = new Uint8Array(ab);
	for (let i = 0; i < bytes.length; i++) {
		ia[i] = bytes.charCodeAt(i);
	}
	return new Blob([ab], { type });
	// #endif
}
