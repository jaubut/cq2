<template>
  <Bloc class="beige article-back span-v">
    <div class="grid-article" @mouseover="expendHover" @mouseleave="closeHover">
      <div class="article-date"><p>{{ ( new Date(post.fields.publishDate)).getDate() }} {{ ( new Date(post.fields.publishDate)).getMonth() }}</p></div>
      <div class="article-number">
        <p>019</p>
      </div>
      <div class="article-tag">
        <p>Actualité/information/opinion</p>
      </div>
      <div class="journal-chanvre">
        <img src="../../assets/logo-journalchanvre.svg" alt="logo journal du chanvre">
      </div>
      <div class="article-photo" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')' }">
      </div>
      <div class="article-title">
        <h3>{{ post.fields.title }}</h3>
        <p>{{ truncate(post.fields.description) }}</p>
      </div>
    </div>
  </Bloc>
</template>
<script>
import {createClient} from '../../../utils/contentful-api'

const client = createClient()

var stop = 60
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
    },
    truncate (text, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
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
  .article-date {
    grid-area: 1/1/2/2;
    display: flex;
    justify-content: flex-start;
  }
  .article-number {
    display: flex;
    justify-content: flex-end;
    grid-area: 1/2/2/3
  }
  .article-number p {
    line-height: 0.5rem; 
  }
  .article-tag {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    grid-area: 6/1/7/3;
  }
  .article-tag p {
    font-size: 0.8rem;
  }
  .journal-chanvre {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-area: 1/1/3/3;
    z-index: 2;
  }
  .journal-chanvre img {
    margin-top: 0;
    max-height: 100%;
  }
  .article-photo {
    grid-area: 2/1/4/3;
    height: 100%;
    width: 100%;
    background-position: center center;
    background-size: cover;
  }
  .article-title {
    grid-area: 4/1/5/3;
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
  @media screen and (max-width: 468px) {
    .journal-chanvre img {
      margin-top: 0;
      max-height: 75%;
    }
  }
</style>
