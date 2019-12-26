export const reactionEmojis = {
  'likes': '☺️',
  'hearts': '😍',
  'sad': '😭',
};

export const actualites = [
  {
    id: '47ld',
    message: 'Bonjour tout le monde !',
    datePublication: Date.now() - 100,
    auteur: {
      nom: 'Farid',
      avatar: 'https://i.pinimg.com/736x/92/22/92/922292224f18c660737740d2401e453e.jpg',
    },
    reactions: {
      likes: 4,
      hearts: 5,
      sad: 0,
    },
    commentaires: [
      {
        message: 'Salut à toi !',
        datePublication: Date.now() - 30000,
        auteur: {
          nom: 'Nick',
          avatar: 'https://i.pinimg.com/originals/9d/28/35/9d2835c305f54f35279d0b393bcd50cc.jpg',
        },
        actualiteId: '47ld',
      },
      {
        message: 'Chatbox réalisé avec React !',
        datePublication: Date.now() - 10000,
        auteur: {
          nom: 'Damien',
          avatar: 'https://pbs.twimg.com/profile_images/813159538119557126/Y1rUf3I5_bigger.jpg',
        },
        actualiteId: '47ld',
      },
    ],
  },
  {
    id: 'i9pz',
    message: 'Nos messages sont codés en "dur" dans un fichier JS.',
    datePublication: Date.now() - 100000,
    auteur: {
      nom: 'Nick',
      avatar: 'https://i.pinimg.com/originals/9d/28/35/9d2835c305f54f35279d0b393bcd50cc.jpg',
    },
    reactions: {
      likes: 2,
      hearts: 3,
      sad: 1,
    },
    commentaires: [],
  },
];
