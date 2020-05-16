<template>
	<div class="friends box">
		<div class="friendsHeader">
			<span class="friendsHeaderLeft">
				<i class="fas fa-user-friends"></i>
				<p style="margin:0 10px;">Prieteni <span style="color:gray;">{{ friendsLength }}</span></p>
			</span>
			<a href="#">Găsește prieteni</a>
		</div>
		<div class="friendsBody">
			<div class="friend"  v-for="(friend,index) in getFriends" :key="index" >
				<template v-if="index <= 8">
					<img  :src="require(`@/assets/${friend.picture}`)">
					{{ friend.name }}
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data () {
		return {
		}
	},
	computed: {
		...mapGetters(['getFriends', 'friendsLength'])
	},
	methods: {
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
	}
	.friends .friendsBody .friend {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5px 5px 15px;
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
		color:#c83f3f;
	}
	.box{
		display: flex;
		flex-direction: column;
		width:310px;
		border:1px solid lightgray;
		border-radius: 3px;
		background:#fff;
		margin-top:15px;
		padding:15px;
		font-size:12px;
	}
</style>