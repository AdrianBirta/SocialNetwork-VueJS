<template>
	<div class="prezentare box">
			<div class="prezentareHeader">
				<div class="prezentareTopHeader">
					<i class="fas fa-globe-europe"></i>
					<p>Prezentare</p>
				</div>
				<div class="prezentareTopFooter">
					<i class="far fa-comment-alt"></i>
					<p>Adaugă o scurtă biografie pentru a oferi mai multe informații despre tine.</p>
					<a href="#">Adaugă biografia</a>
				</div>
			</div>

			<div class="prezentareBody">
				<span>
					<i class="fas fa-briefcase"></i>
					Software Engineer la 
					<a href="#">Fortech</a>
				</span>
				<span>
					<i class="fas fa-briefcase"></i>
					A fost Test Engineer la 
					<a href="#">Plexus Corp</a>
				</span>
				<span>
					<i class="fas fa-graduation-cap"></i>
					A studiat la
					<a href="#">Facultatea de Inginerie Electrică și tehnologia Informației Oradea</a>
				</span>
				<span>
					<i class="fas fa-home"></i>
					Trăiește în <a href="#">Oradea</a>
				</span>
				<div class="edit">Editează detaliile</div>
			</div>

			<div class="prezentareBottom">
				<i class="fas fa-star"></i>
				<p>Arată ce e important pentru tine, adăugând fotografii, Pagini, grupuri și altele în secțiunea Eviențiate din profilul tău public.</p>
				<a href="#">Adaugă la Evidențiate</a>
			</div>

		</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
	.prezentare .prezentareBottom {
		text-align: center;
	}
	.prezentare .prezentareBody .edit {
		background:#ebedf0;
		margin:10px 0;
		text-align: center;
		padding:5px;
		font-weight: bold;
		color:gray;
		border:1px solid lightgray;
		cursor: pointer;
	}
	.container .prezentare .prezentareBody {
		display: flex;
		flex-direction: column;
		line-height: 20px;
		border-bottom:1px solid lightgray;
		margin:15px 0;
		padding-bottom: 15px;

	}
	.container .prezentare .prezentareTopFooter i {
		font-size:20px;
	}
	.container .prezentare .prezentareTopFooter {
		border-bottom:1px solid lightgray;
		text-align: center;
		margin:15px 0;
		padding-bottom: 15px;
	}
	.container .prezentare .prezentareHeader .prezentareTopHeader i {
		margin-right:10px;
		font-size:20px;
		background: #c83f3f;
		color: #fff;
		padding: 7px;
		border-radius: 50%;
	}
	.container .prezentare .prezentareHeader .prezentareTopHeader p {
		margin:0;
		font-size:1rem;
	}
	.container .prezentare .prezentareHeader .prezentareTopHeader {
		display: flex;
		align-items: center;
		/*border:1px solid;*/
	}
	.box a {
		text-decoration: none;
		color:#c83f3f;
	}
	.container .prezentare, .box{
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