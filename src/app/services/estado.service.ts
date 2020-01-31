import { Injectable } from '@angular/core';
import { Estado } from '../interfaces/estado';
import { Comentario } from '../interfaces/comentario';
import { User } from '../interfaces/user';

const data: Estado[] = [
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

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }


  getEstados() {
    return data;
  }

  addEstado( estado: Estado) {
    data.push(estado);
    console.log( data );
  }

  addComentario( idEstado, comentario ) {
    data.forEach( estado => {
      if ( estado.id === idEstado ) {
        estado.comentarios.push(comentario);
      }
    });
  }

  updateReaccion( idEstado: number, idReaccion: number, user: User ) {

    data.forEach( estado => {
      if ( estado.id === idEstado ) {

        estado.reacciones.forEach( reac => {
          if ( reac.id === idReaccion ) {

            if ( reac.usuario === null ) {
              reac.usuario = [];
              reac.usuario.push(user);
              reac.cantidad++;
            } else {

              const existe = reac.usuario.indexOf(reac.usuario.filter( usu => usu.id === user.id )[0]);

              if ( existe !== -1 ) {
                console.log(existe);
                reac.cantidad--;
                reac.usuario.splice(existe, 1);
              } else {
                reac.usuario.push(user);
                reac.cantidad++;
              }

            }


          }
        });
      }
    });
  }

}
