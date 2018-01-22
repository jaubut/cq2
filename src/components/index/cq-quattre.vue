<template>
  <Bloc class="photo-artiste">
    <div class="texte-artiste">
      <div class="text-container">
        <h3>L'artisans du mois</h3>
        <h2>Jeremie Aubut</h2>
        <p>Chanvre Quebec</p>
        <span>Janvier 18</span>
      </div>
    </div>
    <div class="photo-mois" style="background-image: url(../../../static/img/jeremie.jpg);">
    </div>
  </Bloc>
</template>
<script>
export default {
  name: 'Quattre'
}
</script>
<style scoped>
  .photo-mois {
    margin: 10%;
    height: 100%;
    width: 50%;
    background-size: cover;
    background-position: top;
    box-shadow: 5px 4px 15px 5px rgba(0, 0, 0, .5);
  }
  .texte-artiste {
    display: grid;
    grid-template: 30% 70% / 60% 40%;
    height: 50%;
    width: var(--sz);
    position: absolute;
    color: white;
  }
  h3 {
    font-size: 3rem;
  }
  .text-container {
    grid-area: 1/1/2/3;
    text-align: right;
  }
  .text-container span {
    font-size: 0.9rem;
    color: var(--grey);
    margin-top: -20px;
  }
  .text-container p {
    margin: 5px 0px 0px 0px;
  }
</style>
