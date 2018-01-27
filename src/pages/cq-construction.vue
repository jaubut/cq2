<template>
  <div id="construction">
    <template v-if="$store.state.lang.lang === 'fr-CA'">
      <Bloc class="height-normal span-2 hero-photo" >
        <Texte class="align-left">
          <h2>Construction en chanvre</h2>
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
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/antho.png);"></Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Anthony Néron</h2>
          <InterButton href="chanv">Art du Chanvre</InterButton>
          <p>« Construire en chanvre va bien au-delà du besoin vital de se loger et élève la construction vers une vision globale de l'architecture et du design durable»</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal span-2">
        <Texte>
          <h2>Les avantages de l’habitation en chanvre:</h2>
          <p>La maison en chanvre incarne l’idéal de l’habitation écologique: confortable, durable et adaptée au climat. Il existe aujourd’hui plus d’une centaine de réalisations en chanvre à travers le Québec, découvrez pourquoi.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/mur1.jpg);">
        <Texte class="align-left">
          <h2>1.Efficacité énergétique</h2>
          <p class="justify">Le béton de chanvre, enduit avec un fini naturel, a l’avantage d’agir comme une masse thermique très efficace. Les maisons en chanvre sont ainsi tempérées, on profite d’une température ambiante de 21 degrés durant toute l’année sans être énergivore.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/mur2.jpg);">
        <Texte>
          <h2>2. Durabilité hors-pairs</h2>
          <p class="justify">Le béton de chanvre va continuer éternellement de se pétrifier avec le temps, comme la pierre, afin de se solidifier. C’est un mur ininflammable qui n’est pas attaqué par les rongeurs et qui permet d’intervenir plus rapidement en cas de sinistre.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/mur3.jpg);">
        <Texte>
          <h2>3. Facteur écologique</h2>
          <p class="justify">Au Québec, le béton de chanvre est composé à 100% d’ingrédients naturels. Des études ont démontré qu’une maison en chanvre de taille moyenne est en mesure de récupérer jusqu’à 20 tonnes de CO2 à l’intérieur même de ses murs.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/mur4.jpg);">
        <Texte>
          <h2>4. Qualité de l'air</h2>
          <p>Les maisons actuelles sont très bien isolées. Le problème est justement qu’elles ne permettent pas un échange d’air, ce qui se reflète par une pollution de l’air ambiante. Le mur en chanvre respire et permet donc un échange d’air. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/mur5.jpg);">
        <Texte>
          <h2>5. Confort globale</h2>
          <p>Le contrôle hygrothermique qui permet au mur de chanvre de réguler intuitivement l’humidité relative dans l’air. Également, on profite d’une excellente isolation acoustique. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" style="background-image: url(../../static/artchanvre/mur6.jpg);">
        <Texte>
          <h2>6. Design & Ambiance</h2>
          <p>Avec sa finition à la chaux et ses murs végétales, il y a véritablement une sensation unique qui est ressentie dans l’habitation en chanvre. C'est un climat paisible et zen</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>Les méthodes pour intégrer le chanvre à l’habitation.</h2>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>1.</h2>
          <p><strong>Le chanvre coffré</strong> consiste à couler la maison en une seule pièce monolithique et vivante. Inspiré du béton romain, il n’y a pas de joints (faiblesses) dans ce type de construction. On compacte les ingrédients dans les murs.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>2.</h2>
          <p><strong>Les blocs de chanvre</strong> préséché découlent du désir de réduire la main-d’œuvre et le temps de séchage requis sur les chantiers. On reproduit le concept du béton de chanvre sous la forme de blocs moulés et pré séchés que l’on assemble avec un mortier.</p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal">
        <Texte>
          <h2>3.</h2>
          <p><strong>La laine de chanvre,</strong> issu de la fibre de la plante, pour remplacer la laine synthétique dans les murs traditionnels. Cette solution d’isolation en chanvre est simple, mais son efficacité pour le climat québécois n’est pas démontrée. </p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal span-2" style="background-image: url(../../static/artchanvre/antho2.png);">
        <Texte>
          <h2> Merci Art du chanvre</h2>
          <p>Tous les photos ont été prises sur des réalisations de cet artisan Québecois. </p>
          <CqButton href="https://www.artduchanvre.com">Visitez Artduchanvre</CqButton>
        </Texte>
      </Bloc>
    </template>
    <template v-if="$store.state.lang.lang === 'en'">
      <Bloc class="span-2 hero-photo">
        <Texte class="align-left">
          <h2>Hemp construction</h2>
          <p>The hemp house embodies the ideal of ecological and sustainable housing. It is truly adapted to our climate. There are more than a hundred hemp creations in Quebec today, find out why.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Anthony Néron</h2>
          <InterButton href="Chanv">Art du Chanvre</InterButton>
          <p>"Building in hemp goes well beyond the vital need for housing and elevates building towards a global vision of architecture and sustainable design"</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>The part of the plant</h2>
          <p>It is the heart of the hemp stalk that is used to insulate the interior of the building structure. This porous insulation is combined with lime (natural binder), water and crushed terracotta. Result: the "hemp concrete" or also called “hempcrete”.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte class="align-right">
          <h2>Lime finition</h2>
          <p>To preserve the living character of the hemp concrete, it is strongly recommended to apply a lime finish (inside and outside). Offering at the same time an effect of depth and purity to the interior design.</p>
        </Texte>
      </Bloc>
      <Bloc style="background-image: url(../../static/artchanvre/photo-4.jpg);"></Bloc>
      <Bloc>
        <Texte>
          <h2>The advantages of housing in hemp.</h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte class="align-left">
          <h2>Energetic efficiency</h2>
          <p class="justify">Hemp concrete, coated with a natural finish, has the advantage of acting as a very effective thermal mass. Hemp houses are temperate, we enjoy an ambient temperature of 21 degrees throughout the year without intensive energy cost.</p>
        </Texte>
      </Bloc>
      <Bloc class="span-v" style="background-image: url(../../static/artchanvre/photo-5.jpg);"></Bloc>
      <Bloc>
        <Texte>
          <h2>Outstanding durability</h2>
          <p>Hemp concrete will continuously petrify over time, like stone, to solidify. It is a non-flammable wall that is not attacked by rodents and allows occupant to intervene more quickly in case of disaster.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Design and atmosphere</h2>
          <p>class="justify">With its lime finish and its plant-based walls, there is truly a unique sensation that is felt in the hemp house. Testimonies indicate that people feel wrapped in comfort and purity.</p>
        </Texte>
      </Bloc>
      <Bloc class="span-2" style="background-image: url(../../static/artchanvre/photo-6.jpg);">
        <Texte>
          <h2>Ecological factor</h2>
          <p>In Quebec, hemp concrete is made from 100% natural ingredients. Studies have shown that a hemp house of average size can recover up to 20 tons of CO2 in the atmosphere inside its walls.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>Methods for integrating hemp into habitation.</h2>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>1.</h2>
          <p><strong>The most popular</strong> is inspired by Roman concrete, it consists of building the house into one monolithic piece, there are no joints (weaknesses) in this type of construction. We pour the ingredients in the walls.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>2.</h2>
          <p>Most recently in Québec, artduchanvre have promoted the concept of <strong>“hemp blocks”</strong>, born from the desire to reduce the labor and drying time required on construction sites. The concept of hemp concrete is to reproduce the hempcrete in the form of molded and pre-dried blocks that are assembled with a mortar.</p>
        </Texte>
      </Bloc>
      <Bloc>
        <Texte>
          <h2>3.</h2>
          <p>Finally, <strong>hemp wool,</strong> made from the fiber of the plant, is used to replace synthetic wool in traditional walls. This solution is simple, but its effectiveness for our Nordic climate is not proven.</p>
        </Texte>
      </Bloc>
    </template>
  </div>
</template>
<script>
export default {
  name: 'construction'
}
</script>
<style scoped>
  #construction {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .hero-photo {
    background-image: url(../assets/img/photo-3.jpg) !important;
  }
</style>
