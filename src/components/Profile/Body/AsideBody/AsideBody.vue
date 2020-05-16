<template>
	<div class="container">
		
		<appPrezentareAsideBody></appPrezentareAsideBody>

		<appPrieteniAsideBody></appPrieteniAsideBody>

		<appEvenimenteAsideBody></appEvenimenteAsideBody>

		<div class="box">
			<p>Română · <a href="">English (US)</a> · <a href="">Magyar</a> · <a href="">Espanol</a> · <a href="">Portugues (Brasil)</a> </p>
		</div>

		<p style="width:310px; font-size:0.7rem;color:gray; padding:0 0.6rem;">Confidenţialitate · Condiţii de utilizare · Publicitate · Opţiuni
· Module cookie · Mai mult <br>Facebook © 2020</p>

	</div>
</template>

<script>
import PrezentareAsideBody from './PrezentareAsideBody';
import PrieteniAsideBody from './PrieteniAsideBody';
import EvenimenteAsideBody from './EvenimenteAsideBody';

export default {
  data () {
    return {
    }
  },
  components: { 
  	'appPrezentareAsideBody' : PrezentareAsideBody,
  	'appPrieteniAsideBody' : PrieteniAsideBody,
  	'appEvenimenteAsideBody' : EvenimenteAsideBody
  }
}
</script>

<style lang="css" scoped>
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
		margin-top:20px;
		padding:15px;
		font-size:12px;
	}
</style>