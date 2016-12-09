import { Ingredient } from "../shared/ingredient";

export class Receipe {
  constructor( public name : string, public description : string, public imagePath : string, public ingredients: Ingredient[]){

  }
}
