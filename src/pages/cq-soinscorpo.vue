<template>
  <div id="soins">
    <Bloc class="span-2 beige">
      <Texte>
        <h2>Soins corporels</h2>
        <p>Selon plusieurs recherches scientifiques, l'huile de chanvre est la plus complète et la plus efficace des huiles naturelles utilisées en cosmétiques. On l’utilise généralement en harmonie avec d’autres ingrédients naturels pour produire des crèmes, des huiles corporelles et des onguents de chanvre aux vertus incomparables.</p>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
          <h4>Les bienfaits:</h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte>
        <h2>Hydratation de la peau</h2>
        <p>C’est une des rares huiles végétales ayant un ratio idéal d'Oméga-3 et d’Oméga-6. Ce profil est proche des lipides naturels de la peau. Ainsi, l’huile de chanvre est en mesure de pénétrer et hydrater la peau en profondeur (jusqu’au derme), ce qui en fait une huile de choix pour tous les soins de la peau.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal" style="background-image: url(../../static/soinscorporel/hydratant.png);"></Bloc>
    <Bloc class="height-normal" style="background-image: url(../../static/soinscorporel/coline.jpg);"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Réduction des rougeurs</h2>
        <p>L’huile de chanvre renforce les parois veineuses et améliore la circulation sanguine, atténuant ainsi la visibilité des veines superficielles. Elle active la microcirculation et réduit la rougeur. L’huile de chanvre est donc particulièrement adaptée contre la couperose et la rosacée puisqu’elle pénètre en profondeur. </p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte>
        <h2>Action anti-âge</h2>
        <p>Les recherches scientifiques de l’université des sciences et technologies pharmaceutiques de Turin démontrent en 2005 que les propriétés antioxydantes et anti-inflammatoires de l’huile de chanvre agissent contre le processus de vieillissement tout en apaisant la peau. Une crème de chanvre est conseillée à cette fin.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal" style="background-image: url(../../static/soinscorporel/jeunesse.jpg);"></Bloc>
    <Bloc class="height-normal" style="background-image: url(../../static/soinscorporel/nourrit.jpg);"></Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Nutriments pour la peau</h2>
        <p>La peau est une membrane vivante qui exige d’être bien alimentée. Les acides gras essentiels, la vitamine K, les antioxydants et autres nutriments permettent à la peau de conserver ses propres mécanismes de protection et son élasticité. L'huile de chanvre apporte à la peau ses composantes essentielles.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte>
        <h2>Anti-inflammatoire</h2>
        <p>L’huile de chanvre agit comme un anti-inflammatoire naturel. Les acides gras essentiels jouent un rôle important pour réduire les symptômes de nombreuses maladies de la peau, tels que l’eczéma, le psoriasis et l’acné. C'est une huile particulièrement efficace pour soulager les peaux irritées.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal" style="background-image: url(../../static/soinscorporel/antiinflammatoire.jpg);"></Bloc>
    <Bloc class="span-2 beige">
      <Texte>
        <h2>Une marque d'ici</h2>
        <p>Chanv est une gamme de soins corporels qui existe depuis 2004</p>
      </Texte>
      <CqButton to="/marques/chanv">Découvrez Chanv</CqButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'soins',
  metaInfo: {
    title: 'Soins Corporels'
  }
}
</script>
<style scoped>
  #soins {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
</style>
