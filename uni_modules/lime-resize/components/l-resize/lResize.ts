import { defineComponent, ref, onMounted, getCurrentInstance, computed } from '@/uni_modules/lime-shared/vue';
	import { getRect } from '@/uni_modules/lime-shared/getRect'
	import { addUnit } from '@/uni_modules/lime-shared/addUnit'
	const name = 'l-resize'
	interface ResizeResult {
		bottom : number;
		top : number;
		left : number;
		right : number;
		height : number;
		width : number;
	}
	export default defineComponent({
		name,
		externalClasses: ['l-class', 'l-container-class'],
		options: {
			addGlobalClass: true,
			virtualHost: true,
		},
		props: {
			lStyle: String
		},
		emits: ['resize'],
		setup(props, { emit }) {
			const context = getCurrentInstance()
			const width = ref(0);
			const hasNoDefaultSlot = ref(false);
			const height = ref(0);
			const expandScrollTop = ref(0);
			const expandScrollLeft = ref(0);
			const shrinkScrollTop = ref(0);
			const shrinkScrollLeft = ref(0);
			let scrollEventCount = 0;
			let lastHeight = 0
			let lastWidth = 0
			let onScrollHandlerClone = null
			let onScrollHandler = () => {
				if (onScrollHandlerClone) {
					onScrollHandlerClone()
				}
			}
			const scrollToBottom = (res : Record<string, number>) => {
				expandScrollTop.value = 100000 + res.height
				shrinkScrollTop.value = 3 * height.value + res.height
				expandScrollLeft.value = 100000 + res.width
				shrinkScrollLeft.value = 3 * width.value + res.width
			}
			const resizeEvent = (res : ResizeResult) => {
				const result = {};
				['bottom', 'top', 'left', 'right', 'height', 'width'].forEach(propName => {
					result[propName] = res[propName];
				});
				emit('resize', result);
			}
			const styles = computed(() => {
				if (context.slots.default && (width.value || height.value)) {
					return {
						width: addUnit(width.value),
						height: addUnit(height.value),
					}
				}
				return {}
			})
			onMounted(() => {
				const querySelector = ".l-resize__container";
				const options = { context };
				hasNoDefaultSlot.value = !context.slots.default
				getRect(querySelector, options).then(res => {
					// 闭包记录容器高度
					lastHeight = res.height
					lastWidth = res.width
					// 立即填充父容器高宽
					width.value = lastWidth
					height.value = lastHeight
					onScrollHandlerClone = () => {
						getRect(querySelector, options).then((res: ResizeResult) => {
							// 前两次滚动事件被触发，说明 created 的修改已渲染，通知用户代码当前容器大小
							if (scrollEventCount++ === 0) {
								resizeEvent(res)
							}
							// 滚动条拉到底部会触发两次多余的事件，屏蔽掉。
							if (scrollEventCount < 3) return
							// 手动设置父容器高宽，防止父容器坍塌
							// 滚动完，重新获取容器新的高度
							const newHeight = res.height
							const newWidth = res.width
							// 立即填充父容器高宽
							height.value = newHeight
							width.value = newWidth
							// 宽高都改变时，只需要触发一次 size 事件
							const emitStack = []
							if (newHeight !== lastHeight) {
								lastHeight = newHeight
								emitStack.push(1)
							}
							if (newWidth !== lastWidth) {
								lastWidth = newWidth
								emitStack.push(1)
							}
							if (emitStack.length !== 0) {
								resizeEvent(res)
							}
							// 滚动条拉到底部（如果使用 nextTick 效果更佳）
							scrollToBottom({ width: lastWidth, height: lastHeight })
						})
					}
					scrollToBottom({ width: lastWidth, height: lastHeight })
				})
			})
			return {
				props,
				styles,
				hasNoDefaultSlot,
				expandScrollTop,
				expandScrollLeft,
				shrinkScrollTop,
				shrinkScrollLeft,
				onScrollHandler
			}
		}
	})