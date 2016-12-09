import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe';
@Component({
  selector: 'rb-receipes',
  templateUrl: './receipes.component.html'
})
export class ReceipesComponent implements OnInit {

  receipeSelected : Receipe;
  constructor() { }

  ngOnInit() {
  }

}
