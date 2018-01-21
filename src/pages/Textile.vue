<template>
  <div id="textile">
    <Bloc class="span-2" >
      <Texte>
        <h2>Textile</h2>
        <p>Le textile de chanvre est une merveille.</p>
      </Texte>
    </Bloc>
    <Bloc>
      <Texte>
        <h2>Pourquoi se vêtir en chanvre? </h2>
        <p>Le vêtement de chanvre nous permet de répondre à un besoin essentiel grâce à un tissu sain, autant pour nous que pour la planète. C’est vraisemblablement le plus vieux textile à avoir été domestiqué par l’homme. Il est temps de redécouvrir ce précieux tissu à notre tour. </p>
      </Texte>
    </Bloc>
    <Bloc style="background-image: url(../../static/textile/samjeremy2.jpg);" > </Bloc>
    <Bloc style="background-image: url(../../static/textile/textile.jpg);" > </Bloc>
    <Bloc class=beige>
      <Texte>
        <h2>Vêtement en chanvre au Québec?</h2>
        <p>Le tissu de chanvre provient essentiellement de la Chine, une puissance mondiale dans le domaine. Il y a toutefois des manufactures québécoises qui travaillent ce tissu, dont Respecterre et Abaka. Récemment, Logistik Unicorp a développé un uniforme pour l’armée canadienne 100% fait de chanvre canadien!</p>
      </Texte>
    </Bloc>
    <Bloc>
      <Texte>
        <h2>Projet jechanvre</h2>
        <p>« Nous avons créé le projet jechanvre dans le but final de stimuler l’innovation dans ce domaine. 100% des profits réalisés sont réinvestis pour produire de nouvelles collections. C’est l’opportunité pour chacun d’exprimer sa solidarité pour la plante. » </p>
      </Texte>
    </Bloc>
    <Bloc style="background-image: url(../../static/textile/felix2.jpg);" > </Bloc>
    <Bloc class="span-2 beige">
      <Texte>
        <h2>Les avantages du tissu de chanvre</h2>
      </Texte>
    </Bloc>
        <Bloc style="background-image: url(../../static/textile/christian.jpg);" > </Bloc>
    <Bloc>
      <Texte>
        <h2>Confortable</h2>
        <p>Les fibres de chanvre sont poreuses, formant un tissu qui respire et qui possède une belle isolation thermique, vous gardant au chaud en hiver et au frais en été. Il n’y a qu’un secret à retenir: il s’adoucit avec les lavages.</p>
      </Texte>
    </Bloc>
    <Bloc>
      <Texte>
        <h2>Écologique</h2>
        <p>Les champs de chanvre ont la capacité de capturer le CO2 dans l’atmosphère. Pour produire la même quantité de textile, le chanvre consomme quatre fois moins d’eau que le coton et ne requiert pas de pesticides ni de synthèse de composé chimiques.</p>
      </Texte>
    </Bloc>
    <Bloc class=beige>
      <Texte>
        <h2>Protège la peau</h2>
        <p>Non seulement il n’est pas issu des procédés chimiques de production, mais le textile de chanvre a également pour propriété de nous protéger des menaces externes. Antibactérien et presque entièrement résistant aux rayons UV.</p>
      </Texte>
    </Bloc>
    <Bloc>
      <Texte>
        <h2>Rigide et durable</h2>
        <p>La fibre de chanvre est la plus résistante et rigide qui soit. C’est pour cette raison qu’on l’utilise pour les uniformes militaires. Les items en chanvre sont un gage de durabilité.</p>
      </Texte>
    </Bloc>
    <Bloc style="background-image: url(../../static/textile/corde.jpg);" > </Bloc>
    <Bloc class="span-2 beige">
      <Texte>
        <h2>Histoire du textile de chanvre</h2>
      </Texte>
    </Bloc>
    <Bloc>
      <Texte>
        <p>Le textile de chanvre est vraisemblablement un des plus vieux textiles à avoir été utilisé par l’Homme (par les moines chinois Shinto). En Amérique, on utilisait la corde de chanvre pour sa rigidité dans les navires et pour les uniformes de guerre. Historiquement, la famille impériale japonaise était traditionnellement vêtue de chanvre, un symbole suprême de pureté.</p>
      </Texte>
    </Bloc>
    <Bloc style="background-image: url(../../static/textile/shinto.jpg);" > </Bloc>
    <Bloc style="background-image: url(../../static/textile/adidas.jpg);" > </Bloc>
    <Bloc>
      <Texte>
        <p>En raison de l’essor de l’industrie du coton et de la prohibition (injustifié) de la plante de chanvre en Amérique du Nord, l’industrie a connu un important recul. Aujourd’hui, son utilisation est en pleine émergence, avec des joueurs comme <strong>Adidas</strong> et Patagonia qui l’utilisent dans leurs créations. </p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'textile'
}
</script>
<style lang="sass" scoped>
  #textile
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    grid-gap: 10px
    width: 100%
    @media(max-width:468px)
      grid-auto-rows: minmax(calc(100vh/1.7), auto)
</style>
