<template>
	<div class="body">
		<div class="body-box">
			<div class="bodyContainerComponent">
				<appAsideBody></appAsideBody>
				<appMainBody></appMainBody>
			</div>		
		</div>
	</div>
	
</template>

<script>
	import MainBody from './MainBody/MainBody';
	import AsideBody from './AsideBody/AsideBody';

	export default {
	  data () {
	    return {

	    }
	  },
	  components: {
	  	appMainBody : MainBody,
	  	appAsideBody: AsideBody
	  }
	}
</script>

<style lang="css" scoped>
	.bodyContainerComponent {
		display: flex;
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