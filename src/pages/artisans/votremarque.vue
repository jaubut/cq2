<template>
  <div id="ChanvCo">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="height-normal span-2 beige">
        <Texte class="align-left">
          <h2>Afficher votre marque</h2>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2> Notre mission: renouveler l’image du chanvre. </h2>
          <p>À travers notre expérience en marketing numérique, nous avons déployé de nombreuses stratégies web et campagnes de promotion sur différentes plateformes (Google, Facebook, Instagram et infolettres). Nous souhaitons simplifier ce domaine pour les gens du chanvre. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>Pourquoi afficher sur notre site? </h2>
          <p>Toutes les marques du chanvre ont un défi en commun : rejoindre une clientèle conscientisée. Chez Chanvre Québec, nous consacrons déjà nos énergies pour informer notre auditoire. Nous vous proposons de profiter d’une communauté engagée et déjà implantée. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Profil « marque d’ici » sur Chanvre Québec</h2>
          <p>Profiter de notre expertise dans la conception d’un profil attrayant pour votre marque. Ce profil vous permet avant tout de recueillir des clics hyper qualifiés vers votre site internet. Si l’ergonomie de votre site est adaptée, ces clics se traduiront forcément par des ventes. C’est inévitablement le meilleur rapport qualité-prix qui existe en publicité pour les entreprises du chanvre. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Version Beta</h2>
          <p>Nous sommes présentement en phase d’expérimentation pour plusieurs services de visibilité et d’image de marque. Faites partie de notre programme Beta pour profiter de ces services à une fraction du prix réel de lancement!  </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal beige span-2">
        <Texte>
          <h2>Nous sommes facile d'approche</h2>
          <CqButton href="https://www.chanv.co">Contactez-nous</CqButton>
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
    @media(max-width:468px)
      grid-auto-rows: minmax(calc(100vh/1.7), auto)
</style>
