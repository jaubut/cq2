<template>
  <div id="person">
    <img :src="person.fields.image.fields.file.url" :alt="person.fields.name">
    <h3>{{ person.fields.name }}</h3>
    <p>{{ person.fields.shortBio }}</p>
    <p>you can follow {{ person.fields.name }} on <span><a target="_blank" :href="'https://twitter.com/'+person.fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
  </div>
</template>
<script>
export default {
  name: 'person',
  props: ['person']
}
</script>
<style lang="sass" scoped>
  #person
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    img
      height: 150px
      width: auto
      border-radius: 100%

</style>
