import { Estado } from '../../app/interfaces/estado';

export const data: Estado[] = [
    {
      id: 1,
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, architecto. Porro eius incidunt recusandae maiores culpa neque quam velit, natus sed quos nam corrupti excepturi! Tempore et autem optio minus.',
      fecha: 'Hace 45 minutos',
      usuario: {
        id: 1,
        name: 'Jeyson Poveda',
        image: 'user-image.png'
      },

      reacciones: [
        {
            id: 1,
            usuario: [
              {
                id: 3,
                name: 'Elena',
                image: 'user-image.png'
              }
            ],
            descripcion: 'Me gusta',
            cantidad: 2
        },
        {
            id: 2,
            usuario: [
              {
                id: 3,
                name: 'Elena',
                image: 'user-image.png'
              }
            ],
            descripcion: 'Me sorprende',
            cantidad: 5
        },
        {
            id: 3,
            usuario: [
              {
                id: 3,
                name: 'Elena',
                image: 'user-image.png'
              }
            ],
            descripcion: 'Me divierte',
            cantidad: 1
        }
      ],

      comentarios: [
          {
              id: 1,
              usuario: {
                id: 3,
                name: 'Elena',
                image: 'user-image.png'
              },
              descripcion: 'Lorem ipsum dolor sit amet consectetur.',
              fecha: 'Hace 2 dias'
          },
          {
            id: 2,
            usuario: {
              id: 4,
              name: 'Jose',
              image: 'user-image.png'
            },
            descripcion: 'Lorem ipsum dolor sit amet consectetur.',
            fecha: 'Hace 2 dias'
          },
          {
            id: 3,
            usuario: {
              id: 5,
              name: 'Eduardo',
              image: 'user-image.png'
            },
            descripcion: 'Lorem ipsum dolor sit amet consectetur.',
            fecha: 'Hace 2 dias'
          }
      ]
    },

    {
      id: 2,
      // tslint:disable-next-line: max-line-length
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, architecto. Porro eius incidunt recusandae maiores culpa neque',
      fecha: 'Hace 45 minutos',
      usuario: {
        id: 2,
        name: 'Liliana Jimenez',
        image: 'img-user.png'
      },

      reacciones: [
        {
            id: 1,
            usuario: [
              {
                id: 3,
                name: 'Elena',
                image: 'user-image.png'
              }
            ],
            descripcion: 'Me gusta',
            cantidad: 2
        },
        {
            id: 2,
            usuario: [
              {
                id: 3,
                name: 'Elena',
                image: 'user-image.png'
              }
            ],
            descripcion: 'Me sorprende',
            cantidad: 0
        },
        {
            id: 3,
            usuario: [
              {
                id: 3,
                name: 'Elena',
                image: 'user-image.png'
              }
            ],
            descripcion: 'Me divierte',
            cantidad: 0
        }
      ],

      comentarios: [
        {
          id: 1,
          usuario: {
            id: 4,
            name: 'Jose',
            image: 'user-image.png'
          },
          descripcion: 'Lorem ipsum dolor sit amet consectetur.',
          fecha: 'Hace 2 dias'
        },
      ]
    }

];
