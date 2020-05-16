<template>
	<div>
		<appAddPost/>
		<appPost v-for="post in getPosts.slice().reverse()" :post="post" :key="post.content"/>
	</div>
</template>

<script>
  import AddPost from './AddPost'
  import Post from './Post/Post';
  import { mapGetters } from 'vuex';

  export default {
    data () {
      return {
        posts:[]
      }
    },
    components: {
    	appAddPost : AddPost,
    	appPost : Post
    },
    computed: { 
      ...mapGetters(['getAllPosts']),
      getPosts() {
        return this.getAllPosts;
    	}
    }
  }
</script>

<style lang="css" scoped>
</style>