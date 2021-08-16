import { Component } from '@angular/core';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  inventorymodel = new Inventory()
  constructor(private obj:InventoryService){}
  save(){
    console.log(this.inventorymodel)
    this.obj.saveInventory(this.inventorymodel)
  }
}
