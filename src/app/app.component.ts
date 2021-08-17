import { Component, OnInit } from '@angular/core';
import { Inventory } from './inventory';
import { InventoryService } from './inventory.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD';
  inventorymodel = new Inventory()
  inventory_data:Inventory[]=[]
  constructor(private obj:InventoryService){}

  ngOnInit(): void{
    this.obj.getInventory().subscribe((data)=>{
    console.log(data)
   this.inventory_data = data.map((doc)=>{
      return {
        id:doc.payload.doc.id,
        ...doc.payload.doc.data() as {}
      }as Inventory
    })
    })
  }
  save(){
    if(this.inventorymodel.id==""){
    console.log(this.inventorymodel)
    this.obj.saveInventory(this.inventorymodel)
    }
    else{
      this.obj.updateInventory(this.inventorymodel)

    }
  }

  readData(){}

 editData(invent:Inventory){
   this.inventorymodel = invent
  //  this.obj.updateInventory(this.inventorymodel)
 }

 deleteData(invent:Inventory){
   console.log('delete')
   console.log(invent)
   this.obj.deleteInventory(invent)
 }

}
