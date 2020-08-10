<template>
	<div class="leftHomeBox">
		<div class="user">
			<div class="infoUser">
				<span class="profileUser">
					<img :src="require(`@/assets/${profile.picture}`)">
					<p>{{profile.name}}</p>
				</span>
				<span class="news">
					<i class="far fa-newspaper"></i>
					<p>Noutăți</p>
					<p class="dots">···</p>
				</span>
				<span>
					<i class="fab fa-facebook-messenger"></i>
					<p>Messenger</p>
				</span>
				<span>
					<i class="fas fa-tv"></i>
					<p>Watch</p>
				</span>
				<span>
					<i class="fas fa-house-user"></i>
					<p>Marketplace</p>
				</span>
				<p>Scurtături</p>
				<span>
					<i class="fas fa-users"></i>
					<p>Vue.js Developers</p>
				</span>
				<span class="more">
					<i class="fas fa-caret-down"></i>
					<p>Vezi mai mult...</p>
				</span>
				<p>Explorează</p>
				<span>
					<i class="fas fa-heartbeat"></i>
					<p>COVID-19: Centrul ...</p>
				</span>
				<span class="more">
					<i class="fas fa-caret-down"></i>
					<p>Vezi mai mult...</p>
				</span>
			</div>
		</div>
		<div class="shortcuts">
			
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
  	profile() {
  		return this.$store.state.profile
  	}
  }
}
</script>

<style lang="css" scoped>
	.infoUser .news .dots {
		position: absolute;
		right:5px;
		font-size:2rem;
		color:gray;
	}
	.user .infoUser .news {
		position: relative;
		background: #f5f6f7;
		font-weight: bold;
		border:1px solid lightgray;
	}
	.infoUser .profileUser img {
		width:35px;
		height:35px;
		border-radius: 50%;
	}
	.infoUser .profileUser {
		margin-bottom:10px;
	}
	.user .infoUser .more p {
		color:red;
	}
	.user .infoUser span p {
		margin-left:5px;
	}
	.user .infoUser span i {
		width:20px;
		font-size:1rem;
		color:red;
	}
	.user .infoUser span:hover {
		background: #f5f6f7;
		border:1px solid lightgray;
		cursor:pointer;
	}
	.user .infoUser .more:hover {
		background: transparent;
		border:1px solid transparent;
		text-decoration: underline;
	}
	.user .infoUser span {
		display: flex;
		align-items: center;
		padding:0 10px;
		border-radius: 3px;
		border:1px solid transparent;
	}
	.user .infoUser > p {
		font-weight: bold;
		color:#555;
	}
	.leftHomeBox .user .infoUser {
		display: flex;
		flex-direction: column;
		font-size:0.8rem;
	}
.homeBox .leftHomeBox {
		/*border:1px solid;*/
		width:190px;
	}
</style>