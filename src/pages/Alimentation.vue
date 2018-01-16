<template>
  <div id="Alimentation">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
        <Bloc style="background-image: url(../../static/alimention/serum.png);">
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Bloc>
        <Bloc>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Bloc>
        <Bloc>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Bloc>
        <Bloc>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Bloc>
        <Bloc>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Bloc>
        <Bloc>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Bloc>
        <Bloc>
            <Texte>
                <h2>Allo</h2>
                <p>alllllloooo</p>
            </Texte>
        </Bloc>
    </template>
    <template v-if="$store.state.lang.lang === 'en'">
        <Bloc>
            <Texte>
                Hello
            </Texte>
        </Bloc>
    </template>
  </div>
</template>
<script>
import Bloc from '@/components/cqbloc'
import Texte from '@/components/texte'

export default {
  name: 'Alimentation',
  components: {
    Bloc,
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
