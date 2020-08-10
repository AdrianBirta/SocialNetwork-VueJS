<template>
	<div class="container">
		<div class="space"></div>
		<div class="homeBox">
			<p>Change Account</p>
		</div>
		<div class="users">
			<div v-for="user in users" :key="user.id" @click="selectUser(user)">
				<img :src="require(`@/assets/${user.picture}`)">
				<p>{{user.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	},
	computed: {
		users() {
			return this.$store.state.users;
		}
	},
	methods: {
		selectUser(user) {
			console.log(user);
			this.$store.dispatch('changeProfile', user);
		}
	}

}
</script>

<style lang="css" scoped>
	.users div img {
		width:60px;
		height:60px;
		border:2px solid transparent;
	}
	.users div:hover img {
		border:2px solid #fff;
	}
	.users div:hover {
		cursor:pointer;
		background:red;
		color:#fff;
		transition:.5s;
	}
	.users div {
		width:16%;
		border:1px solid lightgray;
		border-radius:5px;
		margin:1rem;
		background:#fff;
		padding:1rem;
		text-align: center;
		font-weight: bold;
	}
	.users {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.homeBox p {
		font-size:2rem;
		font-weight: bold;
		color:red;
	}
	.homeBox > * {
		margin-right:1rem;
	}
	.homeBox {
		display: flex;
		justify-content: center;
	}
	.space {
		padding-top:5rem;
	}
	.container {
		width:100%;
		background: #e9ebee;
		font-family: arial;

	}
</style>