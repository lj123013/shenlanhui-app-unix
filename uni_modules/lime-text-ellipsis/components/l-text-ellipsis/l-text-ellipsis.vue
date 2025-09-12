<template>
	<view class="l-text-ellipsis">
		<view class="cloneContainer" v-if="containerShow" :style="{opacity: containerShow ? 1 : 0}">{{container}}</view>
		<view class="l-text-ellipsis__content">
			<text>{{expanded ? content : text}}</text>
			<view v-if="hasAction" class="l-text-ellipsis__action" @click="onClick" :style="[actionColor ? {color: actionColor}: {}]">
				<block v-if="!$slots.icon">{{expanded ?  collapseText : expandText}}</block>
				<slot name="icon" :expanded="expanded"></slot>
			</view>
		</view>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * TextEllipsis 文本省略组件
	 * @description 用于多行文本的截断和展开/收起功能，支持自定义省略位置和操作按钮
	 * <br>插件类型：LTextEllipsisComponentPublicInstance 
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-text-ellipsis
	 * 
	 * @property {number} rows 最大显示行数（必填）
	 * @property {string} content 原始文本内容（必填）
	 * @property {string} expandText 展开按钮文案（默认："展开"）
	 * @property {string} collapseText 收起按钮文案（默认："收起"）
	 * @property {'top' | 'bottom' | 'both'} position 省略位置（默认："bottom"）
	 * @value top
	 * @value bottom
	 * @value both
	 * @property {string} dots 省略符号（默认："..."）
	 * @property {string} actionColor 操作按钮颜色（支持CSS颜色值）
	 * @property {string | Object} actionStyle 操作按钮自定义样式
	 * @event {Function} click 点击时触发
	 */
	
	import { defineComponent, ref, watch, getCurrentInstance, onMounted, onUnmounted, nextTick, watchEffect } from '@/uni_modules/lime-shared/vue';
	import TextEllipsisProps from './props'
	import { getRect } from '@/uni_modules/lime-shared/getRect'
	const name = 'l-text-ellipsis'
	export default defineComponent({
		name,
		props: TextEllipsisProps,
		emits: ['click'],
		setup(props, { emit }) {
			const app = getCurrentInstance()
			const text = ref('')
			const expanded = ref(false)
			const hasAction = ref(false)
			const containerShow = ref(false)
			const container = ref('')
			const sleep = () => new Promise(resolve => nextTick(resolve))
			const getContainer = () => getRect('.cloneContainer', app.proxy)
			const updateContainer = async (text : string) => {
				container.value = text;
				await sleep(); // 确保DOM更新
				await sleep(); // vue2 app要执行两次
				return getContainer();
			}
			const calcEllipsised = async () => {
				if (!props.content.length) return
				containerShow.value = true
				const calcEllipsisText = async (maxHeight : number) => {
					const { dots = '', content, expandText = '', position = 'end' } = props;
					const end = content.length;
					const middle = (0 + end) >> 1;



					if (position == 'middle') {
						let leftRange = [0, middle]
						let rightRange = [middle, end]

						while (leftRange[1] - leftRange[0] > 1 || rightRange[1] - rightRange[0] > 1) {
							const leftMidIndex = Math.floor((leftRange[0] + leftRange[1]) / 2);
							const rightMidIndex = Math.ceil((rightRange[0] + rightRange[1]) / 2);

							const { height } = await updateContainer(
								content.slice(0, leftMidIndex) +
								dots +
								content.slice(rightMidIndex, end) +
								expandText)

							if (height >= maxHeight) {
								// 如果高度超出，缩小左侧范围
								leftRange = [leftRange[0], leftMidIndex];
								rightRange = [rightMidIndex, rightRange[1]];
							} else {
								// 如果高度未超出，缩小右侧范围
								leftRange = [leftMidIndex, leftRange[1]];
								rightRange = [rightRange[0], rightMidIndex];
							}
						}
						containerShow.value = false;
						return (
							content.slice(0, leftRange[0]) +
							dots +
							content.slice(rightRange[1], end)
						);
					} else {
						const isPositionStart = position === 'start';
						let left = 0;
						let right = end;
						let res = -1;

						while (left <= right) {
							const mid = Math.floor((left + right) / 2);

							const { height } = await updateContainer(
								isPositionStart
									? dots + content.slice(mid, end) + expandText
									: content.slice(0, mid) + dots + expandText)

							
							if (height <= maxHeight) {
								if (isPositionStart) {
									right = mid - 1;
								} else {
									left = mid + 1;
								}
								res = mid;
							} else {
								if (isPositionStart) {
									left = mid + 1;
								} else {
									right = mid - 1;
								}
							}
						}
						containerShow.value = false;
						return isPositionStart ? dots + content.slice(res) : content.slice(0, res) + dots;
					}
				}

				// 先获取一行的高度
				const { height } = await updateContainer(props.content.slice(0, 5))
				const maxHeight = (Number(props.rows) + 0.5) * height
				// 再获取总高度
				const { height: offsetHeight } = await updateContainer(props.content)
				// 如果总字符的高度 > 最大行高 执行切分流程
				if (maxHeight <= offsetHeight) {
					hasAction.value = true;
					text.value = await calcEllipsisText(maxHeight);
				} else {
					hasAction.value = false;
					text.value = props.content;
				}
			}

			const onClick = (event : MouseEvent) => {
				expanded.value = !expanded.value;
				emit('click', event);
			}
			// onMounted(() => nextTick(calcEllipsised));
			// const stop = watch(() => [props.content, props.rows], calcEllipsised);
			uni.onWindowResize(calcEllipsised)
			// onUnmounted(stop)
			
			onMounted(()=>{
				nextTick(()=>{
					watchEffect(()=>{
						if(props.content && props.content.length > 0 || props.rows > 0) {
							calcEllipsised()
						}
					})
				})
				
			})
			
			return {
				text,
				containerShow,
				container,
				expanded,
				hasAction,
				onClick
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>