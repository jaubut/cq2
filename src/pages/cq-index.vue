<template>
  <div id="cqIndex">
    <leChanvre></leChanvre>
    <ChanvreQuebec></ChanvreQuebec>
    <PhotoStatic></PhotoStatic>
    <ArtisansMois></ArtisansMois>
    <Textile></Textile>
    <Chanv></Chanv>
    <Article></Article>
    <Alimentation></Alimentation>
    <SoinsCorpo></SoinsCorpo>
    <VideoJechanvre></VideoJechanvre>
    <ArtChanvre></ArtChanvre>
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
    <Construction></Construction>
    <Facebook></Facebook>
    <Recette></Recette>
    <Instagram></Instagram>
  </div>
</template>
<script>
import leChanvre from '@/components/index/cq-un'
import ChanvreQuebec from '@/components/index/cq-deux'
import PhotoStatic from '@/components/index/cq-trois'
import ArtisansMois from '@/components/index/cq-quattre'
import Textile from '@/components/index/cq-cinq'
import Chanv from '@/components/index/cq-six'
import Article from '@/components/index/cq-sept'
import Alimentation from '@/components/index/cq-huit'
import SoinsCorpo from '@/components/index/cq-neuf'
import VideoJechanvre from '@/components/index/cq-dix'
import ArtChanvre from '@/components/index/cq-onze'
import BlocPhoto from '@/components/cq-bloc-photo'
import Construction from '@/components/index/cq-treize'
import Facebook from '@/components/index/cq-quatorze'
import Recette from '@/components/index/cq-quinze'
import Instagram from '@/components/index/cq-seize'
import axios from 'axios'

const url = 'https://api.unsplash.com/photos/random'

export default {
  name: 'cqIndex',
  components: {
    leChanvre,
    ChanvreQuebec,
    PhotoStatic,
    ArtisansMois,
    Textile,
    Chanv,
    Article,
    Alimentation,
    SoinsCorpo,
    VideoJechanvre,
    ArtChanvre,
    BlocPhoto,
    Construction,
    Facebook,
    Recette,
    Instagram
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
