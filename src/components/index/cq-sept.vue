<template>
  <Bloc class="height-normal beige article-back">
    <div class="grid-article" @mouseover="expendHover" @mouseleave="closeHover">
      <div class="article-number">
        <p>019</p>
      </div>
      <div class="article-tag">
        <p>Actualité/information/opinion</p>
      </div>
      <div class="journal-chanvre">
        <h3>Journal du Chanvre</h3>
      </div>
      <div class="article-photo" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')' }">
      </div>
      <div class="article-title">
        <h3>Soins de la peau:</h3>
        <p>Distinguez le vrai du faux</p>
        <transition name="fade">
          <InterButton v-if="hover" :href="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">Lire l'article</InterButton>
        </transition>
      </div>
    </div>
  </Bloc>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'

const client = createClient()
export default {
  name: 'Sept',
  data () {
    return {
      post: [],
      hover: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.post = response.items[0]
          return response
        })
    },
    expendHover () {
      this.hover = true
    },
    closeHover () {
      this.hover = false
    }
  }
}
</script>
<style scoped>
  :root {
    --y: 15px;
  }
  .grid-article {
    display: grid;
    grid-template: 10% 20% 35% 20% 10% 5% / 70% 30%;
    grid-gap: 5px;
    height: 100%;
    width: 100%;
  }
  .article-number {
    display: flex;
    grid-area: 1/1/2/2
  }
  .article-number p {
    line-height: 0.5rem; 
  }
  .article-tag {
    display: flex;
    justify-content: flex-end;
    grid-area: 1/1/2/3;
  }
  .article-tag p {
    font-size: 0.8rem;
  }
  .journal-chanvre {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 2/1/3/3;
    font-size: 2.5rem;
    line-height: 2.2rem;
    text-align: right;
    margin-top: 20px;
    z-index: 2;
  }
  .article-photo {
    grid-area: 3/1/6/3;
    height: 100%;
    width: 100%;
    background-position: center center;
    background-size: cover;
  }
  .article-title {
    grid-area: 4/1/6/3;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    transition: all ease-in-out .5s;
  }
  .article-title h3 {
    font-size: 4vw;
  }
  .article-title p {
    text-overflow: auto;
    margin: 0;
  }
  .article-back {
    background-image: url(../../../static/index/back-article.png) !important;
  }
  .white {
    color: white !important;
    text-shadow: 1px 5px 15px -7px rgba(black, 0.75);
  }
</style>
