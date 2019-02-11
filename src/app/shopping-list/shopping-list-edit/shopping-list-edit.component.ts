import { Component, OnInit, } from '@angular/core';
import {Ingredient} from '../../classes/ingredient.model';
import {ShopingListService} from '../../services/shoping-list.service'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.sass']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShopingListService) { }

  ngOnInit() {

  }

  onSave(name:string,amount:number){
    this.shoppingListService.addIngredient(new Ingredient(name,amount));
  }

  onClearList(){
    this.shoppingListService.clearIngredientList();
  }


}
