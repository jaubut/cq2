<template>
  <div id="cqIndex">
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
import Un from '@/components/index/cq-un'
import Deux from '@/components/index/cq-deux'
import Trois from '@/components/index/cq-trois'
import Quattre from '@/components/index/cq-quattre'
import Cinq from '@/components/index/cq-cinq'
import Six from '@/components/index/cq-six'
import Sept from '@/components/index/cq-sept'
import Huit from '@/components/index/cq-huit'
import Neuf from '@/components/index/cq-neuf'
import Dix from '@/components/index/cq-dix'
import Onze from '@/components/index/cq-onze'
import Douze from '@/components/index/cq-douze'
import Treize from '@/components/index/cq-treize'
import Quatorze from '@/components/index/cq-quatorze'
import Quinze from '@/components/index/cq-quinze'
import Seize from '@/components/index/cq-seize'

export default {
  name: 'cqIndex',
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
  }
}
</script>
<style lang="sass" scoped>
  #cqIndex
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
    @media(max-width:468px)
      grid-auto-rows: minmax(calc(100vh/1.7), auto)
</style>
