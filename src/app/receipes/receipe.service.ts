import { Injectable } from '@angular/core';
import { Receipe } from './receipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ReceipeService {
  private receipes: Receipe[] = [
    new Receipe('Kebab', 'very juicy', 'https://thumb7.shutterstock.com/display_pic_with_logo/162079/250321345/stock-photo-plate-of-arabic-kebab-meat-with-grilled-vegetables-250321345.jpg', [
      new Ingredient('French Fries', '2'),
      new Ingredient('Meat', '1')
    ]),
    new Receipe('Shawarma', 'fatty one', 'http://cdn.themediterraneandish.com/wp-content/uploads/2014/10/Best-Cuisine-Includes-Shawarma.jpg', [
      new Ingredient('Beef Meat', '1'),
      new Ingredient('Mash Potato', '1')
    ])
  ];
  constructor() { }
  getReceipes() {
    return this.receipes;
  }
}
