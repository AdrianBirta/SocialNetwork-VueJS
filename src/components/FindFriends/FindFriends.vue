<template>
	<div class="body">
		<div class="body-box ">
			<div class="spaceBox"></div>
			<div class="users box">
				<div class="usersHeader">
					<p><strong>Poate îi cunoști</strong></p>
				</div>
				<appUser 
					v-for="(user, index) in $store.getters.getUsers"
					:key="index" 
					:user="user">		
				</appUser>
			</div>
		</div>
	</div>
</template>

<script>
import User from './Users/User';
export default {
  components: {
  	appUser : User
  },
  computed: {
  }
};
</script>

<style lang="css" scoped>
	.users .usersBody .userRight .deleteUser {
		background: #f5f6f7;
		padding: 8px 10px;
		font-weight: bold;
		color:gray;
		border:1px solid lightgray;
		border-radius: 3px;
	}
	.users .usersBody .userRight .addUser {
		display: flex;
		align-items: center;
		margin-right: 10px;
		background: #4267b2;
		color: #fff;
		padding: 8px 10px;
		border-radius: 3px;
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
	.users .usersHeader p {
		margin: 0;
		border-bottom: 1px solid lightgray;
		margin-left: -20px;
		padding-left: 26px;
		padding-bottom: 20px;
	}
	.box a {
		text-decoration: none;
		color:#4267b2;
	}
	.box{
		display: flex;
		flex-direction: column;
		width:100%;
		border:1px solid lightgray;
		border-radius: 3px;
		background:#fff;
		margin:15px 0;
		padding:20px;
		font-size:15px;
	}
	.spaceBox {
		padding-top:60px;
		/*border:1px solid red;*/
	}
	.body .body-box {
		width:915px;
		overflow:hidden;
		margin:0 auto;
	}
	.body {
		margin:0;
		background:#e9ebee;
	}
</style>
