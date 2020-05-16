<template>
	<div class="posts">
		<div class="postHeader">
			<img :src="require(`@/assets/${post.picture}`)"/>
			<p>{{ post.userName }}</p>
		</div>
		<div class="postBody">
			<p>{{ post.content }}</p>
			<div class="reacts">
				<div class="like">
					<template v-if="like">
						<i data-v-37f6e926="" class="far fa-thumbs-up"></i>
						<p>Tu</p>
					</template>
				</div>
				<div class="comment">
					<span v-if="comments.length == 1">
						<p>1 Comentariu</p>
					</span>
					<span v-if="comments.length > 1">
						<p>{{ comments.length }} Comentarii</p>
					</span>
				</div>
			</div>
		</div>
		<div class="postFooter">
			<div class="review">
				<span @click="like = !like" :class="{'isLike':like}">
					<i data-v-37f6e926="" class="far fa-thumbs-up" aria-hidden="true"></i>
					<p>Îmi place</p>
				</span>
				<span>
					<i data-v-37f6e926="" data-v-0628aff0="" class="far fa-comment-alt" aria-hidden="true"></i>
					<p>Comentează</p>
				</span>
				<span>
					<i data-v-37f6e926="" class="fas fa-share" aria-hidden="true"></i>
					<p>Distribuie</p>
				</span>
			</div>
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
			<div class="comment">
				<img src="@/assets/profile.jpg">
				<span class="commentInput">
					<input 
						type="text" 
						placeholder="Scrie un comentariu..."
						@keydown.enter="addComment" v-model="comment">
					<i data-v-37f6e926="" class="i1 far fa-smile"></i>
					<i data-v-37f6e926="" class="i2 fas fa-camera-retro"></i>
					<i data-v-37f6e926="" class="i3 fas fa-file-image"></i>
					<i data-v-37f6e926="" class="i4 fas fa-tags"></i>
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
			comments:[],
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
	.isLike {
		color:red;
	} 
	.reacts .like i {
		margin-right:5px;
		background:red;
		padding:6px;
		border-radius: 50%;
		color:#fff;
	}
	.reacts .like {
		display: flex;
		align-items:center;
	}
	.reacts {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
	.comment .commentInput .i1 {
		top:14px;
		right:93px;
	}
	.comment .commentInput .i2 {
		top:14px;
		right:67px;
	}
	.comment .commentInput .i3 {
		top:14px;
		right:45px;
	}
	.comment .commentInput .i4 {
		top:14px;
		right:15px;
	}
	.comment .commentInput i {
		position: absolute;
		color:gray;
	}
	.comment .commentInput input {
		width:100%;
		height:100%;
		border:none;
		color:#000;
		background:#F2F3F5;
		padding-left:1rem;
	}
	.comment .commentInput {
		position: relative;
		margin-left:1rem;
		width:80%;
		height:40px;
		border-radius:16px;
		overflow: hidden;
	}
	.postFooter .comment {
		border-top:1px solid lightgray;
		position: relative;
		left:-1rem;
		top:1rem;
		width: 30.92rem;
		display: flex;
		align-items:center;
		padding:1rem;
	}
	.postFooter .review span i {
		margin-right: 5px;
	}
	.postFooter .review span p {
		margin:0;
	}
	.postFooter .review span:hover {
		color:red;
	}
	.postFooter .review span {
		display: flex;
		align-items: center;
		cursor:pointer;
		transition:.5s;
	}
	.postFooter .review {
		display: flex;
		justify-content: space-around;
		padding:1rem;
	}
	.posts .postBody {
		border-bottom: 1px solid lightgray;
	}
	.posts .postHeader p {
		color:red;
		margin-left:1rem;
		font-weight: bold;
		font-size:1.3rem;	
	}
	.posts .postHeader {
		display: flex;
		align-items: center;
	}
	.posts {
		margin-top:1rem;
		padding:1rem;
		background:#fff;
		border-radius: 5px;
		border:1px solid lightgray;
		overflow: hidden;
	}
	.details {
		line-height: 15px;
		color:red;
		font-size:12px
	}
	.postFooter .comment img, .addedComments img {
		width:45px;
		height:45px;
		border-radius: 50%;
		margin-right:10px;
	}
	.posts .postHeader img {
		width:60px;
		height:60px;
		border-radius: 50%;
		align-self: flex-start;
	}
</style>