import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  titulo = 'Domicilios Test';
  usuario: User;

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuario =  this.usuarioService.getUsuarioActual();
  }

}
