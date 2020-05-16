<template>
	<div>
		<appAddPost />
		<appPostTools />
		<div v-for="post in postsProfile.slice().reverse()" :key="post.id">
			<appPost :post="post"/>
		</div>
	</div>
</template>

<script>
import Post from './Post/Post';
import AddPost from './AddPost';
import PostsTools from './PostsTools';

export default {
  data () {
    return {
    }
  },
  components: {
  	appPost : Post,
  	appAddPost : AddPost,
  	appPostTools : PostsTools
  },
  computed: {
    postsProfile() {
      return this.$store.state.profile.posts
    }
  }
}
</script>

<style lang="css" scoped>
	
	
	
</style>