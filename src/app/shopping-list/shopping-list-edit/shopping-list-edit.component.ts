import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {Ingredient} from '../../classes/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.sass']
})
export class ShoppingListEditComponent implements OnInit {

	@Output() newIngredientSaved = new EventEmitter<Ingredient>();
	@Output() clearIngredientList = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSave(_name:string,_amount:number){
  	this.newIngredientSaved.emit(new Ingredient(_name,_amount));
  }

  onClearList(){
  	this.clearIngredientList.emit();
  }

}
