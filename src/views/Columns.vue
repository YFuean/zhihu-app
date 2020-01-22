<template>
	<div class="body">
		<div class="img-co"><img src="../assets/image/zhihu-columns.png" class="img-col-top"></div>
		<div><a href="https://zhuanlan.zhihu.com/write"><button class="btn-black">开始写文章</button></a></div>
		<div class="link-columns"><a href="https://www.zhihu.com/column/request" class="link-col">申请开通专栏></a></div>
		<div class="link-columns">
			<p class="bl-sub-title">专栏 · 发现</p>
		</div>
		<div class="cards">
			<div class="card-columns" v-for="(item,index) in columns" :key="index">
				<div class="img-columns"><img :src="item.imageUrl" class="img-co"></div>
				<div class="columns-title">
					<p class="bl-sub-title text">{{item.title}}</p>
				</div>
				<div class=" columns-des">
					<p class="text-columns bl-meta">{{item.description}}</p>
				</div>
				<div class="columns-count">
					<p class="bl-meta">{{item.followers}}关注|{{item.articlesCount}}文章</p>
				</div>
				<div class=" columns-btn"><a :href="item.url"><button class="btn-green">进入专栏</button></a></div>
			</div>
		</div>
		<div><button class="btn-black" @click="getBatch()">
				<span style="display:inline-flex;align-items:center">​<svg class="Zi Zi--Refresh Button-zi" fill="currentColor"
					 viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path d="M20 12.878C20 17.358 16.411 21 12 21s-8-3.643-8-8.122c0-4.044 3.032-7.51 6.954-8.038.034-1.185.012-1.049.012-1.049-.013-.728.461-1.003 1.057-.615l3.311 2.158c.598.39.596 1.026 0 1.418l-3.31 2.181c-.598.393-1.08.12-1.079-.606 0 0 .006-.606-.003-1.157-2.689.51-4.675 2.9-4.675 5.708 0 3.21 2.572 5.822 5.733 5.822 3.163 0 5.733-2.612 5.733-5.822 0-.633.51-1.148 1.134-1.148.625 0 1.133.515 1.133 1.148"
						 fill-rule="evenodd"></path>
					</svg></span>
				换一换
			</button></div>
		<div class="img-co"><img src="../assets/image/zhihu-col-bottom.png" class="img-col-top"></div>
		<div><a href="https://www.zhihu.com/column/request"><button class="btn-black">换申请专栏</button></a></div>
	</div>
</template>

<script>
	export default {
		name: 'columns',
		data() {
			return {
				columns: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/zhuanlan/columns/random').then(res => {
				console.log(res);
				this.columns = res.data.data;
			});
		},
		methods: {
			getBatch() {
				this.axios.get('http://localhost:8080/api/zhuanlan/columns/random').then(res => {
					console.log(res);
					this.columns = res.data.data;
				});
			}
		}

	};
</script>

<style lang="scss" scoped>
	.text {
		width: 100%;
		overflow: hidden; //溢出内容隐藏
		white-space: nowrap; //强制文本在一行内显示
		text-overflow: ellipsis; //当文本溢出时显示省略标记
	}

	.btn-black {
		background-color: #fbfbfb;
		border-color: #444;
		border-radius: 3px;
		border: 1px solid;
		text-align: center;
		height: 38px;
		width: 120px;

	}

	.btn-black:hover {
		background-color: #f5f5f7;
	}

	.btn-green {
		color: #11a668;
		border-color: #11a668;
		background-color: #ffffff;
		border-radius: 3px;
		border: 1px solid;
		text-align: center;
		height: 33px;
		width: 110px;
	}

	.btn-green:hover {
		background-color: #f1faf6;
	}

	.link-col {
		color: #11a668;
		font-size: 14px;
	}

	.body {
		margin-top: 62px;
		text-align: center;
		width: 100%;
		height: 1800px;
		background-color: #fbfbfb;

		.img-co {
			width: 100%;
			height: 400px;

			.img-col-top {
				width: 100%;
				height: 400px;
			}
		}

		.link-columns {
			margin-top: 20px;
			margin-bottom: 20px;
		}

		.cards {
			margin: 0 auto;
			width: 80%;
			height: 690px;

			.card-columns {
				float: left;
				margin-right: 18px;
				margin-bottom: 20px;
				width: 23%;
				height: 320px;
				background-color: #ffffff;
				border-radius: 10px;
				box-shadow: 6px 6px 6px 6px #f5f6f6;

				.img-columns {
					margin: 0 auto;
					width: 80px;
					margin-bottom: 20px;
					margin-top: 20px;

					.img-co {
						width: 80px;
						height: 80px;
						border-radius: 50px;
					}

				}

				.columns-title {
					margin: 0 auto;
					text-align: center;
					width: 80%;
				}

				.columns-count {
					margin: 0 auto;
					margin-bottom: 20px;
					text-align: center;
					width: 80%;
				}

				.columns-des {
					margin: 0 auto;
					margin-bottom: 20px;
					text-align: center;
					height: 50px;
					width: 80%;

					.text-columns {
						width: 100%;
						height: 52px;
						overflow: hidden; //溢出内容隐藏
						text-overflow: ellipsis; //当文本溢出时显示省略标记
					}
				}

				.columns-btn {
					margin: 0 auto;
					text-align: center;
				}
			}
		}
	}
</style>
