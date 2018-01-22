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
  h2 {
    font-size: 2.2rem;
    font-weight: bold;
  }
  p {
    font-size: 1.3rem;
    font-weight: 100;
    line-height: 1.5rem;
    padding: 3% 5%;
    text-align: justify;
  }
  a:hover {
    color: inherit;
  }
  @media screen and (max-width: 468px) {
    h2 {
      font-size: x-large;
    }
    p {
      font-size: inherit;
    }
  }
</style>
