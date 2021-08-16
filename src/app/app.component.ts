import { Component } from '@angular/core';
import { Inventory } from './inventory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  inventorymodel = new Inventory()
  save(){
    console.log(this.inventorymodel)
  }
}
