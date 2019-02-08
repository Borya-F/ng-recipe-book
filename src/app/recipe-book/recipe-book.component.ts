import { Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../classes/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.sass']
})
export class RecipeBookComponent implements OnInit {

	activeRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  displayRecipeDetails(recievedRecipe:Recipe){
  	this.activeRecipe = recievedRecipe;
  }



}
