import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../classes/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

 ingredients: Array<Ingredient> = [];

  constructor() { }

  ngOnInit() {
  }

}
