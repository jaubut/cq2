const state = {
  artisans: [
    {
      id: 1,
      title: 'Chanv',
      description: 'Soins corporel en symbiose avec la nature',
      img: '../../static/onepagechanv/chanvlogo.png',
      routerName: 'Chanv',
      group: 'Soins'
    },
    {
      id: 2,
      title: 'Crocx',
      description: 'Nature apprivoisée, plaisir indompté',
      img: '../../static/crocx/crocxlogo.png',
      routerName: 'Crocx',
      group: 'FeedStock'
    },
    {
      id: 3,
      title: 'Jechanvre',
      description: 'Exprimer un message.',
      img: '../../static/jechanvre/jechanvre.png',
      routerName: 'Jechanvre',
      group: 'Textile'
    },
    {
      id: 4,
      title: 'Votre marque',
      description: 'Pour être afficher ici',
      routerName: 'votremarque',
      group: 'all'
    }
  ]
}

export default {
  state
}
