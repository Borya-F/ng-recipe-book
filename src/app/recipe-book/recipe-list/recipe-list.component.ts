import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../classes/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

    recipes: Array<Recipe>;

  	constructor(private recipeService: RecipeService) { }

  	ngOnInit() { 
      this.recipes = this.recipeService.getRecipes();
    }

  	// emitRecipe(recipeEl: Recipe){
  	// 	console.log('emitting recipe');
  	// 	// this.recipeDetailsEmitter.emit(recipeEl);
  	// };

    displayDetails(recipe: Recipe){
      this.recipeService.setSelectedRecipe(recipe);
    }

}
