<template>
	<text class="l-dateformat">{{displayValue}}</text>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * LimeDateformat 日期格式化组件
	 * @description 用于智能格式化显示日期的组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-dateformat
	 * 
	 * @property {String} date 需要格式化的日期
	 * @property {'zh'|'en'} locale 显示语言
	 * @value zh 中文
	 * @value en 英文
	 * @property {String} format 自定义格式（当超过阈值时生效）
	 * @property {Number[]} threshold 智能格式阈值
	 * @property {Number} refreshRate 刷新频率（单位：毫秒）
	 */
	import { defineComponent, computed, watch, ref, onUnmounted } from '@/uni_modules/lime-shared/vue';
	import dateformatProps from './props';
	import { friendlyDate } from './format';
	
	export default defineComponent({
		name: 'l-dateformat',
		props: dateformatProps,
		options: {
			addGlobalClass: true,
			virtualHost: true,
		},
		setup(props) {
			let refreshInterval = -1;
			const refreshMark = ref(0)
			const displayValue = computed(():string=>{
				refreshMark.value
				return friendlyDate(
					props.date,
					props.locale,
					props.threshold,
					props.format
				)
			})
			const refresh = ()=>{
				refreshMark.value++;
			}
			const setAutoRefresh = () => {
				clearInterval(refreshInterval)
				if(props.refreshRate > 0 && (props.threshold[0] > 0 || props.threshold[1] > 0)) {
					refreshInterval = setInterval(()=>{
						refresh()
					}, props.refreshRate)
				}
			}
			const stop = watch(():number=> props.refreshRate, (v)=>{
				setAutoRefresh()
			},{immediate: true})
			
			onUnmounted(stop)
			
			return {
				displayValue
			}
		}
	})
	
</script>
<style lang="scss">
	@import './index';
</style>
