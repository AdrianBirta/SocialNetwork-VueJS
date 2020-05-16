<template>
	<div>
		<form v-on:submit.prevent="addEvent">
			<div class="box">
				<label>Title</label>
				<input type="text" name="" v-model="title">
			</div>
			
			<div class="box">
				<label>Location</label>
				<input type="text" name="" v-model="location">
			</div>
			
			<div class="box">
				<label>Date</label>
				<input type="date" name="" v-model="date">
			</div>
			<input type="submit" value="Submit!">
		</form>
	</div>
</template>

<script>
export default {

  name: 'AddEvent',

  data() {
    return {
    	title:'',
    	location:'',
    	date:''
    };
  },
  computed: {
  	eventsLength() {
  		return this.$store.getters.eventsLength
  	}
  },
  methods: {
  	addEvent() {
  		let obj = {};
  		obj['id'] = this.eventsLength+1;
  		// console.log(this.eventsLength)
  		obj['title'] = this.title;
  		obj['location'] = this.location;
  		obj['date'] = this.date;
  		this.$store.dispatch('addNewEvent',obj);

  		this.title="";
  		this.location="";
  		this.date="";
  	}
  	

  }
};
</script>

<style lang="css" scoped>
</style>
