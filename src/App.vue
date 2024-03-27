<template>
  <div id="app">
    <header>
      <router-link to="/">Accueil</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>

    <router-view></router-view>

    <footer>
     footer
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  background-color: #333;
  padding: 20px;
  color: white;
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
footer {
  background-color: #333;
  padding: 10px;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
