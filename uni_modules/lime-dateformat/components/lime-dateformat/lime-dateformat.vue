<template>
	<view class="demo-block">
		<text class="demo-block__title-text ultra">日期格式化</text>
		<text class="demo-block__desc-text">日期格式化组件，可以将日期格式化为1分钟前、刚刚等形式</text>	
		<view class="demo-block__body">
			<view class="demo-block card">
				<text class="demo-block__title-text large">基础使用</text>
				<view class="demo-block__body">
					<l-dateformat date="2024/11/14 05:00" :threshold="[60000, 3600000]"></l-dateformat>
					<l-dateformat :date="date" :threshold="[60000, 3600000]"></l-dateformat>
					<l-dateformat :date="date"></l-dateformat>
				</view>	
			</view>	
		</view>	
	</view>
</template>
<script>
	export default {
		data() {
			return {
				date: `${new Date().getTime()-60000}`
			}
		}
	}
	
</script>
<style lang="scss">
	.demo-block {
		margin: 32px 10px 0;
		overflow: visible;
		&.card{
			padding: 30rpx;
			background-color: white;
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