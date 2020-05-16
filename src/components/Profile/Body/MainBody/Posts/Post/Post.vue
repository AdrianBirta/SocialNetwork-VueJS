<template>
	<div class="post box">
		<div class="postHeader">
			<div class="postHeaderLeft">
				<img :src="require(`@/assets/${post.picture}`)">
				<div class="profileInfo">
					<p>{{ post.userName }}</p>
					<span class="postInfo">
						<small>{{ post.date }} ·</small>
						<i data-v-0628aff0="" class="fas fa-globe-europe"></i>
						<i data-v-50963d9f="" class="fas fa-sort-down"></i>
					</span>
				</div>
			</div>
			<div class="postHeaderRight">
				<div class="dots">
					<p style="justify-content: flex-end;"> ... </p>
				</div>
			</div>
		</div>
		<div class="postContent">
			<p>
				{{ post.content }}
			</p>
		<div class="reacts">
			<div class="leftLikes">
				<template v-if="like">
				<i class="far fa-thumbs-up"></i>
				<p>Tu</p>
				</template>
			</div>
			<div class="rightComments">
				<p v-if="comments.length == 1">
				{{ comments.length }} comentariu
				</p>
				<p v-if="comments.length > 1">
				{{ comments.length }} comentarii
				</p>
			</div>
		</div>
		</div>
		<div class="postFooter">
			<div 
				class="like" 
				v-bind:class="{'ifLike':like}" 
				@click="like = !like">
					<i class="far fa-thumbs-up"></i>
					<p>Îmi place</p>
			</div>
			<div class="comment">
				<i data-v-0628aff0="" class="far fa-comment-alt"></i>
				<p>Comentează</p>
			</div>
			<div class="share">
				<i class="fas fa-share"></i>
				<p>Distribuie</p>
			</div>
		</div>
		<div class="comments">
			<div class="addedComments" v-for="(comment, index) in comments" :key="index">
				<img src="@/assets/profile.jpg">
				<div class="commentBox">
					<span class="messageName">
						<p><strong style="color:red;">Adrian Birta</strong> {{ comment }}</p>
					</span>
					<span class="details">
						<p>Îmi place · Răspunde </p>
					</span>
				</div>
			</div>	
			<div class="inputComment">
				<img src="@/assets/profile.jpg">
				<span class="commentsInput">
					<input 
						type="text" 
						placeholder="Scrie un comentariu" 
						@keydown.enter="addComment" v-model="comment">
					<i class="i1 far fa-smile"></i>
					<i class="i2 fas fa-camera-retro"></i>
					<i class="i3 fas fa-file-image"></i>
					<i class="i4 fas fa-tags"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['post'],
	data () {
		return {
			comment:'',
			comments: [],
			like:false
		}
	},
	methods: {
		addComment() {
			this.comments.push(this.comment);
			this.comment='';
		}
	}
}
</script>

<style lang="css" scoped>
	.ifLike {
		color:red;
		transition:.5s;
	}
	.reacts .leftLikes i {
		background: red;
		border-radius: 50%;
		color:#fff;
		padding:5px;
		margin-right:5px;
	}
	.reacts .leftLikes {
		display: flex;
		align-items: center;
	}
	.reacts {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.details {
		line-height: 15px;
		color:red;
		font-size:12px
	}
	.addedComments .commentBox .messageName {
		line-height: 0px;
	}
	.addedComments .commentBox .messageName p {
		font-size:1rem;
	}
	.addedComments {
		display: flex;
		margin: 1;
		margin-bottom: 15px;
		align-items: center;		
	}
	.comments .inputComment .commentsInput .i1 {
		right:115px;
	}
	.comments .inputComment .commentsInput .i2 {
		right:80px;
	}
	.comments .inputComment .commentsInput .i3 {
		right:50px;
	}
	.comments .inputComment .commentsInput .i4 {
		right:15px;
	}
	.comments .inputComment .commentsInput i {
		position:absolute;
		top:12px;
		font-size:20px;
		color:gray;
	}
	.comments .inputComment .commentsInput input {
		width:440px;
		height:40px;
		border:1px solid lightgray;
		border-radius: 20px;
		background:#f2f3f5;
		padding-left:15px;
	}
	.comments .inputComment .commentsInput {
		position: relative;
	}
	.comments .inputComment {
		display: flex;
	}
	.addedComments {
		display: flex;
	}
	.comments .inputComment img, .addedComments img {
		width:50px;
		height:50px;
		border-radius:50%;
		margin-right:10px;
	}
	.comments {
		display: flex;
		flex-direction: column;
		border-top:1px solid lightgray;
		margin-left:-18px;
		padding-left:1.5rem;
		padding-top:0.8rem;
	}
	.post .postFooter div:hover {
		color:red;
		text-decoration: none;
	}
	.post .postFooter div i {
		margin-right:10px;
	}
	.post .postFooter div {
		display: flex;
		align-items: center;
		cursor:pointer;
		padding:10px 15px;
		font-size:1rem;
		transition:.5s;
	}
	.post .postFooter {
		display: flex;
		justify-content: space-around;
		margin-left:-30px;
	}
	.post .postContent {
		font-family: arial;
		font-size:1.2rem;
		width:520px;
		border-bottom:1px solid lightgray;
	}
	.postHeaderRight .dots p {
		position: relative;
		top:-45px;
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 0;
		color:gray;
		cursor: pointer;
	}
	.post .postHeader .postHeaderLeft .profileInfo > p {
		font-weight: bold;
		font-size:1rem;
		margin-bottom:5px;
		margin-top:5px;
		color:#ee0505;
	}
	.post .postHeader .postHeaderLeft .profileInfo .postInfo i {
		margin-right:5px;
	}
	.post .postHeader .postHeaderLeft .profileInfo small{
		font-size:0.8rem;
	}
	.post .postHeader .postHeaderLeft {
		display: flex;
		color:gray;
	}
	.post .postHeader {
		display: flex;
		justify-content: space-between;
		width:525px;
	}
	.post .postHeader img {
		width:60px;
		height:60px;
		border-radius: 50%;
		margin-right: 20px
	}
	.post {
		padding:1rem;
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