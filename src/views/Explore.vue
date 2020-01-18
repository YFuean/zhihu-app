<template>
	<div class="body">
		<!-- 专题 -->
		<div class="banner">
			<img src="../assets/image/book.png" />
			<h3>最新专题</h3>
		</div>
		<div class="cards">
			<div class="card" v-for="(item,index) in specials" :key="index">
				<div class="img"><img :src="item.banner" class="img"></div>
				<div class="talk">
					<h3>{{ item.title}}</h3>
					<p class="bl-meta">{{ item.updated}} 更新，{{ item.viewCount }}次浏览</p>
					<p class="">{{ item.introduction }}</p>
					<div v-for="(section,index) in item.sections" :key="index" class="">
						{{ section.sectionTitle }}
					</div>
				</div>
			</div>		
		</div>
		<div >
			<button class="btn"><router-link to="/special/all">查看更多专题</router-link></button>
		</div>
		

		<!-- 圆桌讨论 -->
		<div class="banner">
			<img src="../assets/image/round.png" />
			<h3>圆桌讨论</h3>
		</div>
		<div class="cards">
			<div class="card-roundtable" v-for="(item,index) in roundtable" :key="index">
				<div class="talk" :style="{'background-image':'url('+item.banner+')'}" >
					<p class="bl-title-ffffff">{{ item.name}}</p>
					<p class="bl-meta-ffffff">{{item.includeCount}} 位参与者，{{ item.visitsCount }}次浏览</p>
				</div>
			</div>
		</div>
		<div >
			<button class="btn"><router-link to="/roundtable/all">查看更多圆桌</router-link></button>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'explore',
		
		data() {
			return {
				specials: [],
				roundtable:[]
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special').then(res => {
				console.log(res);
				console.log("ceece")
				this.specials = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/roundtable').then(res => {
				console.log(res);
				this.roundtable = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.body {
		margin-top: 62px;
		height: 2000px;
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
		// border: 2px solid #000000;
		background-color: #f6f6f6;
		display: flex;
		align-items: center;

		img {
			height: 60%;
		}
	}

	.cards {
		width: 80%;
		margin: 0 auto;
		margin-right: 10%;
		// border: 2px solid #000000;

		.card {
			float: left;
			margin-right: 18px;
			margin-bottom: 20px;
			width: 48%;
			height: 430px;
			background-color: #FFFFFF;
			border-radius: 10px;
			// border: 2px solid #000000;
			.img {
				width: 100%;
				height: 200px;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				// border: 2px solid #000000;
			}

			.talk {
				width: 100%;
				height: 230px;
				padding: 20px 20px 20px 20px;
				// border: 2px solid #000000;
			}
		}
		.card-roundtable{
			float: left;
			margin-right: 18px;
			margin-bottom: 50px;
			width: 48%;
			height: 200px;
			background-color: #FFFFFF;
			border-radius: 10px;
			
			.img {
				width: 100%;
				height: 200px;
				border-radius: 10px;
				// border: 2px solid #000000;
			}
			
			.talk {
				width: 100%;
				height: 230px;
				padding: 20px 20px 20px 20px;
				// border: 2px solid #000000;
			}
		}
	}
	.btn {
		width: 30px;
		height: 120px;
		background-color: #5d9cec;
		border-radius: 40px;
	}
</style>
