import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model'; 

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {

	ingredientsChanged = new EventEmitter<Array<Ingredient>>();

	private ingredients: Array<Ingredient> = [
		new Ingredient('banana',2),
		new Ingredient('apple',3)
	];

  constructor() { }

  getIngredients():Array<Ingredient>{
  	return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){

  	console.log(`got ingredient with name: ${ingredient.name}`);
  	this.ingredients.push(ingredient);
  	this.ingredientsChanged.emit(this.ingredients.slice());
  }

  clearIngredientList(){
  	this.ingredients = [];
  	this.ingredientsChanged.emit(this.ingredients.slice());
  }
  
}
