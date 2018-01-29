<template>
  <div id="Bloc">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cqBloc'
}
</script>
<style scoped>
  #Bloc {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    grid-column: span 1;
    align-items: center;
    font-family: 'Barlow', sans-serif;
    background-color: #f6f6f6;
    background-image: none;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    padding: 5%;
  }
  video {
    width: 100%;
    height: auto;
    background: black;
  }
  .green {
    background: #4F5D56 !important;
    color: white !important;
  }
  .whitebg {
    background: white !important;
    color: black !important;
  }
  .blue {
    background: #4267B2 !important;
  }
  .white {
    color: white !important;
  }
  .span-2 {
    grid-column: span 2 !important;
  }
  .span-3 {
    grid-column: span 3 !important;
  }
  .span-v {
    grid-row: span 2;
  }
  .height-normal {
    height: calc(100vh/2);
  }
  .height-little {
    height: auto;
  }
  .align-left {
    align-items: flex-start !important;
  }
  .align-right {
    align-items: flex-end !important;
  }
  .overflow-yes {
    overflow: visible !important;
  }
  .no-padding {
    padding: 0 !important;
  }
  .beige {
    background-color: #F8F3EB !important;
  }
  .photo-artiste {
    background-size: 150% !important;
    background-image: url(../assets/img/artiste-back.jpg) !important;
  }
  img {
    max-height: 50%;
    border-radius: 5px;
    width: auto;
    margin-top: -25px;
  }
  .dark {
    color: white;
  }
  .hover {
    background: rgba(black, 0.5);
    height: 100%;
    width: 100%;
    margin: 5%;
  }
  @media screen and (max-width: 468px) {
    #Bloc {
      grid-column: span 2;
    }
    .span-v {
      grid-row: span 1;
    }
    img {
      width: 85%;
    }
    .photo-artiste {
      background-size: 200% !important;  
    }
    .height-normal {
      height: auto;
    }
  }
</style>
