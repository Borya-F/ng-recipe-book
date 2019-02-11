import {Ingredient} from './ingredient.model';

export class Recipe {

	public name: string;
	public description: string;
	public imagePath: string;
	public ingredients: Array<Ingredient>;

	constructor(_name:string,_desc:string,_imgPath:string,_ingredients:Array<Ingredient>){
		this.name = _name;
		this.description = _desc;
		this.imagePath = _imgPath;
		this.ingredients = _ingredients;
	}
	
}