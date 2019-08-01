import { Component } from '@angular/core';
import { PeliculasService } from './servicios/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculasapp';


  constructor(public servicioPelicula: PeliculasService) {

    this.servicioPelicula.getPopulares().subscribe(respuesta => console.log(respuesta));

  }
}
