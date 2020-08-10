<template>
	<div>
		<appHeader></appHeader>
		<keep-alive>
	      <router-view />
	    </keep-alive>  
	</div>
</template>

<script>
	import Header from './Header/Header';

	export default {
	  data () {
	    return {

	    }
	  },
	  components: {
	  	appHeader : Header,
	  	// appBody: Body
	  },
	  created() {
	  	this.$store.dispatch('changeProfile', this.$store.state.profile);
	  	console.log(this.$store.state.profile);
	  }
	}
</script>

<style lang="css" scoped>
</style>