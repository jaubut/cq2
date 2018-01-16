<template>
  <div id="LeChanvre">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="span-2">
        <Texte class="align-left">
          <h2>La chanvre, c'est quoi?</h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2> Biologie </h2>
          <p>Le chanvre est une plante de la famille des Cannabaceae. Le chanvre cultivé industriellement est dioïque (femelle et mâle). Une fois pollinisée, la plante produit un grain plutôt que des cocottes (fleurs). Sur le plan chimique, il ne contient pas ou très peu de THC (jusqu’à 0.3%), mais peut contenir du CBD (non psychoactif). </p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/lechanvre/plante.png);"></Bloc>
      <Bloc style="background-image: url(../../static/lechanvre/champ2.jpg);"></Bloc>
      <Bloc class="beige">
        <Texte class="align-right">
          <h2>Statut légal</h2>
          <p>Historiquement, la plante de chanvre a toujours été légal et ses usages industriels nombreux, à l’exception du 20e siècle, où la plante a connu une prohibition pour des motifs malsains.  Le chanvre industriel fût légalisé à nouveau en 1998. L’année 2018 annonce une réglementation favorable à l’effervescence de la culture de chanvre (Bill C-45) </p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>Utilisations</h2>
          <p>En effet, les usages du chanvre sont variés, notamment : construction, textile, alimentation, soins corporels, médecine, biocarburant, pâte et papier, batterie et biocomposite (plastique). Évidemment, ce sont différentes parties de la plante qui sont exploitées. En bref, le potentiel du chanvre est encore largement inexploité malgré les milliers de produits différents disponibles sur le marché.</p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/lechanvre/tige.png);"></Bloc>
      <Bloc class=span-2>
        <Texte>
          <h2>« On est des gars normaux et on tripe sur le chanvre, on veut que les gens comprennent pourquoi» </h2>
          <p> -Jérémie Aubut, Cofondateur de Chanvre Québec </p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Le chanvre Québecois</h2>
          <p class="justify">La filiale de chanvre biologique du Québec est probablement l’une des plus belles au monde entier, le Saguenay se transforme graduellement en vallée du chanvre, les productions bâtent des records, la légalisation de 2018 s’annonce favorable et de nouveaux produits locaux de qualité voient le jour. L’avenir est beau, très beau. </p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/lechanvre/paul.jpg);"></Bloc>
      <Bloc style="background-image: url(../../static/lechanvre/chanvrons.jpg);"></Bloc>
      <Bloc class="beige">
        <Texte class="align-left">
          <h2>Pourquoi parler de chanvre?</h2>
          <p class="justify">Nous croyons que c'est la plus belle solution écologique qui soit. Pour être honnêtes, nous nous considérons redevables envers cette plante qui transforme nos habitudes de vies pour le mieux. Le chanvre est bon pour la Terre, pour les agriculteurs qui la cultivent, pour les entrepreneurs qui l’exploitent et pour les consommateurs qui profitent de ses bienfaits. C’est une plante qui sert l’humanité. </p>
        </Texte>
      </Bloc>
    </template>
    <template v-if="$store.state.lang.lang === 'en'">
      <Bloc style="background-image: url(../../static/onepagechanv/header.png);">
        <Texte class="align-left">
          <h2 class="white">Chanv</h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2> Foundation </h2>
          <p>In 2004, a qualified herbalist, therapist and cosmetologist named Manon Letarte innovates in the field of body care by launching the brand chanv. She fell in love with what she still considers today as the best natural oil for the skin: hemp oil.</p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/onepagechanv/manon.jpg);"></Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>About</h2>
          <p>Chanv. is a variety of body care products made from essential oils and medicinal plants of very high quality. The products are handmade and without preservatives.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>"Do not put on your skin what you would not put in your mouth"</h2>
          <p>It's the philosophy that has always guided the company. The skin is a living cell that must be fed, just like the digestive system, to allow it to work well.</p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/onepagechanv/collection.png);"></Bloc>
      <Bloc style="background-image: url(../../static/onepagechanv/collection.png);"></Bloc>
      <Bloc>
        <Texte>
          <h2>Our three favorite products : </h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte class="align-left">
          <h2>Serum</h2>
          <p class="justify">As crazy as it may sound, we can see results already with the first application. The skin seems clearly energized! It is an elixir full of nutrients and used to threats a wide variety of skin illness. </p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/onepagechanv/serum2.png);"></Bloc>
      <Bloc>
        <Texte>
          <h2>Durabilité hors-pairs</h2>
          <p class="justify">Le béton de chanvre va continuer éternellement de se pétrifier avec le temps, comme la pierre, afin de se solidifier. C’est un mur ininflammable qui n’est pas attaqué par les rongeurs et qui permet d’intervenir plus rapidement en cas de sinistre.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Body oil bath & massages</h2>
          <p>A simple but super effective and versatile solution that combines the benefits of hemp oil and lavender essential oil. Also, the bottle is only $ 20, a real "deal" for a product of this quality!</p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/onepagechanv/huile.png);"></Bloc>
      <Bloc>
        <Texte>
          <h2>Sensitive skin cream</h2>
          <p class="justify">In a nutshell, this cream is: comforting. It is a safe choice for both sensitive skin and dry or mature skin. Small advice: it is also the perfect gift to please your beloved!</p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/onepagechanv/creme.png);"></Bloc>
      <Bloc>
        <Texte>
          <h2>Final words</h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Summary</h2>
          <p> The ingredients used in the products are simply phenomenal. In our opinion, the quality / price performance is excellent. However, expect to spend a little more than average body care to enjoy this range of products. One must also make sure to use the products within 18 months (there is no preservatives).</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Results</h2>
          <p>We are morally obliged to admit that our judgment could be altered since we are completely delighted by chanv’s products. Once you go chanv, you can’t really go back.  </p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Check it out by yourself</h2>
          <p></p>
        </Texte>
      </Bloc>
      </Bloc>
    </template>
  </div>
</template>
<script>
import Texte from '@/components/texte'
import Bloc from '@/components/cqbloc'

export default {
  name: 'LeChanvre',
  components: {
    Texte,
    Bloc
  },
  metaInfo () {
    return {
      title: 'le chanvre',
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
  #LeChanvre
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
</style>
