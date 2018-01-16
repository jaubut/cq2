<template>
  <div id="Rindex">
    <Un></Un>
    <Deux></Deux>
    <Trois></Trois>
    <Quattre></Quattre>
    <Cinq></Cinq>
    <Six></Six>
    <Sept></Sept>
    <Huit></Huit>
    <Neuf></Neuf>
    <Dix></Dix>
    <Onze></Onze>
    <Douze></Douze>
    <Treize></Treize>
    <Quatorze></Quatorze>
    <Quinze></Quinze>
    <Seize></Seize>
  </div>
</template>
<script>
import Un from '@/components/index/un'
import Deux from '@/components/index/deux'
import Trois from '@/components/index/trois'
import Quattre from '@/components/index/quattre'
import Cinq from '@/components/index/cinq'
import Six from '@/components/index/six'
import Sept from '@/components/index/sept'
import Huit from '@/components/index/huit'
import Neuf from '@/components/index/neuf'
import Dix from '@/components/index/dix'
import Onze from '@/components/index/onze'
import Douze from '@/components/index/douze'
import Treize from '@/components/index/treize'
import Quatorze from '@/components/index/quatorze'
import Quinze from '@/components/index/quinze'
import Seize from '@/components/index/seize'

export default {
  name: 'Rindex',
  components: {
    Un,
    Deux,
    Trois,
    Quattre,
    Cinq,
    Six,
    Sept,
    Huit,
    Neuf,
    Dix,
    Onze,
    Douze,
    Treize,
    Quatorze,
    Quinze,
    Seize
  },
  metaInfo () {
    return {
      title: 'Accueil',
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
  #Rindex
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
</style>
