import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../classes/recipe.model';
import { RecipeService} from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.recipe = recipe;
      }
    );
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredintsToShoppingList([...this.recipe.ingredients]);
  }



}
