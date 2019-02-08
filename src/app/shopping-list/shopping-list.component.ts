import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [
    new Ingredient('banana',2),
    new Ingredient('apple',3)
  ];

  constructor() { }

  ngOnInit() {
  }

   addToIngredientlist(newIngredient){
     this.ingredients.push(newIngredient);
   }
}
