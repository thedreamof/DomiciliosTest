import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { Estado } from '../../../interfaces/estado';
import { Reaccion } from '../../../interfaces/reaccion';
import { EstadoService } from '../../../services/estado.service';
import { Comentario } from '../../../interfaces/comentario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss']
})
export class StateListComponent implements OnInit {

  mostrarComentarios = false;
  estados;
  estadoActual;

  reaccionMenu = false;

  usuarioActual: User;

  constructor( private estadoService: EstadoService, private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuarioActual = this.usuarioService.getUsuarioActual();
    this.estados =  this.estadoService.getEstados();
  }

  contarReacciones( reacciones: Reaccion[]): number {
    let cant = 0;

    if (reacciones) {
      reacciones.forEach( reac => cant += reac.cantidad );
    }

    return cant;
  }

  comentar( estado ) {
    this.estadoActual = estado;
    this.mostrarComentarios = !this.mostrarComentarios;
  }

  addComentario( estado, comentario: Comentario) {
    console.log( 'aqui', estado, comentario );
    this.estadoService.addComentario( estado, comentario );
  }

  reaccionar( estado ) {
    this.estadoActual = estado;
    this.reaccionMenu = !this.reaccionMenu;
    console.log( estado );
  }

  reaccion( idReaccion: number ) {
    this.estadoService.updateReaccion( this.estadoActual.id, idReaccion, this.usuarioActual );
    this.reaccionMenu = false;
  }

}
