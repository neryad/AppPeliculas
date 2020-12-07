import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-genrico',
  templateUrl: './listado-genrico.component.html',
  styleUrls: ['./listado-genrico.component.css'],
})
export class ListadoGenricoComponent implements OnInit {
  @Input()
  listado;
  constructor() {}

  ngOnInit(): void {}
}
