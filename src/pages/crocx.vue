<template>
  <div id="Crocx">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="span-2" style="background-image: url(../../static/crocx/background2.png);">
        <Texte class="align-left">
          <h2>La marque Crocx</h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2> La fondation </h2>
          <p>Mélissa Lemieux-Daigle, la fondatrice, avait un chien appelé Croquette (crocx) aux prises avec des allergies alimentaires. Crocx a donc pris nassance au travers d’une passion pour les animaux combinés à un questionnement sur les ingrédients utilisés dans les biscuits que l’on retrouve sur le marché. </p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/crocx/bethy.png);"></Bloc>
      <Bloc style="background-image: url(../../static/crocx/top.png);"></Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>À propos</h2>
          <p>L’entreprise fût connue initialement pour ces gâteries santé composées d’ingrédients 100% naturelles, 70% biologiques et maintenant enrichies de chanvre (graines, farine et huile). Elles sont fabriquées au Québec. </p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>Philosophie</h2>
          <p>Au fil des années, Crocx s’est donné comme objectif de participer au bien-être des animaux au Québec par la qualité et les effets de ses produits chez l’animal, mais aussi en appuyant des causes liées aux animaux, dont la qualité de vie des animaux en refuges. </p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/crocx/plaisirindompte.png);"></Bloc>
      <Bloc style="background-image: url(../../static/crocx/produitchanvre.png);"></Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>Le renouveau de Crocx</h2>
          <p>C’est en 2017 que l’entreprise LaFeuilleVerte a pris l’initiative de renouveler la gamme Crocx et de la bonifier avec les bienfaits du chanvre. C’est Dany Lefebvre, pionnier dans l’alimentation de chanvre destinée aux animaux, qui poursuit la tradition de qualité cultivée par la marque. </p>
        </Texte>
      </Bloc>
      <Bloc class="span-2">
        <Texte>
          <h2>Les trois produits favoris de l'équipe</h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Supplément nutritif</h2>
          <p class="justify">Le premier supplément nutritif pour animaux à base d'huile de chanvre approuvé par Santé Canada. Une bonne alimentation riche en acides gras (oméga 3 et oméga 6) a une incidence majeure sur la santé, autant pour les humains que pour les animaux. Les témoignages des clients pour se produit sont concluants! </p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/crocx/monsieur.jpg);"></Bloc>
      <Bloc style="background-image: url(../../static/crocx/laissecrocx.jpg);"></Bloc>
      <Bloc class="beige">
        <Texte class="align-left">
          <h2>Laisse pour chiens</h2>
          <p class="justify">Nous ne sommes pas des experts en laisse, mais une corde pour chiens munie du textile le plus rigide qui soit (le chanvre) nous semble une excellente idée.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Biscuit pommes et miel</h2>
          <p>La gamme de biscuits est le produit phare de Crocx. Ce sont des gâteries santé pour chiens et pour avoir goûté nous-mêmes les trois sortes (littéralement), la saveur pomme et miel est notre préférée. Reste à savoir si les chiens sont d’accord avec nous! </p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/crocx/monsieurvert.jpg);"></Bloc>
      <Bloc class="span-2 beige" >
        <Texte>
          <h2>Le verdict </h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Sommaire</h2>
          <p> Crocx est une marque pour le bien-être des animaux. Les ingrédients choisis sont sains et le simple fait qu’ils soient propices à la consommation humaine en dit long sur la qualité du produit. La récente relance apporte une belle dimension à la gamme avec un nouveau produit réellement efficace (le supplément). </p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Jugez par vous-mêmes!</h2>
          <CqButton href="https://www.crocx.co">Visitez crocx</CqButton>
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
  name: 'Crocx',
  components: {
    Texte,
    Bloc
  },
  metaInfo () {
    return {
      title: 'crocx.co',
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
  #Crocx
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
</style>
