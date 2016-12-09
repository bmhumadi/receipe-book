import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe';
import { ShoppingListService } from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-receipe-detail',
  templateUrl: './receipe-detail.component.html'
})
export class ReceipeDetailComponent implements OnInit {

  @Input() selectedRecipe : Receipe;
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

}
