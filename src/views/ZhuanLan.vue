<template>
	<div>
		<ul class="nav">
			<div class="nav-box">
				<img src="../assets/image/zhihu.png" />
				<li class="nav-bar bl-text-color-gray">
					<p class="more">···</p>
				</li>
				<li class="nav-bar bl-text-color-gray bl-df-left">
					<a href="https://zhuanlan.zhihu.com/write"><button class="btn-write">
						<svg class="Edit" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M18.453 7.992l-1.833-1.65.964-.978a1.223 1.223 0 0 1 1.73-.012l.005.006a1.24 1.24 0 0 1 .007 1.748l-.873.886zm-1.178 1.194l-5.578 5.66-1.935.697a.393.393 0 0 1-.504-.504l.697-1.935 5.488-5.567 1.832 1.65zM7.58 5.848l5.654.006-1.539 1.991-3.666.012A1.02 1.02 0 0 0 7 8.868v7.993c0 .558.46 1.01 1.029 1.01l7.941-.01c.568 0 1.03-.453 1.03-1.012v-4.061l2-1.442v6.002c0 1.397-1.2 2.501-2.62 2.501H7.574C6.153 19.85 5 18.717 5 17.32V8.35c0-1.397 1.16-2.502 2.58-2.502z"></path></svg>
						写文章</button></a>
				</li>
			</div>	
		</ul>
		<!-- 二级路由入口 -->
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'zhuanlan',
		data() {
			return {};
		},
		created() {}
	}
</script>

<style lang="scss" scoped>
	.Edit{
		fill: #0084ff;
		width: 22px;
		height:22px;
		// border: #000000 2px solid;
	}
	.nav {
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgb(255,255,255);
		z-index: 999;
		display: inline;
	}
	.nav-box{
		width: 80%;
		margin: 0 auto;
		height: 50px;
    }
	.nav-bar {
		float: right;
		margin-top: 16px;
		display: inline-block;
		margin-left: 20px;
		.btn-write{
			color: #0084ff;
			border-color: #0084ff;
			text-align: center;
			background: #fbfcfc;
			border: 1px solid;
			border-radius: 3px;
			height: 33px;
			width: 100px;
			display: flex;
			justify-content: center;
			align-content: center;
		}
		.btn-write:hover{
			background-color: #f0f8ff;
		}
		.more{
			color: #8590a6;
			font-weight: 600px;
			font-size: 28px;
			// border: #000000 2px solid;
		}
	}
</style>
