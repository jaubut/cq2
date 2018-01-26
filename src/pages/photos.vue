<template>
  <div id="photos">
    <Bloc>
      <Texte>
        <h2>Choose your word</h2>
        <p @click.prevent="chanvre">cannabis</p>
        <span class="button alert-green" @click="fetchData">Voir les photos de {{ query }}</span>
      </Texte>
    </Bloc>
    <BlocPhoto v-for="photo in photos" :key="photo.id" :photo="photo"></BlocPhoto>
    <Bloc>
      <Texte>
        <h2>En voir d'autres</h2>
        <span class="button alert-green" @click="fetchData">Voir les autres de {{ query }}</span>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
import axios from 'axios'
import BlocPhoto from '@/components/cq-bloc-photo'

const url = 'https://api.unsplash.com/photos/random'

export default {
  name: 'photos',
  components: {
    BlocPhoto
  },
  data () {
    return {
      photos: [],
      perPage: 24,
      query: 'hemp'
    }
  },
  methods: {
    fetchData () {
      const config = {
        params: {
          client_id: 'd6b82f23cda09babcf74c2b38e342b3f246be679e7b5a55f642b552ff55d9bdf',
          per_page: this.perPage,
          order_by: 'popular',
          query: this.query,
          count: 30
        }
      }
      axios.get(url, config)
        .then(response => {
          this.photos = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    chanvre () {
      this.query = 'cannabis'
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style scoped>
  #photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(100vh/1.7);
    grid-gap: 10px;
    width: 100%;
  }
  @media(max-width:468px) {
    #photos {
      grid-auto-rows: minmax(calc(100vh/1.7), auto);
    }
  }
</style>