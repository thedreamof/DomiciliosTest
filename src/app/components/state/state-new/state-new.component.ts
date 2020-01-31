import { Component, OnInit } from '@angular/core';
import { Estado } from '../../../interfaces/estado';
import { UsuarioService } from '../../../services/usuario.service';
import { EstadoService } from '../../../services/estado.service';

@Component({
  selector: 'app-state-new',
  templateUrl: './state-new.component.html',
  styleUrls: ['./state-new.component.scss']
})
export class StateNewComponent implements OnInit {

  public estado: Estado;

  constructor( private usuarioService: UsuarioService, private estadoService: EstadoService ) { }

  ngOnInit() {
    this.inicializarEstado();
  }

  onSubmit( form ) {
    console.log( form.descripcion );

    this.estado.id = this.generaId( 10, 100 );
    this.estado.descripcion = form.descripcion;
    this.estado.fecha = new Date().toLocaleString();
    this.estado.usuario = this.estado.usuario;
    this.estado.reacciones = this.reaccionesDetelle();
    this.estado.comentarios = [];

    this.estadoService.addEstado( this.estado ); // Agrega el nuevo estado
    this.inicializarEstado();
  }


  // Inicia valores predeterminados para el estado
  private inicializarEstado() {
    this.estado = {
      id: 0,
      // tslint:disable-next-line: max-line-length
      descripcion: '',
      fecha: 'Hace 0 minutos',
      usuario: this.usuarioService.getUsuarioActual(),
      reacciones: this.reaccionesDetelle(),
      comentarios: [ ]
    };
  }

  private generaId(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  private reaccionesDetelle() {
    return [
      {
          id: 1,
          usuario: null,
          descripcion: 'Me gusta',
          cantidad: 0
      },
      {
          id: 2,
          usuario: null,
          descripcion: 'Me sorprende',
          cantidad: 0
      },
      {
          id: 3,
          usuario: null,
          descripcion: 'Me divierte',
          cantidad: 0
      }
    ];
  }
}
