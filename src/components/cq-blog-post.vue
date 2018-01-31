<template>
  <Bloc :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}">
    <div @mouseover="openHover" @mouseleave="closeHover" class="grid-photo">
      <div v-if="$route.name === 'Index'" class="slot"><slot></slot></div>
      <router-link class="link-download" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug"></router-link>
      <transition name="fade">
        <div v-if="hover" class="info-user">
          <a :href="#">
            <img :src="person.fields.author.fields.image.fields.file.url" :alt="person.fields.author.fields.name">
            <p>{{ person.fields.author.fields.name }}</p>
          </a>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="hover" class="views">
          <span>{{ ( new Date(post.fields.publishDate)).toDateString() }}</span>
        </div>
      </transition>
    </div>
  </Bloc>   
</template>

<script>
var stop = 40

export default {
  props: ['post'],
  methods: {
    truncate (text, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    }
  }
}
</script>

<style scoped>
  
</style>