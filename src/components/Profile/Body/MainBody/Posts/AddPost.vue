<template>
	<div class="addPost box">
		<div class="headerAddPost">
			<span class="header1">
				<i class="fas fa-pen"></i>
				<p>Creează o postare</p>
			</span>
			<span class="header2">
				<i class="fas fa-camera-retro"></i>
				<p>Foto/Video</p>
			</span>
			<span class="header3">
				<i class="fas fa-video"></i>
				<p>Clip video în direct</p>
			</span>
			<span class="header4">
				<i class="fas fa-flag"></i>
				<p>Evenimente din viață</p>
			</span>
		</div>
		<div class="bodyAddPost">
			<img :src="require(`@/assets/${profile.picture}`)">
			<input type="text" placeholder="La ce te gândești?" v-model="text" @keydown.enter="addNewPost">

		</div>
		<div class="footerAddPost">
			<span class="footer1">
				<i class="fas fa-images"></i>
				<p>Foto/Video</p>
			</span>
			<span class="footer2">
				<i class="fas fa-user-tag"></i>
				<p>Etichetează ...</p>
			</span>
			<span class="footer3">
				<i class="far fa-grin"></i>
				<p>Stare/Activitate</p>
			</span>
			<span class="footer4">
				<p>...</p>
			</span>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	text:''
    }
  },
  methods: {
  	addNewPost() {
  		this.$store.dispatch('addNewPost',this.text);
  		this.text = '';
  	}
  },
  computed: {
  	profile() {
  		return this.$store.state.profile
  	}
  }
}
</script>




<style lang="css" scoped>
	.mainBody .addPost .footerAddPost span i {
		margin-right: 10px;
	}
	.mainBody .addPost .footerAddPost span {
		display: flex;
		align-items: center;
		margin-right: 1rem;
		background: #f5f6f7;
		border-radius: 25%;
		padding:0 0.6rem;

	}
	.mainBody .addPost .footerAddPost {
		display: flex;
		font-size:0.7rem;
		font-weight:bold;
		padding:0rem 2rem 1rem;
	}
	.mainBody .addPost .bodyAddPost input[type="text"] {
		background: #fff;
		border:none;
		font-size: 1rem;

	}
	.mainBody .addPost .bodyAddPost img, .posts .postHeader img {
		width:60px;
		height:60px;
		border-radius: 50%;
		margin-right: 20px
	}
	.mainBody .addPost .bodyAddPost {
		padding-bottom:30px;
		display: flex;
		border-bottom:1px solid lightgray;
		margin:20px;
	}
	.mainBody .addPost .headerAddPost .header2 {
		border-left:1px solid lightgray;
		border-right:1px solid lightgray;
		padding:0 15px;
		height: 20px;
		align-self: center;
	}
	.header1 p, .header2 p, .header3 p, .header4 p {
		color:#ee0505;
	}
	.mainBody .addPost .headerAddPost span i, .mainBody .addPost .headerAddPost .header1 p {
		color:gray;
	}
	.mainBody .addPost .headerAddPost span i {
		margin-right: 10px;
	}
	.mainBody .addPost .headerAddPost span {
		display:flex;
		justify-content: center;
		align-items: center;
		font-size:0.8rem;
		margin-right: 15px;
		font-weight: bold;
		line-height: 0px;
	}
	.mainBody .addPost .headerAddPost {
		background:#f5f6f7;
		padding:15px 15px;
		display: flex;
		flex-wrap: wrap;
	}
	.mainBody {
		
	}
	.box a {
		text-decoration: none;
		color:#4267b2;
	}
	.box{
		display: flex;
		flex-direction: column;
		width:555px;
		border:1px solid lightgray;
		border-radius: 3px;
		background:#fff;
		margin-top:15px;
		margin-left:15px;
		font-size:12px;
	}
</style>