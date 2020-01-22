<template>
	<div class="body">
		<!-- 专题 -->
		<div class="banner">
			<svg class="icon-explore" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
				 fill-rule="evenodd"></path>
			</svg>
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
		<div class="btn-box">
			<button class="btn">
				<router-link to="/special/all" class="bl-gry-whigt-16px">查看更多专题&nbsp;></router-link>
			</button>
		</div>


		<!-- 圆桌讨论 -->
		<div class="banner">
			<svg class="icon-explore" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
				 fill-rule="evenodd"></path>
			</svg>
			<h3>圆桌讨论</h3>
		</div>
		<div class="cards">
			<div class="card" v-for="(item,index) in roundtable" :key="index">
				<div class="talk" :style="{'background-image':'url('+item.banner+')'}">
					<p class="bl-title-ffffff">{{ item.name}}</p>
					<p class="bl-text-color-white talk-content">近期指数基金突然在知乎火了起来，各种大V、小V创作者们如雨后春笋般冒出来推荐指数基金，到底指数基金好不好，是不是真的适合小白，小白如何入门，让我们一起来探讨！</p>
					<div class="bl-df-left">
						<p class="bl-meta-ffffff"><img class="talk-img" src="../assets/image/t1png.png"><img class="talk-img" src="../assets/image/t1png.png"><img
							 class="talk-img" src="../assets/image/t1png.png">{{item.includeCount}}位嘉宾参与|358人次浏览</p>
						<button class="round-btn">关注圆桌</button>
					</div>
				</div>
				<div class="round-talk">
					<div class="round-tip">
						<p>就教育而言，中国大学和美国大学的各自优缺点是什么？</p>
						<p class="bl-meta">14个回答</p>
					</div>
					<div class="round-tip">
						<p>中国国民是不是素质低？根源是什么？</p>
						<p class="bl-meta">173个回答</p>
					</div>
					<div class="round-tip">
						<p>中国科技水平和美国差距有多大？</p>
						<p class="bl-meta">639个回答</p>
					</div>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<button class="btn">
				<router-link to="/roundtable/all" class="bl-gry-whigt-16px">查看更多专题&nbsp;></router-link>
			</button>
		</div>

		<!-- 热门收藏夹 -->
		<div class="banner">
			<svg class="icon-explore" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
				 fill-rule="evenodd"></path>
			</svg>
			<h3>热门收藏夹</h3>
		</div>
		<div class="cards">
			<div class="card" v-for="(item,index) in favorite" :key="index">
				<div class="head-box">
					<div class="bl-df-between title-box">
						<p class="bl-title">{{item.title}}</p>
						<div class="bl-df-right"><button class="btn-favorite">关注收藏夹</button></div>
					</div>
					<div class="bl-df-left">
						<div class="bl-df-left">
							<div><img :src="item.creatorAvatar"></div>
							<div>
								<p class="creator">{{item.creatorName}}</p>
							</div>
						</div>
						<div class="creator">
							<p class="bl-meta">创建&nbsp;&nbsp;|&nbsp;&nbsp;{{item.followers}}人关注</p>
						</div>
					</div>
				</div>
				<hr class="bl-meta">
				<div class="body-box">
					<div class="tip-box">
						<p class="bl-sub-title">{{item.questionTitle}}</p>
						<div class="bl-left answer">
							<p class="text">{{item.answerAuthorname}}:{{item.answerContent}}</p>
						</div>
						<div class="bl-left">
							<p class="bl-meta">回答&nbsp;{{item.voteupCount}}赞同·{{item.commentCount}}评论</p>
						</div>
					</div>
					<div class="tip-box">
						<p class="bl-sub-title">{{item.questionTitle}}</p>
						<div class="bl-left answer">
							<p class="text">{{item.answerAuthorname}}:{{item.answerContent}}</p>
						</div>
						<div class="bl-left">
							<p class="bl-meta">回答&nbsp;{{item.voteupCount}}赞同·{{item.commentCount}}评论</p>
						</div>
					</div>
					<div>
						<p class="bl-gry-whigt-16px">已收藏{{item.totalCount}}条内容&nbsp;></p>
					</div>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<button class="btn">
				<router-link to="/favorite/all" class="bl-gry-whigt-16px">查看更多收藏夹&nbsp;></router-link>
			</button>
		</div>

		<!-- 专栏 -->
		<div class="banner">
			<svg class="icon-explore" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
				 fill-rule="evenodd"></path>
			</svg>
			<h3>专栏</h3>
		</div>
		<div class="cards-columns">
			<div class="card-columns" v-for="(item,index) in columns" :key="index">
				<div class="img-columns"><img :src="item.imageUrl" class="img-co"></div>
				<div class="columns-title">
					<p class="bl-sub-title">{{item.title}}</p>
				</div>
				<div class="columns-count">
					<p class="bl-meta">{{item.followers}}关注·{{item.articlesCount}}文章</p>
				</div>
				<div class=" columns-des">
					<p class="text-columns">{{item.description}}</p>
				</div>
				<div class=" columns-btn"><a :href="item.url"><button class="btn-favorite">进入专栏</button></a></div>
			</div>
		</div>
		<div class="btn-box">
			<button class="btn">
				<router-link to="/zhuanlan/columns/random" class="bl-gry-whigt-16px">查看更多专栏&nbsp;></router-link>
			</button>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'explore',

		data() {
			return {
				specials: [],
				roundtable: [],
				favorite: [],
				columns: []
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
			this.axios.get('http://localhost:8080/api/favorite').then(res => {
				console.log(res);
				this.favorite = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/columns').then(res => {
				console.log(res);
				this.columns = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.body {
		margin-top: 62px;
		height: 3600px;
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
		white-space: nowrap; //强制文本在一行内显示
		text-overflow: ellipsis; //当文本溢出时显示省略标记
	}

	.btn-favorite {
		border-radius: 3px;
		background-color: #ebf5ff;
		color: #6495ed;
		font-size: 14px;
		font-weight: 600;
		border: none;
		width: 102px;
		height: 34px;
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

	.cards-columns {
		width: 80%;
		margin-right: 10%;
		margin: 0 auto;
		height: 340px;
		
		.card-columns {
			float: left;
			margin-right: 18px;
			margin-bottom: 20px;
			width: 23%;
			height: 320px;
			background-color: #FFFFFF;
			border-radius: 10px;

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
				.text-columns{
					width: 100%;
					height: 42px;
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

	.cards {
		width: 80%;
		margin: 0 auto;
		margin-right: 10%;
		height: 900px;

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
				.talk-content {
					margin-top: 20px;
					margin-bottom: 20px;
				}

				.talk-img {
					margin-right: 6px;
				}

				.round-btn {
					border-radius: 3px;
					background-color: #ffffff;
					color: #0084ff;
					font-size: 14px;
					font-weight: 600;
					border: none;
					width: 102px;
				}
			}

			.round-talk {
				margin: 20px 20px 20px 20px;

				.round-tip {
					margin-bottom: 20px;
				}
			}

			.head-box {
				margin: 20px 20px 20px 20px;

				.title-box {
					margin-bottom: 20px;
				}

				.creator {
					margin-left: 8px;
					margin-top: 8px;
				}
			}

			.body-box {
				margin: 20px 20px 20px 20px;

				.tip-box {
					margin-bottom: 20px;

					.answer {
						margin-top: 10px;
						margin-bottom: 10px;
					}
				}
			}
		}

		.card-roundtable {
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

	.btn-box {
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;

		.btn {
			align-items: center;
			padding: 0 24px 0 24px;
			height: 48px;
			background-color: #fff;
			border-radius: 25px;
			border: none;
		}
	}
</style>
