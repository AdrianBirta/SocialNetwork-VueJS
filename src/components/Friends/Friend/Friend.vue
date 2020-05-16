<template>
	<div class="friend">
		<div class="leftBoxFriend">
			<img  :src="require(`@/assets/${friend.picture}`)">
			{{ friend.name }}
		</div>
		<div class="rightBoxFriend" @click="deleteFriend">
			<i class="fas fa-user-minus"></i>
			<p>Șterge</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['friend'],
	data () {
		return {}
	},
	methods: {
		deleteFriend() {
			this.$store.dispatch('deleteFriend',this.friend)
		}
	}
}
</script>

<style lang="css" scoped>
	.friends .friendsBody {
		display: flex;
		flex-wrap: wrap;
		margin-top: 15px;
	}
	.friends .friendsBody .friend img {
		width: 90px;
		height: 90px;
		margin-bottom: 5px;
		margin-right:20px;
	}
	.friendsBody .friend .rightBoxFriend p {
		margin:0 5px;
	}
	.friendsBody .friend .rightBoxFriend:hover {
		background:red;
		color:#fff;
		border:1px solid red;
	}
	.friendsBody .friend .rightBoxFriend {
		display: flex;
		margin-right:30px;
		background:#f5f6f7;
		color:gray;
		padding:5px 10px;
		border:1px solid lightgray;
		border-radius: 5px;
		cursor:pointer;
		transition:.5s;
	}
	.friendsBody .friend .leftBoxFriend {
		display: flex;
		align-items: center;
	}
	.friends .friendsBody .friend {
		padding:10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 5px 5px 15px;
		width:45%;
		border:1px solid lightgray;
		border-radius: 3px;
	}
</style>