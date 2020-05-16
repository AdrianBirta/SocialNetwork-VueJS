<template>
	<div class="containerEvent">
		<div class="eventLeftSide">
			<i class="fas fa-globe-europe"></i>
			<p>{{ event.title }} - {{ event.location }} {{ event.date }}</p>
		</div>
		<div class="eventRightSide">
			<i class="fas fa-minus-square"></i>
			<p @click="deleteEvent">Remove</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['event'],
  data () {
    return {

    }
  },
  methods: {
  	deleteEvent() {
  		this.$store.dispatch('deleteEvent', this.event);
  	}
  }
}
</script>

<style lang="css" scoped>
	.containerEvent .eventRightSide:hover {
		background:red;
		border:1px solid red;
		color:#fff;
	}
	.containerEvent .eventRightSide {
		display: flex;
		align-self: center;
		padding:10px 15px;
		background:#f5f6f7;
		border:1px solid lightgray;
		border-radius: 3px;
		cursor:pointer;
		transition:.5s;
	}
	.containerEvent .eventRightSide p {
		margin:0 5px;
		transition:.5s;
	}
	.eventLeftSide p {
		margin:1rem 0;
	}
	.containerEvent .eventLeftSide {
		text-align: center;
	}
	.containerEvent {
		display: flex;
		justify-content: space-between;
		border:1px solid lightgray;
		border-radius: 3px;
		padding:3rem 1rem;
		margin-bottom:1rem;
	}
</style>