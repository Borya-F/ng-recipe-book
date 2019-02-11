import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  selectedIngredient: Ingredient;

  ingredients: Array<Ingredient> = [
    new Ingredient('banana',2),
    new Ingredient('apple',3)
  ];

  constructor() { }

  ngOnInit() {
  }

   addToIngredientlist(newIngredient:Ingredient){
     this.ingredients.push(newIngredient);
   }

   clearIngredients(){
     this.ingredients = [];
   }

   editIngredient(ingredient:Ingredient){
     this.selectedIngredient = ingredient;
     console.log(this.selectedIngredient);
   }
}
