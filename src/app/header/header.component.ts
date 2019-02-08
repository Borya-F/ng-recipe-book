import { 
	Component, 
	OnInit, 
	EventEmitter,
	Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	activeTab: string = 'recipe';

	@Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  	
  }


  //listeners
  onSelect(feature:string){
  	this.activeTab = feature;
  	this.featureSelected.emit(feature);

  }


}
