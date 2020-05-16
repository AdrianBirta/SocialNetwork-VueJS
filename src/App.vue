<template>
  <div>
  	<appNavbar></appNavbar>
    <keep-alive>
      <router-view />
    </keep-alive>  
    
  </div>
</template>

<style>

</style>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      appNavbar : Navbar
    }
  }

</script>

<!-- uout -->