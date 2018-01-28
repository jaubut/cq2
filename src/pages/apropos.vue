<template>
  <div id="Apropos">
    <Bloc class="height-normal span-2">
      <Texte>
        <h2>Chanvre Québec</h2>
        <p>On parle de chanvre.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte>
        <h2>Notre mission</h2>
        <p>Faire découvrir le chanvre d'ici.</p>
      </Texte>
    </Bloc>
    <Bloc style="background-image: url(../../static/jechanvre/amelie.jpg);"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Qui sommes-nous?</h2>
        <p>Un organisme à but non-lucratif, fondé par de jeunes visionnaires, qui a pour objectif d'offrir des solutions saines et durables aux défis d’aujourd’hui. Par-dessus tout, nous sommes passionnés par notre mission de promouvoir une plante qui nous permet de reconnecter avec notre environnement.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Notre engagement</h2>
        <ul> 
        <li> Populariser le chanvre </li> 
        <li> Promouvoir les marques locales </li>
        <li> Propulser des innovations </li> </ul>
      </Texte>
    </Bloc>
    <Bloc class="span-2 beige">
      <Texte>
        <h2>L'équipe</h2>
        <p>“Seuls ceux qui sont assez fous pour penser qu'ils peuvent changer le monde y parviennent” - <strong>Steve Jobs.</strong></p>
      </Texte>
    </Bloc>
    <template v-for="person in persons">
      <Bloc :key="person.title" class="height-normal">
        <Texte>
          <h2>{{ person.fields.name }}</h2>
          <p>{{ person.fields.shortBio }}</p>
          <p>you can follow {{ person.fields.name }} on <span><a target="_blank" :href="'https://twitter.com/'+person.fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" :key="person.title" :style="{'background-image': 'url(' + person.fields.image.fields.file.url + ')'}"></Bloc>
    </template>
  </div>
</template>
<script>
import {createClient} from '../../utils/contentful-api'

const client = createClient()

export default {
  name: 'Apropos',
  data () {
    return {
      persons: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    'lang': 'fetchData'
  },
  methods: {
    fetchData () {
      return client.getEntries({
        'content_type': 'author',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.persons = response.items
          return response
        })
    }
  }
}
</script>
<style scoped>
  #Apropos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  @media screen and (max-width: 468px) {
    #Apropos {
      grid-auto-rows: minmax(calc(100vh/1.7), auto);
    }
  }
</style>
