export class Recipe {

	public name: string;
	public description: string;
	public imagePath: string;

	constructor(_name:string,_desc:string,_imgPath:string){
		this.name = _name;
		this.description = _desc;
		this.imagePath = _imgPath;
	}
	
}