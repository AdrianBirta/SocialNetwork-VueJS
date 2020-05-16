<template>
	<div class="centerHomeBox">
		<appPosts />
	</div>
</template>

<script>
import Posts from './Posts/Posts';
export default {
  data () {
    return {

    }
  },
  components: {
  	appPosts : Posts
  }
}
</script>

<style lang="css" scoped>
	
	.homeBox .centerHomeBox {
		border:1px soli/*d*/;
		width:500px;
		margin-bottom:3rem;
	}
</style>