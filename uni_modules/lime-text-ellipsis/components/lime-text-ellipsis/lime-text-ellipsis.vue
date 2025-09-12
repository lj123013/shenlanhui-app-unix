<template>
	<view class="demo" title="省略文本" type="ultra">
		<view class="card">
			<view>
				<text class="title">基础用法</text>
			</view>
			<l-text-ellipsis content="很多时候，总以为可以一直拥有，拥有那些自己想要的快乐，用于那些自以为需要的一切，只是，却没发现，当心正开始从无到有慢慢接纳的时候。离失去也就不远了。"></l-text-ellipsis>
		</view>
		<view class="card">
			<view>
				<text  class="title">展开/收起</text>
			</view>
			<l-text-ellipsis content="年轻的时候，我们常常冲着镜子做鬼脸；年老的时候，镜子算是扯平了" expand-text="展开" collapse-text="收起"></l-text-ellipsis>
		</view>
		<view class="card">
			<view>
				<text  class="title">自定义展示行数</text>
			</view>
			<l-text-ellipsis content="树叶，离开了树桠，不全是季节的无奈。换来了新生，何尝不是一种胸怀。花朵，离开了花枝，不全是规律的悲哀。化作了春泥，生命也许更为精彩。离开，或许不是离开，如果心中有爱。离开，或许不是离开，如果因为未来。" rows="3" expand-text="展开" collapse-text="收起"></l-text-ellipsis>
		</view>
		<view class="card">
			<view>
				<text class="title">头部省略</text>
			</view>
			<l-text-ellipsis position="start" content="树叶，离开了树桠，不全是季节的无奈。换来了新生，何尝不是一种胸怀。花朵，离开了花枝，不全是规律的悲哀。化作了春泥，生命也许更为精彩。离开，或许不是离开，如果心中有爱。离开，或许不是离开，如果因为未来。" rows="3" expand-text="展开" collapse-text="收起"></l-text-ellipsis>
		</view>
		<view class="card">
			<view>
				<text class="title">中间省略</text>
			</view>
			<l-text-ellipsis position="middle" content="树叶，离开了树桠，不全是季节的无奈。换来了新生，何尝不是一种胸怀。花朵，离开了花枝，不全是规律的悲哀。化作了春泥，生命也许更为精彩。离开，或许不是离开，如果心中有爱。离开，或许不是离开，如果因为未来。" rows="3" expand-text="展开" collapse-text="收起"></l-text-ellipsis>
		</view>
		<view class="card">
			<view>
				<text  class="title">插槽</text>
			</view>
			<!-- 无法直接获取自定义icon， 故需要设置 expandText 占位  -->
			<l-text-ellipsis 
				:content="content" 
				rows="3">
				
				<template #icon={expanded}>
					<text class="icon" :class="{show: expanded}">⮞</text>
				</template>
			</l-text-ellipsis>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				content: ''
			}
		},
		mounted() {
			setTimeout(() => {
				this.content = `那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。`
			},1500)
		}
	}
</script>
<style lang="scss">
	.demo {
		padding: 20px;
	}
	.card {
		margin-bottom: 20px;
		.title {
			margin-bottom: 10px;
			display: inline-flex;
			font-weight: bold;
		}
	}
	.icon {
		position: absolute;
		transition: rotate 300ms;
	}
	.show {
		transform: rotate(-90deg);
	}
</style>
