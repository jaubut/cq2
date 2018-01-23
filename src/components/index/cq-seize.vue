<template>
  <Bloc>
    <div id="instafeed">

    </div>
  </Bloc>
</template>
<script>
var Instafeed = require('instafeed.js')

var feed = new Instafeed({
  get: 'user',
  userId: 'chanvrequebec',
  accessToken: '3400508812.bf39589.8981d60426af4a119ea1fe3269124049',
  clientId: '9cddd7b8ad0a48ffa1e7baabe4519a02'
})
feed.run()
export default {
  name: 'Seize'
}
</script>
<style lang="sass" scoped>
</style>
