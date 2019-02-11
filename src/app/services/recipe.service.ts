import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../classes/recipe.model';
import {Ingredient} from '../classes/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('test_recipe1','test_recipe_desc','https://loremflickr.com/50/50/food',[
        new Ingredient('bread',2),
        new Ingredient('eggs', 3),
        new Ingredient('water', 500)
      ]),
		new Recipe('test_recipe2','test_recipe_desc_2','https://loremflickr.com/50/50/food',[
        new Ingredient('steak',2),
        new Ingredient('chicken', 5),
      ])
	];

  constructor() { }


  getRecipes(): Array<Recipe>{
  	return this.recipes.slice();
  }

  setSelectedRecipe(recipe:Recipe){

  	this.recipeSelected.emit(recipe);
  }


}
