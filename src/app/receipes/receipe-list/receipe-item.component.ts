import { Component, OnInit, Input} from '@angular/core';
import { Receipe } from '../receipe';
@Component({
  selector: 'rb-receipe-item',
  templateUrl: './receipe-item.component.html'
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe : Receipe;
  receipeId : number;
  constructor() { }

  ngOnInit() {
  }

}
