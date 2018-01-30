<template>
  <div id="Artisans">
    <Bloc class="height-normal span-2">
      <Texte>
        <h2>Les marques d'ici</h2>
        <p>Voici le répertoire des entreprises qui constitue le portrait: chanvre du Québec.</p>
      </Texte>
      <div class="filter-list">
        <a href='#target1' id='target1' class="target" @click="filter = null">
          <span>All</span>
        </a>
        <a href='#target2' id='target2' class="target" @click="filter = 'FeedStock'">
          <span>Animal</span>
        </a>
        <a href='#target3' id='target3' class="target" @click="filter = 'Soins'">
          <span>Soins-corporel</span>
        </a>
        <a href='#target4' id='target4' class="target" @click="filter = 'Alimentation'">
          <span>Alimentation</span>
        </a>
        <a href='#target5' id='target5' class="target" @click="filter = 'Construction'">
          <span>Construction</span>
        </a>
        <a href='#target6' id='target6' class="target" @click="filter = 'Textile'">
          <span>Textile</span>
        </a>
      </div>
    </Bloc>
    <Bloc class="height-normal" v-for="artisan in orderArtisans" :key="artisan.title">
      <Texte :link="artisan.routerName">
        <h2>{{ artisan.title }}</h2>
        <p>{{ artisan.description }}</p>
      </Texte>
      <img :src="artisan.img" alt="">
    </Bloc>
  </div>
</template>
<script>
var _ = require('lodash')

export default {
  name: 'Artisans',
  data () {
    return {
      filter: null
    }
  },
  computed: {
    artisans () {
      return this.$store.state.artisans.artisans
    },
    orderArtisans: function () {
      if (this.filter === null) {
        return this.artisans
      } else {
        return _.filter(this.artisans, { 'group': this.filter })
      }
    }
  }
}
</script>
<style scoped>
  #Artisans {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .filter-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  .filter-list a {
    font-size: 0.9rem;
    height: 20px;
    width: auto;
    padding: 0 5px;
    border: 1px solid rgba(79, 93, 86, 0.6);
    color: rgba(79, 93, 86, 0.6);
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    transition: all ease-in-out .5s;
  }
  .filter-list a:hover {
    transform: translateY(5px);
  }
  :target {
    border: 1px solid rgba(79, 93, 86, 0.9) !important;
    color: rgba(79, 93, 86, 0.9) !important;
  }
</style>
