import {Ingredient} from "../shared/ingredient";

export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: Ingredient[]){
    //push multiple items at once 
    Array.prototype.push.apply(this.items, items);
  }
}
