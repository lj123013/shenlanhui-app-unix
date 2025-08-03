/**
 * 获取设备像素比
 * @returns 设备像素比
 */
export const getDevicePixelRatio = (): number => {
	const dpr = uni.getDeviceInfo().devicePixelRatio ?? 1;

	// #ifdef  MP
	// 微信小程序高清处理
	return 3;
	// #endif

	return dpr;
};
