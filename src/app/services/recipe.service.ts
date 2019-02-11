import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../classes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('test_recipe1','test_recipe_desc','https://loremflickr.com/50/50/food'),
		new Recipe('test_recipe2','test_recipe_desc_2','https://loremflickr.com/50/50/food')
	];

  constructor() { }


  getRecipes(): Array<Recipe>{
  	return this.recipes.slice();
  }

  setSelectedRecipe(recipe:Recipe){

  	console.log(`set selected recipe as ${recipe.name}`);
  	this.recipeSelected.emit(recipe);
  }


}
