<template>
  <div id="cqTexte">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cqTexte'
  }
</script>

<style scoped>
  #cqTexte {
    display: flex;
    flex-flow: column wrap;
    padding: 5% 2% 0 2%;
  }
  #cqTexte h4 {
    font-size: 7vw;
    line-height: 2vw;
    font-weight: 800;
    z-index: 2;
  }
  #cqTexte span {
    font-size: 1rem;
    color: black;
    text-align: right;
    margin-right: -5px;
  }
  @media screen and (max-width: 468px) {
    #cqTexte h4 {
      font-size: 10vw;
      line-height: 1vw;
      font-weight: 800;
      z-index: 2;
    }
  }
</style>