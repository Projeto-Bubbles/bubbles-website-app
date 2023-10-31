import { EventProps } from '../interfaces/bubble';

export const mockData: EventProps[] = [
  {
    title: 'Conferência de Tecnologia 2023',
    date: new Date('2023-11-15'),
    image:
      'https://i0.statig.com.br/bancodeimagens/95/2z/m4/952zm49rlbkdy2ivex1e0oxiv.jpg',
    bubble: {
      name: 'Tecnologia',
      color: 'blue',
    },
  },
  {
    title: 'Exposição de Arte Moderna',
    date: new Date('2023-12-05'),
    image:
      'https://img.freepik.com/fotos-premium/photon-abstract-art-background-hd-8k-papel-de-parede-banco-de-imagem-fotografica_890746-71874.jpg?w=2000',
    bubble: {
      name: 'Arte',
      color: 'red',
    },
  },
  {
    title: 'Festival de Música Indie',
    date: new Date('2023-11-25'),
    image:
      'https://musicindustryhowtoimages.s3.amazonaws.com/wp-content/uploads/2021/12/08005244/What-Is-Acoustic-Music.jpg',
    bubble: {
      name: 'Música',
      color: 'green',
    },
  },
  {
    title: 'Workshop de Fotografia',
    date: new Date('2023-11-18'),
    image:
      'https://i.pcmag.com/imagery/roundups/05VXLlOuCyvq8fQnl6W3xsc-39.fit_lim.size_1050x.jpg',
    bubble: {
      name: 'Fotografia',
      color: 'orange',
    },
  },
  {
    title: 'Lançamento de Novo Livro',
    date: new Date('2023-12-10'),
    image:
      'https://play-lh.googleusercontent.com/5Fps9kjcrkMMM-zCL5jbZI1S50MFS-ZVNVzj64haGOerkPJPaL-bTjINGi1wXKroJq8',
    bubble: {
      name: 'Literatura',
      color: 'purple',
    },
  },
];
