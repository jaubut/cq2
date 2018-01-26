<template>
  <div id="Texte">
    <router-link :to="{ name: link }">
      <slot></slot>
    </router-link>
  </div>
</template>
<script>
var fullWidth = document.documentElement.clientWidth / 2.5
var element = document.documentElement
element.style.setProperty('--sz', fullWidth + 'px')
export default {
  name: 'cqTexte',
  props: ['link']
}
</script>
<style scoped>
  :root {
    --sz: 15px;
  }
  #Texte {
    padding: 5% 2%;
    text-align: center;
  }
  .white {
    color: white !important;
  }
  .center {
    text-align: center;
  }
  .justify {
    text-align: justify !important;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  .article {
    background: rgba(0,0,0,0.6);
    padding: 100%;
  }
  a:hover {
    color: inherit;
  }
</style>
