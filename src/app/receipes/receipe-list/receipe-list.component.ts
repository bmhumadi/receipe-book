import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Receipe } from '../receipe';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'rb-receipe-list',
  templateUrl: './receipe-list.component.html'
})
export class ReceipeListComponent implements OnInit {

  receipes: Receipe[] = [];
  @Output() receipeSelected = new EventEmitter<Receipe>();

  constructor(private receipeService : ReceipeService) { }

  ngOnInit() {
    this.receipes = this.receipeService.getReceipes();
  }

  onSelected(receipe : Receipe){
    this.receipeSelected.emit(receipe);
  }

}
