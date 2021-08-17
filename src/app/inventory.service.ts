import { Injectable } from '@angular/core';
import { Inventory} from './inventory'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private firestore:AngularFirestore) { }
  saveInventory(invent:Inventory){
    this.firestore.collection("inventorystore").add({...invent})

  }

  getInventory(){
   return  this.firestore.collection("inventorystore").snapshotChanges()
  }
  updateInventory(obj:Inventory){
    this.firestore.doc("inventorystore/"+ obj.id).update({...obj})
  }


}
