import { Component, OnInit,OnChanges, Input, SimpleChange} from '@angular/core';
import { Recipe } from '../../classes/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {

	@Input() recipe: Recipe;
	imgPath: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChange) {
  	if(this.recipe){
  		this.imgPath = this.recipe.imagePath.replace(/50/g,'350');
  	}
  	
  }

}
