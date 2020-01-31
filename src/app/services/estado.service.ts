import { Injectable } from '@angular/core';
import { Estado } from '../interfaces/estado';
import { Comentario } from '../interfaces/comentario';
import { User } from '../interfaces/user';

// Importamos los datos de prueba
import { data } from '../../assets/data/data';

@Injectable({
  providedIn: 'root'
})

export class EstadoService {

  constructor() { }

  // Funcion que obtiene todos los datos (estados) de prueba respectivos.
  getEstados() {
    return data;
  }

  // Funcion que permite agregar un nuevo estado
  addEstado( estado: Estado) {
    data.push(estado);
    console.log( data );
  }

  // Funcion que permite agregar un nuevo comentario teniendo en cuenta el id del estado al que desea comentar
  addComentario( idEstado, comentario ) {
    data.forEach( estado => {
      if ( estado.id === idEstado ) {
        estado.comentarios.push(comentario);
      }
    });
  }


  /*
    Esta funcion controla cuando un usuario agrega una o varias reacciones (Me gusta, Me sorprende, Me divierte) en un estado especifico
    y si ya se encontraba escogida la reaccion por el usuario, lo que hara será eliminarlo de la reaccion y restarle a la cantidad
    de la reaccion respectiva.
  */
  updateReaccion( idEstado: number, idReaccion: number, user: User ) {

    data.forEach( estado => { // Recorre todos los estados
      if ( estado.id === idEstado ) {

        estado.reacciones.forEach( reac => { // Recorre todas las reacciones del estado previamente indicado
          if ( reac.id === idReaccion ) {

            if ( reac.usuario === null ) { // Si el usuario es "null" en una reaccion, se define, se agrega el usuario y se suma la cantidad
              reac.usuario = [];
              reac.usuario.push(user);
              reac.cantidad++;
            } else {

              // Si el usuario se encuentra definido en la reaccion, se busca si existe obteniendo su indice con 'indexOf'
              const existe = reac.usuario.indexOf(reac.usuario.filter( usu => usu.id === user.id )[0]);

              if ( existe !== -1 ) { // Si existe el usuario, le restamos a la cantidad de la reaccion y eliminamos al usuario
                console.log(existe);
                reac.cantidad--;
                reac.usuario.splice(existe, 1);
              } else { // Si no existe el usuario lo agregamos y sumamos uno a la cantidad de la reaccion respectiva
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
