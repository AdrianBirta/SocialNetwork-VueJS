<template>
	<div class="container">
		<i class="fab fa-facebook-square"></i>
		<div class="searchNavbar">
			<input type="text" value="Adrian Birta">
			<i class="fas fa-search"></i>
		</div>
		<ul>
			<li class="photoName">
				<span>
					<img :src="require(`@/assets/${profile.picture}`)">
					<router-link to="/">{{lastName}}</router-link>
				</span>
			</li>
			<li><router-link to="/home">Acasă</router-link></li>
			<li>
				<router-link to="/find-friends">Găsește prieteni</router-link>
			</li>
			<li><router-link to="/create-events">Creează</router-link></li>
			<li class="mediaNavBar">
				<i class="fas fa-user-friends"></i>
				<i class="fab fa-facebook-messenger"></i>
				<i class="fas fa-bell"></i>
			</li>
			<li class="actionsNavBar">
				<i class="fas fa-question-circle"></i>
				<i class="fas fa-sort-down"></i>
			</li>
		</ul> 
		
	</div>
</template>

<script>
	export default {

	  data () {
	    return {

	    }
	  },
	  computed: {
	  	profile() {
	  		return this.$store.state.profile
	  	},
	  	lastName() {
	  			let n = this.profile.name.split(" ");
	  			return n[n.length - 1];
	  	}
	  }
	}
</script>

<style lang="css" scoped>
	.container ul .mediaNavBar i, .container ul .actionsNavBar  i {
		margin: 0 0.5rem;
	}
	.container ul .mediaNavBar, .container ul .actionsNavBar {
		display: flex;
		align-items: center;
		color:#fff;
		font-size:1.4rem;
	}
	.photoName span img {
		margin-right:0.3rem;
	}
	.photoName span {
		display: flex;
		align-items: center;
		width:100%;
	}
	ul li img {
		width:30px;
		height:30px;
		border-radius: 50%;
	}
	ul li p, ul li a {
		color:#fff;
		font-weight: bold;
		display: inline-block;
		text-decoration: none;
	}
	ul li:last-child {
		border:none;
	}
	ul li > * {
		cursor:pointer;
	}
	ul li {
		border-right:1px solid #5051bf;
		border-top-right:1px solid red;
		padding:0 0.6rem;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		height: 20px;
	}
	ul {
		list-style: none;
		display: flex;
		font-size:0.8rem;
	}
	.container .searchNavbar i {
		position: absolute;
		right:1rem;
		top:50%;
		transform:translateY(-50%);
		color:gray;
	}
	.container .searchNavbar input {
		width:100%;
		height:100%;
		padding-left:1rem;
		border:none;
	}
	.container .searchNavbar {
		position: relative;
		box-sizing: border-box;
		width:430px;
		height:25px;
		display: flex;
	}
	.container > i {
		color:#fff;
		font-size:2rem;
		margin-right:0.5rem;
	}
	.container {
		position:fixed;
		width:100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index:1;
		padding:5px 73px;
		background:#4267b2;
		animation: facebook 5s infinite;
	}
	@keyframes facebook {
		0% { background-color:#ee0505; }
		25% { background-color: #e83030; }
		50% { background-color: #c83f3f; }
		75% { background-color: #bd2d2d; }
		100% { background-color: #ee0505; }
	}
</style>