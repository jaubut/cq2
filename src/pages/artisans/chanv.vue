<template>
  <div id="ChanvCo">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="height-normal span-2" style="background-image: url(../../../static/onepagechanv/header.png);">
        <Texte class="align-left">
          <h2>La marque Chanv</h2>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2> La fondation </h2>
          <p>En 2004, une herboriste, thérapeute et cosmétologue qualifiée du nom de Manon Letarte innove dans le domaine des soins corporels en lançant la gamme chanv. Elle a eu le coup de foudre pour ce qu’elle considère encore aujourd’hui comme la meilleure huile végétale pour la peau: l’huile de chanvre. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/manon.jpg);"></Bloc>
      <Bloc class="beige height-normal">
        <Texte class="align-right">
          <h2>À propos</h2>
          <p>Chanv. est une gamme de soins corporels à base d’huiles essentielles et de plantes médicinales de très haute qualité. Les produits sont faits à la main et sans agents préservatifs. <a class="hyperlien"  href="https://chanv.co"><p> Voir leur site</p></a> </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>« Ne mettez pas sur votre peau ce que vous ne mettriez pas dans votre bouche »</h2>
          <p>C'est la philosophie qui a toujours guidée l'entreprise. La peau est une cellule vivante qui se doit d’être nourrie, tout comme le système digestif, pour lui permettre de bien fonctionner.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal span-2" style="padding: 0;">
        <video autoplay loop muted poster="">
          <source src="../../assets/video/facebook-chanv.mp4" type="video/mp4">
          <source src="../../assets/video/facebook-chanv.webm" type="video/webm">
        </video>
      </Bloc>
      <Bloc class="span-2 align-left overflow-yes whitebg">
        <BigTexte>
          <span></span>
          <router-link to="#">Nos coups de coeur:</router-link>
        </BigTexte>
      </Bloc>
      <Bloc class="height-normal beige">
        <Texte>
          <h2>Crème peau sensible</h2>
          <p class="justify">En un mot, cette crème est : réconfortante. C’est un choix sûr autant pour la peau sensible que pour la peau sèche ou mâture. Petit conseil : c’est aussi le cadeau parfait pour faire plaisir à son ou sa bien-aimé(e)! </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/cremepeau.jpg);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/serum2.png);"></Bloc>
      <Bloc class="height-normal beige">
        <Texte class="align-left">
          <h2>Sérum Coup d'éclat</h2>
          <p class="justify">Le moins qu’on puisse dire, c’est que le sérum porte bien son nom. La peau paraît clairement plus énergisée tout juste après l’application! Le sérum, c’est un élixir aux mille et une vertus, littéralement. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal beige">
        <Texte>
          <h2>Huile corporelle bain & massages</h2>
          <p>Une solution simple, hyper efficace et polyvalente qui combine les bienfaits de l’huile de chanvre et de l’huile essentielle de lavande. Ah oui, la bouteille est seulement 20$, un vrai « deal » pour un produit de cette qualité! </p>
        </Texte>
      </Bloc class="height-normal">
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/huile.png);"></Bloc>
      <Bloc class="span-2 align-left overflow-yes whitebg">
        <BigTexte>
          <span></span>
          <router-link to="#">Le verdict</router-link>
        </BigTexte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Sommaire</h2>
          <p> La qualité des huiles végétales utilisées dans les produits est phénoménale. À notre avis, le rendement qualité/prix est excellent. Toutefois, il faut s’attendre à débourser un peu plus que la moyenne pour profiter de cette gamme de produits. On doit également s’assurer d’utiliser les produits dans un délai de 18 mois (sans agents préservatifs).</p>
        </Texte>
      </Bloc class="height-normal">
      <Bloc class="height-normal beige">
        <Texte>
          <h2>Jugez par vous-même!</h2>
        </Texte>
        <CqButton href="https://www.chanv.co">Visitez Chanv</CqButton>
      </Bloc>
    </template>
    <template v-if="$store.state.lang.lang === 'en'">
      <Bloc style="background-image: url(../../../static/onepagechanv/header.png);">
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
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/manon.jpg);"></Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>About</h2>
          <p>Chanv. is a variety of body care products made from essential oils and medicinal plants of very high quality. The products are handmade and without preservatives.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>"Do not put on your skin what you would not put in your mouth"</h2>
          <p>It's the philosophy that has always guided the company. The skin is a living cell that must be fed, just like the digestive system, to allow it to work well.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/collection.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/collection.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Our three favorite products : </h2>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte class="align-left">
          <h2>Serum</h2>
          <p class="justify">As crazy as it may sound, we can see results already with the first application. The skin seems clearly energized! It is an elixir full of nutrients and used to threats a wide variety of skin illness. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/serum2.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Durabilité hors-pairs</h2>
          <p class="justify">Le béton de chanvre va continuer éternellement de se pétrifier avec le temps, comme la pierre, afin de se solidifier. C’est un mur ininflammable qui n’est pas attaqué par les rongeurs et qui permet d’intervenir plus rapidement en cas de sinistre.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Body oil bath & massages</h2>
          <p>A simple but super effective and versatile solution that combines the benefits of hemp oil and lavender essential oil. Also, the bottle is only $ 20, a real "deal" for a product of this quality!</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/huile.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Sensitive skin cream</h2>
          <p class="justify">In a nutshell, this cream is: comforting. It is a safe choice for both sensitive skin and dry or mature skin. Small advice: it is also the perfect gift to please your beloved!</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../../static/onepagechanv/creme.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Final words</h2>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Summary</h2>
          <p> The ingredients used in the products are simply phenomenal. In our opinion, the quality / price performance is excellent. However, expect to spend a little more than average body care to enjoy this range of products. One must also make sure to use the products within 18 months (there is no preservatives).</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Results</h2>
          <p>We are morally obliged to admit that our judgment could be altered since we are completely delighted by chanv’s products. Once you go chanv, you can’t really go back.  </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Check it out by yourself</h2>
          <p></p>
        </Texte>
      </Bloc>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ChanvCo'
}
</script>
<style lang="sass" scoped>
  #ChanvCo
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: auto
    grid-gap: 10px
    width: 100%
</style>
