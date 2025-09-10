<template>
	<view class="l-marquee" :class="'l-marquee--' + direction" >
		<view ref="marqueeRef" class="l-marquee-wrap" :class="'l-marquee-wrap--' + direction" :style="[styles]">
			<slot></slot>
			<l-resize @resize="update"></l-resize>
		</view>
	</view>
</template>
<script lang="ts">
	import { defineComponent, ref } from '@/uni_modules/lime-shared/vue';
	import marqueeProps from './props'
	
	export default defineComponent({
		props: marqueeProps,
		setup(props) {
			
			const styles = ref({})
			const update = (rect) => {
				const {width = 0,  height = 0} = rect || {}
				const size = props.direction === "vertical" ? height : width;
				const duration = Math.floor(size / props.speed * 1e3);
				const style:Record<string, any> = {}
				style['animationDuration'] = `${duration}ms`
				style['animationDelay'] = `${props.delay}ms`
				style['animationPlayState'] =  duration != 0 ? "running" : "paused"
				
				styles.value = style
			}
			
			return {
				update,
				styles
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>
