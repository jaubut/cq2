<template>
  <Card style="padding: 0;">
    <video src="../../assets/video/recap.webm" autoplay loop controls poster=""></video>
  </Card>
</template>
<script>
import Card from './Card'

export default {
  name: 'Dix',
  components: {
    Card
  }
}
</script>
<style lang="sass" scoped>
  video
    width: 100%
    height: 100%
    background: black
</style>
