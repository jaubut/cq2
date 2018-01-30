<template>
  <div id="cqIndex">
    <leChanvre></leChanvre>
    <ChanvreQuebec></ChanvreQuebec>
    <PhotoStatic2></PhotoStatic2>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>5</span>
        <h4>Les essentiels</h4>
      </BigTexte>
    </Bloc>
    <Alimentation></Alimentation>
    <Textile></Textile>
    <SoinsCorpo></SoinsCorpo>
    <Construction></Construction>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>4</span>
        <h4>Les marques</h4>
      </BigTexte>
    </Bloc>
    <Chanv></Chanv>
    <ArtChanvre></ArtChanvre>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>2</span>
        <h4>L'actualité</h4>
      </BigTexte>
    </Bloc>
    <VideoJechanvre></VideoJechanvre>
    <Article></Article>
    <ArtisansMois></ArtisansMois>
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
    <Facebook></Facebook>
    <Instagram></Instagram>
  </div>
</template>
<script>
import leChanvre from '@/components/index/cq-un'
import ChanvreQuebec from '@/components/index/cq-deux'
import PhotoStatic from '@/components/index/cq-trois'
import Article from '@/components/index/cq-sept'
import Textile from '@/components/index/cq-cinq'
import Alimentation from '@/components/index/cq-huit'
import SoinsCorpo from '@/components/index/cq-neuf'
import Construction from '@/components/index/cq-treize'
import Chanv from '@/components/index/cq-six'
import ArtisansMois from '@/components/index/cq-quattre'
import VideoJechanvre from '@/components/index/cq-dix'
import ArtChanvre from '@/components/index/cq-onze'
import BlocPhoto from '@/components/cq-bloc-photo'
import Facebook from '@/components/index/cq-quatorze'
import Instagram from '@/components/index/cq-seize'
import PhotoStatic2 from '@/components/index/cq-photostatic'
import Valeur from '@/components/index/cq-valeur'
import axios from 'axios'

const url = 'https://api.unsplash.com/photos/random'

export default {
  name: 'cqIndex',
  components: {
    leChanvre,
    ChanvreQuebec,
    PhotoStatic,
    Valeur,
    PhotoStatic2,
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
    Instagram
  },
  created () {
    this.fetchData()
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
          query: 'chanvre',
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
  }
}
</script>
<style scoped>
  #cqIndex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
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
