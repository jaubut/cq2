<template>
  <div class="person">
    <img :src="person.fields.author[0].fields.image.fields.file.url" :alt="person.fields.author[0].fields.name">
    <h3>{{ person.fields.author[0].fields.name }}</h3>
    <p>{{ person.fields.author[0].fields.shortBio }}</p>
    <p>you can follow {{ person.fields.author[0].fields.name }} on <span><a target="_blank" :href="'https://twitter.com/'+person.fields.author[0].fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
  </div>
</template>
<script>
export default {
  name: 'Person',
  props: ['person']
}
</script>
<style lang="sass" scoped>
  .person
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    img
      height: 65px
      width: auto
      border-radius: 100%
</style>
