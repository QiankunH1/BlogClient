<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background:url('./assets/bg.jpg');

background-size:cover;

background-repeat:no-repeat;

background-attachment: fixed;
}
 * {
    padding: 0;
    margin: 0;
}
ul,
ol {
    list-style-type: none;
}

a {
    text-decoration: none;
}

img {
    border: none;
    vertical-align: middle;
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    font-size: 0;
    clear: both;
    visibility: hidden;
}

.clearfix {
    zoom: 1;
}

.inline {
    display: inline;
}

.fl {
    float: left
}

.fr {
    float: right
}
.flex{
    display: flex;
    display: -webkit-flex;
}
</style>
