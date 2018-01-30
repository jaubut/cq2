<template>
  <div id="jechanvre">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="height-normal span-2" style="background-image: url(../../static/jechanvre/banner.jpg);">
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/textile/felix2.jpg);" > </Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2> Mouvement propulsé par Chanvre Québec. </h2>
          <p>« Nous avons créé le projet jechanvre dans le but final de stimuler l’innovation dans le domaine des vêtements en chanvre. 100% des profits réalisés sont réinvestis pour produire de nouvelles collections. C’est l’opportunité pour chacun d’exprimer sa solidarité pour la plante. » </p>
        </Texte>
       </Bloc>
       <Bloc class="height-normal">
        <Texte>
          <h2> La fondation </h2>
          <p>Le projet a vu le jour en 2016 lorsqu’une équipe d’étudiant du Cégep a voulu représenter l’industrie du chanvre à une compétition interécole. Nous leur avons donc « designer » des chandails « jechanvre » pour qu’ils puissent exprimer ce message à leur foire.  Une belle équipe de motivés qui a remporté 4 prix sur 6 (un record)! </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/jechanvre/equipe2.jpg);">
        <CqButton href="https://www.jechanvre.io">Visitez jechanvre</CqButton>
      </Bloc>
      <Bloc class="height-normal span-2" style="padding: 0;">
        <video autoplay loop muted poster="">
          <source src="../../assets/video/facebook-chanv.mp4" type="video/mp4">
          <source src="../../assets/video/facebook-chanv.webm" type="video/webm">
        </video>
      </Bloc>
      <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
        <BigTexte>
          <span>3</span>
          <h4>Les produits</h4>
        </BigTexte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Casquettes en chanvre</h2>
          <p class="justify"> Un mélange « tri-blend » unique qui promet un gage de polyvalence, de confort et de durabilité. 100% des profits de cette collection sont réinvestis pour produire une ligne “made in Canada”.  </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/jechanvre/cantin.jpg);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/textile/samuelboulay.jpg);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/textile/cantin2.jpg);"></Bloc>
      <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
        <BigTexte>
          <span>1</span>
          <h4>Le verdict</h4>
        </BigTexte>
      </Bloc>
      <Bloc class="height-normal beige" >
        <Texte>
          <h2>À propos</h2>
          <p> Notre objectif est de propulser de nouveaux produits sur le marché en collaboration avec différentes marques.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/textile/samjeremy2.jpg);">
        <Texte>
          <h2>Jugez par vous-mêmes!</h2>
        </Texte>
        <CqButton href="https://www.jechanvre.io">Visitez jechanvre</CqButton>
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
export default {
  name: 'jeChanvre'
}
</script>
<style lang="sass" scoped>
  #jechanvre
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: auto
    grid-gap: 10px
    width: 100%
    @media(max-width:468px)
      grid-auto-rows: minmax(calc(100vh/1.7), auto)
</style>
