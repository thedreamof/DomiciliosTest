import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estado } from '../../interfaces/estado';
import { Comentario } from '../../interfaces/comentario';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  @Input() estado: Estado;
  @Input() usuarioActual: User;
  @Output() envComentario = new  EventEmitter();

  comentario: Comentario;

  constructor() { }

  ngOnInit() {
    this.initComentario();
  }

  onSubmit( form ) {

    this.comentario.id = this.generaId( 100, 200 );
    this.comentario.fecha = new Date().toLocaleString();
    this.comentario.usuario = this.usuarioActual;

    this.envComentario.emit( this.comentario );
    this.initComentario();
  }

  private initComentario() {
    this.comentario = {
      id: 0,
      descripcion: '',
      fecha: new Date().toLocaleString(),
      usuario: this.usuarioActual
    };
  }

  private generaId(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

}
