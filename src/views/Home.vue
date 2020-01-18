<template>
	<div class="body">
		<div class="banner">
			<ul class="mulu-2">
				<li class="router">
					<router-link to="/recommoned">
						<h3>推荐</h3>
					</router-link>
				</li>
				<li class="router">
					<router-link to="/follow">
						<h3>关注</h3>
					</router-link>
				</li>
				<li class="router">
					<router-link to="/hot">
						<h3>热榜</h3>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="container">
			<!-- 二级路由入口 -->
			<router-view />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {};
		},
		created() {}
	}
</script>
<style lang="scss" scoped>
.body{
	width: 60%;
	margin: 0 auto;
	height: 1000px;
	display: inline;
	border: 2px solid black;
}
.banner{
	
}

</style>
