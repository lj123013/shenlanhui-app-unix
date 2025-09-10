<template>
	<demo-block title="resize" type="ultra">
		<demo-block title="监听父级">
			<view class="parent" :style="[pStyles]">
				<l-resize @resize="handleResize($event, 'parent')"></l-resize>
			</view>
			<button @click="onclick('parent')">变变</button>
		</demo-block>
		<demo-block title="监听子级">
			<l-resize>
				<view class="child" :style="[cStyles]"></view>
			</l-resize>
			<button @click="onclick('child')">变变</button>
		</demo-block>
	</demo-block>
</template>
<script>
	import {ref,reactive,defineComponent,computed} from '@/uni_modules/lime-shared/vue'
	export default defineComponent({
		setup() {
			const store = reactive({
				parent: {
					width: 100,
					height: 100
				},
				child: {
					width: 100,
					height: 100
				}
			})
			const pStyles = computed(() => {
				return `width: ${store.parent.width}px; height: ${store.parent.height}px`
			})
			const cStyles = computed(() => {
				return `width: ${store.child.width}px; height: ${store.child.height}px`
			})

			const handleResize = (size, type) => {
				uni.showToast({
					icon: "none",
					title: `我是 ${type} 我变了 ${size.width}`,
					duration: 1000
				})
			}
			const onclick = (type) => {
				const target = store[type]
				setTimeout(() => {
					target.width = 200
					target.height = 200
				}, 1000)
				setTimeout(() => {
					target.width = 300
					target.height = 300
				}, 2500)
				setTimeout(() => {
					target.width = 100
					target.height = 100
				}, 4000)
				setTimeout(() => {
					target.width = 150
					target.height = 150
				}, 5000)
			}
			return {
				pStyles,
				cStyles,
				handleResize,
				onclick
			}
		}
	})
</script>
<style lang="scss">
	.parent {
		position: relative;
		background-color: yellowgreen;
	}

	.child {
		/* // #4d80f0 */
		background-color: rgba(0, 0, 0, 0.1);
	}
	.row {
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.custom-radio {
		padding: 20rpx 30rpx;
		border-radius: 5rpx;
		border: 1rpx solid #ddd;
		transition: background-color 0.3s;
		color: black;
	
		&.checked {
			background-color: #007aff;
			color: white;
			border-color: #007aff;
		}
	}
	
	.demo-block {
		margin: 32px 10px 0;
	
		// overflow: visible;
		&.card {
			background-color: white;
			padding: 30rpx;
			margin-bottom: 20rpx !important;
		}
	
		&__title {
			margin: 0;
			margin-top: 8px;
	
			&-text {
				color: rgba(0, 0, 0, 0.6);
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
	
				&.large {
					color: rgba(0, 0, 0, 0.9);
					font-size: 18px;
					font-weight: 700;
					line-height: 26px;
				}
	
				&.ultra {
					color: rgba(0, 0, 0, 0.9);
					font-size: 24px;
					font-weight: 700;
					line-height: 32px;
				}
			}
		}
	
		&__desc-text {
			color: rgba(0, 0, 0, 0.6);
			margin: 8px 16px 0 0;
			font-size: 14px;
			line-height: 22px;
		}
	
		&__body {
			margin: 16px 0;
			overflow: visible;
	
			.demo-block {
				// margin-top: 0px;
				margin: 0;
			}
		}
	}
</style>