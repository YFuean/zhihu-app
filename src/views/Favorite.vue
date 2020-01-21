<template>
	<div class="body">
		<div class="banner">
			<div class="center">
				<svg class="icon-explore" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
					<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
					 fill-rule="evenodd"></path>
				</svg>
				<h3>热门收藏夹</h3>
			</div>
		</div>
		<div class="cards">
			<div class="card" v-for="(item,index) in favorite" :key="index">
				<div class="left">
					<p class="bl-sub-title">{{item.title}}</p>
					<div class="bl-df-left creator"><img :src="item.creatorAvatar" class="creator-img">
						<div class="creator-name">{{item.creatorName}}
							<p class="bl-meta">创建</p>
						</div>
					</div>
					<div class="bl-df-left bl-meta"><button class="btn-favor">关注收藏夹</button>{{item.followers}}人关注</div>
				</div>
				<div class="right">
					<p class="bl-sub-title">{{item.questionTitle}}</p>
					<p class="text content">{{item.answerAuthorname}}:{{item.answerContent}}</p>
					<p class="bl-meta content">回答&nbsp;{{item.voteupCount}}赞同·{{item.commentCount}}评论</p>
					<p class="bl-meta content">已收藏{{item.totalCount}}条内容&nbsp;></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'favorite',
		data() {
			return {
				favorite: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/favorite/all').then(res => {
				console.log(res);
				this.favorite = res.data.data;
			});
		}
	};
	// export default {
	// 	name: 'favorite',
	// 	data() {
	// 		return {
	// 			favorite: [],
	// 			currentPage:1,
	// 			count:20,
	// 			scroll:''
	// 		};
	// 	},
	// 	created() {
	// 		this.axios({
	// 			method:'post',
	// 			url:'http://localhost:8080/api/favorite/page',
	// 			params:{
	// 				count:this.count,
	// 				currentPage:this.currentPage
	// 			}
	// 		}).then(res =>{
	// 			console.log(res.data.data);
	// 			this.favorite = res.data.data;
	// 			console.log(this.favorite.length);
	// 		});
	// 	},
	// 	method:{
	// 		loadMore(){
	// 			this.currentPage = this.currentPage + 1;
	// 			this.axios({
	// 				method:'post',
	// 				url:'http://localhost:8080/api/favorite/page',
	// 				params:{
	// 					count:this.count,
	// 					currentPage:this.currentPage
	// 				}
	// 			}).then(res =>{
	// 				console.log(res.data.data);
	// 				let temp = [];
	// 				temp = res.data.data;
	// 				for(var i =0; i < temp.length;i++){
	// 					this.favorite.splice(this.currentPage * this.count,0,temp[i]);
	// 				}
	// 				console.log(this.favorite.length);
	// 			});
	// 		},
	// 		scrollDs(){
	// 			//变量scrollTop是滚动条滚动时，距离顶部的位置
	// 			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	// 			//变量windowHeight是可视区的高度
	// 			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
	// 			//变量scrollHeight是滚动条的总高度
	// 			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
	// 			//滚动条到底部的条件
	// 			if(scrollTop + windowHeight == scrollHeight){
	// 				console.log('到底部了');
	// 				this.loadMore();
	// 			}
	// 		}
	// 	},
	// 	mounted(){
	// 		window.addEventListener('scroll',this.scrollDs);
	// 	}
	// };
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

	.text {
		width: 100%;
		overflow: hidden; //溢出内容隐藏
		height: 42px;
		text-overflow: ellipsis; //当文本溢出时显示省略标记
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

		.card {
			width: 100%;
			height: 180px;
			margin-top: 10px;
			background-color: #FFFFFF;
			border-radius: 8px;
			display: flex;
			justify-content: flex-start;
			align-content: center;

			.talk {
				// border: 2px solid #000000;
				width: 600px;
				height: 180px;
				margin-top: 14px;
				margin-left: 16px;
			}

			.left {
				width: 30%;
				padding: 20px 20px 20px 20px;

				.creator {
					display: flex;
					margin-top: 20px;
					margin-bottom: 30px;

					.creator-img {
						margin-right: 10px;
						border-radius: 4px;

						.creator-name {
							margin-top: 10px;
							display: flex;
						}
					}
				}
				.btn-favor {
					border-radius: 3px;
					background-color: #ebf5ff;
					color: #6495ed;
					font-size: 14px;
					font-weight: 600;
					border: none;
					width: 102px;
					height: 30px;
					margin-right: 18px;
				}
			}

			.right {
				width: 70%;
				padding: 20px 20px 20px 20px;

				.content {
					margin-bottom: 16px;
				}
			}
		}

	}
</style>
