<template>
  <div id="artchanvre">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="span-2">
        <Texte class="align-left">
          <h2>Art du Chanvre</h2>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/maison.jpg);"></Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>Le mur de chanvre</h2>
          <p>C’est le cœur de la tige de chanvre qui est utilisé pour former un mur plein, assisté d'une structure en bois. On combine cet isolant poreux avec la chaux aérienne (liant naturel), l’eau et la terre cuite broyée. Résultat : le fameux « béton de chanvre ». </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>Finition à la chaud</h2>
          <p>Pour préserver le caractère vivant du béton de chanvre, il est fortement conseiller d’appliquer une finition à la chaux (intérieur et extérieur). Offrant par la même occasion un effet de profondeur et de pureté au design intérieur.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/finition.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/antho-4.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Anthony Néron</h2>
          <InterButton href="chanv">Art du Chanvre</InterButton>
          <p>« Construire en chanvre va bien au-delà du besoin vital de se loger et élève la construction vers une vision globale de l'architecture et du design durable»</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal span-2">
        <Texte>
          <h2>Pourquoi on trippe sur Art du Chanvre</h2>
          <p></p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/stairs1.png);">
        <Texte class="align-left">
          <h2>Finition Tadelak</h2>
          <p class="justify">Le béton de chanvre, enduit avec un fini naturel, a l’avantage d’agir comme une masse thermique très efficace. Les maisons en chanvre sont ainsi tempérées, on profite d’une température ambiante de 21 degrés durant toute l’année sans être énergivore.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/tadelak.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/blocs.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/stairs2.png);">
        <Texte>
          <h2>Bloc de béton de chanvre.</h2>
          <p>Les maisons actuelles sont très bien isolées. Le problème est justement qu’elles ne permettent pas un échange d’air, ce qui se reflète par une pollution de l’air ambiante. Le mur en chanvre respire et permet donc un échange d’air. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/stairs3.png);">
        <Texte>
          <h2>Desgin moderne et intemporel</h2>
          <p>Avec sa finition à la chaux et ses murs végétales, il y a véritablement une sensation unique qui est ressentie dans l’habitation en chanvre. C'est un climat paisible et zen</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/photo-7.jpg);"></Bloc>
      <Bloc class="height-normal span-2" style="background-image: url(../../static/artchanvre/antho2.png);">
        <Texte>
          <h2> Jugez par vous-même</h2>
          <p>Demandez plus d'informations à Anthony </p>
        </Texte>
        <CqButton href="https://www.artduchanvre.com">Visitez Artdu<br>chanvre</CqButton>
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
  #artchanvre
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: auto
    grid-gap: 10px
    width: 100%
</style>