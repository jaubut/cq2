<template>
  <div id="artchanvre">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="height-normal span-2" style="background-image: url(../../static/artchanvre/finition.png);" >
        <Texte class="align-left">
          <h2>Art du Chanvre</h2>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/maison4.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>La fondation</h2>
          <p>Art du Chanvre existe depuis 2009. Dirigée par Anthony Néron (artisan) et sa copine Émilie Bergeron (production média), l’entreprise transpose le talent d’artisan dans l'utile et le fonctionnel pour la maison en chanvre. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte class="align-right">
          <h2>À propos</h2>
          <p>Art du chanvre œuvre dans le domaine de la construction en chanvre. Leur expertise inclut l’isolation en chanvre (construction neuve et restauration) et les finitions à la chaux (enduits, stuc vénitien, peinture…)</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/antho-5.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/antho-4.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Anthony Néron</h2>
          <InterButton href="chanv">Art du Chanvre</InterButton>
          <p>« À chaque fois que nous déplaçons la matière, nous avons une occasion de créer, de redéfinir ou de réaffirmer qui nous sommes.»</p>
        </Texte>
      </Bloc>
      <Bloc class="span-2 beige">
        <Texte>
          <h2>Pourquoi on trippe sur Art du Chanvre?</h2>
          <p></p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/stairs1.png);">
        <Texte class="align-left">
          <h2>Finition à la chaux (Tadelakt)</h2>
          <p class="justify">Les enduits de finition apportent une profondeur au design intérieur. Le fini qui nous fait le plus rêver est sans doute le Tadelakt. C’est une finition marocaine avec 2000 ans d’histoire qui se démarque par sa douceur, sa brillance et son look vivant. L’inconvénient, c’est évidemment l’expertise et le coût associé à cette technique. </p>
        </Texte>
        <CqButton href="https://artduchanvre.com/finitions-">Voir les <br>finitions</CqButton>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/tadelak.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/blocs.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/stairs2.png);">
        <Texte>
          <h2>Bloc de béton de chanvre.</h2>
          <p>Ayant une passion pour l’innovation, nous n’avons eu d’autres choix que d’applaudir l’initiative d’Anthony Néron d’initier un projet pour produire des blocs de béton de chanvre pré-séché au Québec. Ce concept a pour valeur principale de rendre la construction en chanvre plus accessible à tous. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/stairs3.png);">
        <Texte>
          <h2>Desgin moderne et intemporel</h2>
          <p>L’élément distinctif d’Art du Chanvre est évident: le design. Que ce soit par la qualité des matériaux utilisés ou par l’expertise employée, l’entreprise véhicule à tous coups une obsession remarquable pour des designs à la fois uniques et contemporains. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/photo-7.jpg);"></Bloc>
      <Bloc class="height-normal span-2" style="background-image: url(../../static/artchanvre/antho2.png);">
        <Texte>
          <h2> Jugez par vous-même</h2>
          <p>Demandez plus d'informations à Anthony </p>
        </Texte>
        <CqButton href="https://www.artduchanvre.com">Visitez<br>Art du<br>chanvre</CqButton>
      </Bloc>
    </template>
  </div>
</template>
    <script>
export default {
  name: 'ChanvCo'
}
</script>
<style scoped>
  #artchanvre {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
</style>