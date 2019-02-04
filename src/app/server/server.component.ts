import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  serverId: number = 10;
  serverStatus: string = 'offline';


  getServerStatus(): string {
  	return this.serverStatus;
  }

}
