<template>
	<div class="events box">
		<div class="eventsHeader">
			<span class="eventsHeaderLeft">
				<i class="fas fa-star"></i>
				<p style="margin:0 10px;">Evenimente din viață</p>
			</span>
			<a href="#">Creează</a>
		</div>
		<div class="eventBody">
				<i class="fas fa-globe-europe"></i>
				<p>Vizită Remeți - Bihor 2012</p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'EvenimenteAsideBody',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
	.events .eventBody i {
		display: block;
		width:20px;
		height:20px;
		position:relative;
		left:50%;
		padding:0.5rem;
		font-size: 22px;
		border-radius: 50%;
		transform:translateX(-50%);
		background:#c83f3f;
		color:#fff;
	}
	.events .eventBody {
		border:1px solid lightgray;
		width:50%;
		height:12rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding:1rem;
		text-align: center;
		font-size:1rem;
		margin-top:1rem;
	}
	
	.events .eventsHeader .eventsHeaderLeft {
		display: flex;
		align-items: flex-start;
	}
	.events .eventsHeader {
		display: flex;
		justify-content: space-between;
	}
	.box a {
		text-decoration: none;
		color:#c83f3f;
	}
	.box{
		display: flex;
		flex-direction: column;
		width:310px;
		border:1px solid lightgray;
		border-radius: 3px;
		background:#fff;
		margin-top:15px;
		padding:15px;
		font-size:12px;
	}
</style>