import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model';
import { ShopingListService } from '../services/shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  selectedIngredient: Ingredient;
  ingredients: Array<Ingredient>;

  constructor(private shoppingListService: ShopingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Array<Ingredient>)=>{
        this.ingredients = ingredients;
      })
  }

   addToIngredientlist(newIngredient:Ingredient){
     this.shoppingListService.addIngredient(newIngredient);
   }

  
   editIngredient(ingredient:Ingredient){
     // this.shoppingListService.setSelectedIngredient(ingredient);
   }
}
