import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';


const usuario: User = {
  id: 1,
  name: 'Jeyson',
  image: 'user-image.png'
};


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarioActual() {
    return usuario;
  }
}
