import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {

	allowNewSever: boolean = false;
	serverCreationStatus: string = "No Server was created";
	serverName: string = 'test server';

  constructor() { 
  	setTimeout(()=>{
  		this.allowNewSever = true;
  	},3000)
  }

  ngOnInit() {
  }

  onCreateServer():void{
  	this.serverCreationStatus = "server was created";
  }

  onUpdateServerName(event: Event):void{
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
