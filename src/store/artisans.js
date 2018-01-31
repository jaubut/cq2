const state = {
  artisans: [
    {
      id: 1,
      title: 'Chanv',
      description: 'Soins corporel en symbiose avec la nature',
      img: '../../static/onepagechanv/chanvlogo.png',
      routerName: 'Chanv',
      group: 'Soins',
      bgColor: false
    },
    {
      id: 2,
      title: 'Crocx',
      description: 'Nature apprivoisée, plaisir indompté',
      img: '../../static/crocx/crocxlogo.png',
      routerName: 'Crocx',
      group: 'FeedStock',
      bgColor: false
    },
    {
      id: 3,
      title: 'Jechanvre',
      description: 'Démontrer son espoir pour la plante.',
      img: '../../static/jechanvre/jechanvre.png',
      routerName: 'Jechanvre',
      group: 'Textile',
      bgColor: false
    },
    {
      id: 4,
      title: 'Art du Chanvre',
      description: 'vision globale du développement durable',
      routerName: 'Artduchanvre',
      group: 'Construction',
      bgColor: false
    },
    {
      id: 4,
      title: 'Votre marque',
      description: 'Pour être afficher ici',
      routerName: 'Votremarque',
      group: 'all',
      bgColor: true
    }
  ]
}

export default {
  state
}
