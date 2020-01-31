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
  comenta: Comentario;

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

    this.comenta = {
      id: this.generaId( 100, 200 ),
      descripcion: '',
      fecha: new Date().toLocaleString(),
      usuario: this.usuarioActual
    };
  }

  addComentario( comentario) {
    console.log( comentario );
  }

  onSubmit( comentario ) {
    this.estadoService.addComentario( this.estadoActual.id, this.comenta );
    this.comenta = {
      id: this.generaId( 100, 1000 ),
      descripcion: '',
      fecha: new Date().toLocaleString(),
      usuario: this.usuarioActual
    };
  }

  private generaId(min, max) {
    return Math.round(Math.random() * (max - min) + min);
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
