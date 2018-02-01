<template>
  <div id="cqTexte">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cqTexte',
    props: ['link']
  }
</script>

<style scoped>
  #cqTexte {
    display: flex;
    flex-flow: column wrap;
    padding: 5% 2% 0 2%;
  }
  #cqTexte a {
    font-size: 7vw !important;
    line-height: 2vw !important;
    font-weight: 800 !important;
    z-index: 2 !important;
  }
  #cqTexte span {
    font-size: 1rem;
    color: black;
    text-align: right;
    margin-right: -5px;
  }
  @media screen and (max-width: 468px) {
    #cqTexte a {
      font-size: 10vw !important;
      line-height: 1vw !important;
      font-weight: 800 !important;
      z-index: 2 !important;
    }
  }
</style>