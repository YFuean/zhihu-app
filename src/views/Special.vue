<template>
	<div class="body">
		<div class="banner">
			<img src="../assets/image/book.png" />
			<h3>全部专题</h3>
			<p class="bl-meta">共有{{specials.length}}个文章</p>
		</div>
		<div class="cards">
			<div class="card" v-for="(item,index) in specials" :key="index">
				<div class="img"><img :src="item.banner" class="img"></div>
				<div class="talk">
					<p class="bl-title">{{ item.title}}</p>
					<p class="bl-meta">{{ item.updated}} 更新，{{ item.viewCount }}次浏览</p>
					<p class="">{{ item.introduction }}</p>
					<span v-for="(section,index) in item.sections" :key="index" class="">
						{{ section.sectionTitle }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'special',
		data() {
			return {
				specials: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special/all').then(res => {
				console.log(res);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.body {
		margin-top: 62px;
	}

	h3 {
		color: #1a1a1a;
		font-size: 30px;
	}

	h4 {
		color: #a8b2b4;
		font-size: 20px;
	}

	.banner {
		width: 80%;
		margin: 0 auto;
		height: 80px;
		background-color: #ffffff;
		display: flex;
		align-items: center;

		img {
			height: 60%;
		}
	}

	.cards {
		width: 80%;
		margin: 0 auto;
		.card {
			width: 100%;
			height: 220px;
			margin-top: 10px;
			background-color: #FFFFFF;
			border-radius: 8px;
			display: flex;
			justify-content: flex-start;
			align-content: center;
			.img{
				border-radius: 8px;
				width: 400px;
				height: 180px;
				margin-top: 10px;
				margin-left: 8px;
			}
			.talk{
				// border: 2px solid #000000;
				width: 600px;
				height: 180px;
				margin-top: 14px;
				margin-left: 16px;
			}
		}

	}

	.img-circle {
		padding: 5px;
		width: 90%;
		height: 90%;
		border-radius: 10px;
	}
</style>
