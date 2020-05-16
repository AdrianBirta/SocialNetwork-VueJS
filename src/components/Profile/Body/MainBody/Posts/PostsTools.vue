<template>
	<div class="postsTools box">
		<p>Postări</p>
		<div class="administration">
			<i class="fas fa-list-ol"></i>
			<p>Administrează postările</p>
		</div>
		<div class="view">
			<i class="fas fa-bars"></i>
			<p>Vizulalizare listă</p>
		</div>
		<div class="grille">
			<i class="fas fa-th-large"></i>
			<p>Vizualizare grilă</p>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
	.administration {
		margin:0 10px;
	}
	.administration, .view, .grille {
		display: flex;
		align-items: center;
		border:1px solid lightgray;
		padding:0px 7px;
		background: #f5f6f7;
	}
	.mainBody .postsTools div i {
		margin-right:10px;
	}
	.mainBody .postsTools {
		display:flex;
		flex-direction: row;
		background:transparent;
		border:none;
		font-size:0.733rem;
		font-weight: bold;
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