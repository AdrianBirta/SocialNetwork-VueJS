<template>
	<div class="body">
		<div class="body-box ">
			<div class="spaceBox"></div>
			<div class="events box">

				<div class="eventsHeader">
					<p><strong>Creează un Eveniment Nou </strong></p>
				</div>
				
				<appAddEvent />

				<div class="eventsHeader" v-if="allEvents != 0">
					<p><strong>Evenimente </strong></p>
				</div>
				
				<appEvent 

					v-for="(event, index) in allEvents"
					:key="index" 
					:event="event">		
				</appEvent>

			</div>
		</div>
	</div>
</template>

<script>
import Event from './Events/Event';
import AddEvent from './Events/AddEvent';
export default {
	components: {
		appEvent : Event,
		appAddEvent: AddEvent
	},
	computed: {
		allEvents() {
			return this.$store.state.events
		}
	}
}

</script>

<style lang="css" scoped>

	.eventsHeader p {
		margin:1rem 0 2rem;
		border-bottom: 1px solid lightgray;
	}
	.spaceBox {
		padding-top:60px;
	}
	.box {
		background:#fff;
		padding:1rem;
		margin:1rem;
		border-radius: 3px;
	}
	.body .body-box {
		width:915px;
		overflow:hidden;
		margin:0 auto;
	}
	.body {
		margin:0;
		background:#e9ebee;
	}
</style>
