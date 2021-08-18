import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private basepath='/upload'
  private uploadTask:any

  pushUpload(){}
}
