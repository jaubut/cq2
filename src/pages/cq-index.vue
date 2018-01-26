<template>
  <div id="cqIndex">
    <Un></Un>
    <Deux></Deux>
    <Trois></Trois>
    <Quattre></Quattre>
    <Cinq></Cinq>
    <Six></Six>
    <Sept></Sept>
    <Huit></Huit>
    <Neuf></Neuf>
    <Dix></Dix>
    <Onze></Onze>
    <BlocPhoto v-for="photo in photos" :key="photo.id" :photo="photo">
      <Texte class="white" link="Photos">
        <h2>Nos photos préféré</h2>
        <p>Toutes ces magnifiques photos sont hébergés sur unsplash.com <br>et libre de droit.</p>
        <div class="collab">
          <span class="button alert-white">Unplash</span>
          <span>X</span>
          <span class="button alert-white"x>Chanvre Québec</span>
        </div>
      </Texte>
    </BlocPhoto>
    <Treize></Treize>
    <Quatorze></Quatorze>
    <Quinze></Quinze>
    <Seize></Seize>
  </div>
</template>
<script>
import Un from '@/components/index/cq-un'
import Deux from '@/components/index/cq-deux'
import Trois from '@/components/index/cq-trois'
import Quattre from '@/components/index/cq-quattre'
import Cinq from '@/components/index/cq-cinq'
import Six from '@/components/index/cq-six'
import Sept from '@/components/index/cq-sept'
import Huit from '@/components/index/cq-huit'
import Neuf from '@/components/index/cq-neuf'
import Dix from '@/components/index/cq-dix'
import Onze from '@/components/index/cq-onze'
import Treize from '@/components/index/cq-treize'
import Quatorze from '@/components/index/cq-quatorze'
import Quinze from '@/components/index/cq-quinze'
import Seize from '@/components/index/cq-seize'
import axios from 'axios'
import BlocPhoto from '@/components/cq-bloc-photo'

const url = 'https://api.unsplash.com/photos/random'

export default {
  name: 'cqIndex',
  components: {
    Un,
    Deux,
    Trois,
    Quattre,
    Cinq,
    Six,
    Sept,
    Huit,
    Neuf,
    Dix,
    Onze,
    BlocPhoto,
    Treize,
    Quatorze,
    Quinze,
    Seize
  },
  data () {
    return {
      photos: []
    }
  },
  methods: {
    fetchData () {
      const config = {
        params: {
          client_id: 'd6b82f23cda09babcf74c2b38e342b3f246be679e7b5a55f642b552ff55d9bdf',
          per_page: 1,
          order_by: 'popular',
          query: 'hemp',
          count: 1
        }
      }
      axios.get(url, config)
        .then(response => {
          this.photos = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style scoped>
  #cqIndex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(100vh/1.7);
    grid-gap: 10px;
    width: 100%;
  }
  .collab {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 468px) {
    #cqIndex {
      grid-auto-rows: minmax(calc(100vh/1.7), auto);
    }
  }
</style>
