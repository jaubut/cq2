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
    @media(max-width:468px)
      grid-auto-rows: minmax(calc(100vh/1.7), auto)
</style>
