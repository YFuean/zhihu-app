<template>
	<div class="body">
		<div class="banner">
			<img src="../assets/image/round.png" />
			<h3>圆桌</h3>
		</div>
		<div class="cards">
			<div class="card-roundtable" v-for="(item,index) in roundtable" :key="index">
				<div class="talk" :style="{'background-image':'url('+item.banner+')'}">
					<p class="bl-meta-000000">{{ item.name}}</p>
					<p class="bl-meta-000000min">{{ item.visitsCount }}次浏览</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'roundtable',
		data() {
			return {
				roundtable: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/roundtable/all').then(res => {
				console.log(res);
				this.roundtable = res.data.data;
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
		// border: 2px solid #000000;
		.card-roundtable {
			width: 200px;
			height: 200px;
			border-radius: 10px;
			// border: 2px solid #000000;
			margin-right: 25px;
			margin-bottom: 25px;
			float: left;

			.img {
				width: 200px;
				height: 200px;
				border-radius: 10px;
			}

			.talk {
				width: 200px;
				height: 200px;
				border-radius: 10px;
				padding-top: 150px;
				padding-left: 20px;
			}

		}

	}
</style>
