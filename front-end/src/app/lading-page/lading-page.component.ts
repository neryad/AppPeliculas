import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.css'],
})
export class LadingPageComponent implements OnInit {
  peliculasEnCine;
  peliculasProximoEstrenos = [];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = [
        {
          titulo: 'Spider-Man',
          fechaLanzamineto: new Date(),
          precio: 1400.99,
          poster:
            'https://i.pinimg.com/originals/c8/66/93/c86693302b6981209afe2def102d0668.jpg',
        },
        {
          titulo: 'Moana',
          fechaLanzamineto: new Date('2016-11-14'),
          precio: 300.99,
          poster:
            'https://images-na.ssl-images-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg',
        },
      ];
    }, 3000);
  }
}
