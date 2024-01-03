<template>
  <div class="home">
    <h1>This is an home page</h1>
    <h2>Your Name is {{ this.$store.state.name }}</h2>
    <h3>Your Age is {{ this.$store.state.age }}</h3>
    <input type="text" v-model="this.$store.state.name"/>

    <h2>User Name Is: {{ this.$store.getters.getNameWithTitle }}</h2>
    

    <button @click="this.$store.commit('changeTitle')">changeTitle</button>
  </div>
</template>

<script>


</script>