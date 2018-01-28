<template>
  <div id="alimentation">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="height-normal span-2" style="background-image: url(../../static/alimention/serum.png);">
        <Texte>
          <h2>Alimentation</h2>
          <p>un super aliment</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>La graine de chanvre</h2>
          <p> Le chanvre est un ingrédient qui se distingue par la quantité mais surtout par l'équilibre exceptionnel de son apport nutritif. Tout commence avec la graine de chanvre entière (avec la coquille), que l’on récolte directement au sommet de la plante. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/alimentation/grainestok.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/alimentation/graineentiere.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Composition de la graine</h2>
          <p>La graine de chanvre entière, c’est 25% de protéines de haute qualité (les 9 acides aminées essentiels), 30% d’acide gras (oméga-3, Oméga-6 et Oméga-9), 25% de glucides et une source importante de vitamines et minéraux essentiels(9). </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Farine de chanvre</h2>
          <p>Une farine sans gluten qui est riche en fibres (14 g. par ¼ de t.), source de protéines végétales (11g. par ¼ tasse) et en vitamines et minéraux essentiels. On l’utilise dans les recettes (muffin santé, collation santé, gâteaux, pâte à biscuits, pains, crêpes, etc.) ou dans les smoothies. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/alimentation/hempflour2.png);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/alimentation/graine_2.jpg);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Graine écalée</h2>
          <p>Aussi appelé cœur de chanvre, c’est la vedette dans l’industrie du chanvre. D’une part, les nutritionnistes la suggèrent pour la santé du coeur, pour favoriser la formation musculaire ou pour le développement normal du cerveau. D’autre part, les foodies l’adorent, car elle s’ajoute littéralement dans n’importe quelle assiette. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Huile de chanvre</h2>
          <p>Assurément la meilleure huile végétale pour sa composition en acides gras essentiels dans un ratio parfait. Elle est idéale pour la santé du cœur (hypertension), pour le développement du cerveau et pour prévenir une panoplie de maladies. L'huile de chanvre du québec peut être ajoutée aux salades et aux smoothies, ou en capsules.<router-link :to="{ name: 'Textile' }"><p>Démystifier l'huile de chanvre</p></router-link> </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/alimentation/priseoil.jpg);"></Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/alimentation/energy.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Autres utilisations</h2>
          <p>Pour profiter des bienfaits du chanvre plus facilement, de nombreuses entreprises ont développé de nouveaux produits plus accessibles : lait, beurre, humus, mélange à recettes, isolat de protéines, etc. </p>
        </Texte>
      </Bloc>
    </template>
    <template v-if="$store.state.lang.lang === 'en'">
      <Bloc>
        <Texte>
          Hello
        </Texte>
      </Bloc>
    </template>
  </div>
</template>
<script>
export default {
  name: 'alimentation'
}
</script>
<style scoped>
#alimentation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 10px;
  width: 100%;
}
@media screen and (max-width: 468px) {
  #alimentation {
    grid-auto-rows: minmax(calc(100vh/1.7), auto);
  }
}
</style>
