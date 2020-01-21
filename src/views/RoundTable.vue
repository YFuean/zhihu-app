<template>
	<div class="body">
		<div class="banner">
			<div class="center">
				<svg class="icon-explore" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z" fill-rule="evenodd"></path></svg>
				<h3>圆桌</h3>
			</div>
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
		width: 100%;
		margin: 0 auto;
		height: 60px;
		background-color: #ffffff;
		display: flex;
		align-items: center;
	
		.center {
			display: flex;
			width: 80%;
			margin: 0 auto;
			align-items: center;
			height: 60px;
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
