import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../classes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

	@Output() recipeDetailsEmitter = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('test_recipe1','test_recipe_desc','https://loremflickr.com/50/50/food'),
		new Recipe('test_recipe2','test_recipe_desc_2','https://loremflickr.com/50/50/food')
	];

  	constructor() { }

  	ngOnInit() { }

  	emitRecipe(recipeEl: Recipe){
  		console.log('emitting recipe');
  		this.recipeDetailsEmitter.emit(recipeEl);
  	};

}
