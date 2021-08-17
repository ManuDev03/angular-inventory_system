import { Injectable } from '@angular/core';
import { Inventory} from './inventory'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private firestore:AngularFirestore) { }
  saveInventory(invent:Inventory){
    this.firestore.collection("inventorystore").add({name:invent.name,
      storeid:invent.storeId,
      gstno:invent.gstno,
      address:invent.address})

  }

  getInventory(){
   return  this.firestore.collection("inventorystore").snapshotChanges()
  }
  updateInventory(obj:Inventory){
    this.firestore.doc("inventorystore/"+ obj.id).update({...obj})
  }
deleteInventory(invent:Inventory){
  this.firestore.doc("inventorystore/"+ invent.id).delete()
}

}
