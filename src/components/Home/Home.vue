<template>
	<div class="container">
		<div class="space"></div>
		<div class="homeBox">
			<appLeftHomeBox />
			<appCenterHomeBox />
			<appRightHomeBox />
		</div>
	</div>
</template>

<script>
import LeftHomeBox from './Content/LeftHomeBox/LeftHomeBox';
import CenterHomeBox from './Content/CenterHomeBox/CenterHomeBox';
import RightHomeBox from './Content/RightHomeBox/RightHomeBox'
export default {

  data () {
    return {

    }
  },
  components: {
  	appLeftHomeBox : LeftHomeBox,
  	appCenterHomeBox : CenterHomeBox,
  	appRightHomeBox : RightHomeBox
  }
}
</script>

<style lang="css" scoped>
	.homeBox > * {
		margin-right:1rem;
	}
	.homeBox {
		display: flex;
		justify-content: center;
		padding-left: 11rem;
	}
	.space {
		padding-top:5rem;
	}
	.container {
		width:100%;
		background: #e9ebee;
		font-family: arial;

	}
</style>