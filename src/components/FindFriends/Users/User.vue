<template>
	<div class="usersBody">
		<div class="userLeft">
			<img :src="require(`@/assets/${user.picture}`)">
			<p>{{ user.name }}</p>
		</div>
		<div class="userRight">
			<div class="addUser" @click="addFriend">
				<i class="fas fa-user-plus"></i>
				<p>Adaugă</p>
			</div>
			<div class="deleteUser" @click="deleteUser">
				<p>Șterge</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['user'],
  data () {
    return {

    }
  },
  methods: {
  	addFriend() {
  		this.$store.dispatch('addNewFriend', this.user)
  	},
  	deleteUser() {
  		this.$store.dispatch('deleteUser', this.user)
  	}
  }
}
</script>

<style lang="css" scoped>
	.users .usersBody .userRight .deleteUser {
		background: #f5f6f7;
		padding: 8px 10px;
		font-weight: bold;
		color:gray;
		border:1px solid lightgray;
		border-radius: 3px;
		cursor: pointer;
	}
	.users .usersBody .userRight .addUser {
		display: flex;
		align-items: center;
		margin-right: 10px;
		background: #c83f3f;
		color: #fff;
		padding: 8px 10px;
		boder:1px solid #c83f3f;
		border-radius: 3px;
		cursor: pointer;
	}
	.users .usersBody .userRight .addUser p, .users .usersBody .userRight .deleteUser p {
		margin:0;
	}
	.users .usersBody .userRight {
		display: flex;
		align-items: center;
	}
	.usersBody .userLeft img {
		width: 80px;
		height: 80px;
		margin-right:10px;
	}
	.usersBody .userLeft {
		display: flex;
		align-items: center;
	}
	.usersBody {
		display: flex;
		justify-content: space-between;
		padding: 2rem 2rem 1rem 1rem;
		border-bottom: 1px solid lightgray;
		margin-right: 2.5rem;
	}
</style>