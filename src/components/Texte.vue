<template>
  <div id="Texte">
    <slot></slot>
  </div>
</template>
<script>
var fullWidth = document.documentElement.clientWidth
var element = document.documentElement
element.style.setProperty('--sz', fullWidth + 'px')
export default {
  name: 'Texte'
}
</script>
<style scoped>
  :root {
    --sz: 15px
  }
  #Texte {
    padding: 5%;
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
  h2 {
    font-size: 2.2rem;
    font-weight: 400;
  }
  p {
    font-size: 1.3rem;
    font-weight: 100;
    line-height: 1.5rem;
    padding: 3% 10%;
    text-align: justify;
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
