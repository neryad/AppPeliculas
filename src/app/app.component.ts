import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-end';

  peliculasEnCine;
  peliculasProximoEstrenos = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [
        {
          titulo: 'Spider-Man',
          fechaLanzamineto: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Moana',
          fechaLanzamineto: new Date('2016-11-14'),
          precio: 300.99,
        },
      ];
    }, 3000);
  }

  manejarRated(voto: number): void {
    alert(voto);
  }
}
