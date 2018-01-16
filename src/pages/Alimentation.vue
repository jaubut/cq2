<template>
  <div id="Alimentation">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
        <Card style="background-image: url(../../static/alimention/serum.png);">
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Card>
        <Card>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Card>
        <Card>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Card>
        <Card>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Card>
        <Card>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Card>
        <Card>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Card>
        <Card>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Card>
    </template>
    <template v-if="$store.state.lang.lang === 'en'">
        <Card>
            <Texte>
                Hello
            </Texte>
        </Card>
    </template>
  </div>
</template>
<script>
import Card from '@/components/index/card'
import Texte from '@/components/index/text'

export default {
  name: 'Alimentation',
  components: {
    Card,
    Texte
  },
  metaInfo () {
    return {
      title: 'Alimentation',
      meta: [
        { property: 'og:url', content: 'https://www.chanvrequebec.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Chanvre Québec' },
        { property: 'og:description', content: 'On parle de chanvre.' },
        {property: 'og:image', content: '../../static/artchanvre/photo-1.jpg'}
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
#Alimentation
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
</style>
