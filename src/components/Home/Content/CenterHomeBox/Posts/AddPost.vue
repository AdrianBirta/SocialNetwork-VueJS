<template>
	<div class="addPost">
		<div class="addPostHeader">
			<p>Creează o postare</p>
		</div>
		<div class="addPostBody">
			<img src="@/assets/profile.jpg">
			<textarea @keyup.enter="addNewPost" type="text" v-model="content" placeholder="La ce te gândești, Birta?"></textarea>
		</div>
		<div class="addPostFooter">
			<span>
				<i data-v-452cf7f8="" class="fas fa-images" aria-hidden="true"></i>
				<p>Foto/Video</p>
			</span>
			<span>
				<i data-v-452cf7f8="" class="fas fa-user-tag" aria-hidden="true"></i>
				<p>Etichetează</p>
			</span>
			<span>
				<i data-v-452cf7f8="" class="far fa-grin" aria-hidden="true"></i>
				<p>Stare/Activitate</p>
			</span>
			<span>
				<p>···</p>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				content:''
			}
	  	},
		methods: {
			addNewPost() {
				this.$store.dispatch('addNewPost',this.content)
				this.content = '';
			}
		}
	}
</script>

<style lang="css" scoped>
	.centerHomeBox .addPost .addPostFooter span i {
		margin-right:5px;
	}
	.centerHomeBox .addPost .addPostFooter span p {
		margin:0;
	}
	.centerHomeBox .addPost .addPostFooter span {
		display: flex;
		align-items: center;
		background:#F5F6F7;
		margin:1rem 0.1rem 1rem 1rem;
		padding:0.7rem;
		font-size:0.9rem;
		border-radius: 16px;

	}
	.centerHomeBox .addPost .addPostFooter {
		display: flex;
	}
	.centerHomeBox .addPost .addPostBody textarea {
		background:transparent;
		border:none;
		padding:1rem;
		width:80%;
		/*resize:none;*/
		resize: vertical;
	}
	.centerHomeBox .addPost .addPostBody img {
		width:60px;
		height:60px;
		border-radius: 50%;
		align-self: flex-start;
	}
	.centerHomeBox .addPostBody {
		display: flex;
		align-items: center;
		margin:1.2rem;
		background: #fff;
		border-bottom:1px solid lightgray;
	}
	.centerHomeBox .addPost .addPostHeader p {
		margin:0;
		color:#555;
		font-weight: bold;
	}
	.centerHomeBox .addPost .addPostHeader {
		background:#F5F6F7;
		padding:0.6rem;
		border-bottom:1px solid lightgray;
	}
	.centerHomeBox .addPost {
		border:1px solid lightgray;
		border-radius: 5px;
		overflow: hidden;
		background:#fff;
	}
</style>