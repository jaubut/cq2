<template>
  <div id="BlocPost">
    <router-link class="img-blog" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">
      <div class="img-blog" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}"></div>
    </router-link>
    <p class="date-blog">{{ ( new Date(post.fields.publishDate)).toDateString() }}</p>
    <div class="text-blog">
      <router-link :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">
        <h3 class="title-blog">{{ post.fields.title }}</h3>
      </router-link>
      <router-link :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug" class="description-blog">
        <p class="">{{ truncate(post.fields.description) }}</p>
      </router-link>
    </div>
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
    display: grid;
    grid-template-rows: 50% 10% 10% 30%;
    grid-auto-columns: auto;
    grid-column: span 1;
    font-family: 'Barlow', sans-serif;
    background-color: #f6f6f6;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .img-blog {
    grid-row: 1 / 3;
    background-size: 200% 200%;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: auto;
  }
  .date-blog {
    grid-row: 3 / 4;
    margin: auto;
    color: #29134A;
    font-size: 0.9rem;
  }
  .text-blog {
    grid-row: 4 / 5;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
    color: black;
  }
  h3 {
    color: #4F5D56;
    padding: 0 5%;
  }
  .description-blog {
    width: 70%;
  }
  .tags-blog {
    display: flex;
    flex-flow: row wrap;
    font-size: 0.85rem;
  }
  .tag {
    padding: 5px;
    color: rgba(#4F5D56, 0.6);
    &:hover {
      color: rgba(#4F5D56, 1);
    }
  }
  .span-v {
    grid-row: span 2;
  }
  .beige {
    background-color: #F8F3EB !important;
  }
  @media screen and (max-width: 468px) {
    #BlocPost {
      grid-column: span 2;
    }
    .span-v {
      grid-row: span 1;
    }
  }
</style>
