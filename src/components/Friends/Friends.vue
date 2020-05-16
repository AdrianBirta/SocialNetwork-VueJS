<template>
	<div class="body">
		<div class="body-box">
			<div class="friends box">
				<div class="friendsHeader">
					<span class="friendsHeaderLeft">
						<i class="fas fa-user-friends"></i>
						<p style="margin:0 10px;">Prieteni {{ friendsLength }}</p>
					</span>
				</div>
				<div class="friendsBody">
					<appFriend 
						v-for="friend in getFriends" 
						:key="friend.id" 
						:friend="friend"
						/>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Friend from './Friend/Friend.vue';
	import { mapGetters } from 'vuex';
	export default {
		data () {
			return {
			}
		},
		computed: {
			...mapGetters(['getFriends','friendsLength'])
		},
		components: {
			appFriend : Friend
		}
	}
</script>

<style lang="css" scoped>
	.friendsHeader .friendsHeaderLeft {
		font-size:1.5rem;
		color:gray;
	}
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
	.friends .friendsHeader .friendsHeaderLeft, .events .eventsHeader .eventsHeaderLeft {
		display: flex;
		align-items: flex-start;
	}
	.container .friends .friendsHeader, .events .eventsHeader {
		display: flex;
		justify-content: space-between;
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
		margin-top:15px;
		padding:15px;
		font-size:12px;
	}
	.body .body-box {
		width:915px;
		border-radius: 5px;
		overflow:hidden;
		margin:0 auto;
	}
	.body {
		margin:0;
		background:#e9ebee;
	}
</style>