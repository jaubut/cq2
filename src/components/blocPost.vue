<template>
  <div id="BlocPost">
    <router-link class="img-blog" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">
      <div class="img-blog" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}"></div>
    </router-link>
    <p class="date-blog">{{ ( new Date(post.fields.publishDate)).toDateString() }}</p>
    <router-link class="text-blog" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">
      <h3 class="title-blog">{{ post.fields.title }}</h3>
      <p class="">{{ truncate(post.fields.description) }}</p>
    </router-link>
  </div>
</template>
<script>
var stop = 40

export default {
  name: 'BlocPost',
  props: ['post'],
  methods: {
    truncate (text, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    }
  }
}
</script>
<style scoped>
  #BlocPost {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    grid-column: span 1;
    font-family: 'Barlow', sans-serif;
    background-color: #f6f6f6;
    overflow: hidden;
  }
  .img-blog {
    background-size: 200% 200%;
    background-position: center center;
    background-repeat: no-repeat;
    height: calc(var(--sz) / 5);
    width: 100%;
  }
  .date-blog {
    margin: auto;
    color: #29134A;
    font-size: 0.9rem;
    width: auto;
    height: auto;
    padding: 0 1%;
    background: var(--green);
    margin-top: -10px;
    color: white;
    border-radius: 5px;
  }
  .text-blog {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: black;
    padding: 5%;
  }
  h3 {
    color: #4F5D56;
  }
  .description-blog {
    width: 70%;
  }
  .span-v {
    grid-row: span 2;
  }
  .beige {
    background-color: #F8F3EB !important;
  }
  @media screen and (max-width: 468px) {
    #Bloc {
      grid-column: span 2;
    }
    .span-v {
      grid-row: span 1;
    }
  }
  @media screen and (max-width: 765px) {
    .img-blog {
      height: calc(var(--sz) / 4);
    }
  }
</style>
