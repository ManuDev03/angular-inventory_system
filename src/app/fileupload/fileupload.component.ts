import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor(private af:AngularFireStorage) { }
  ref:any

  ngOnInit(): void {
  }
  upload(event:any){
    console.log("uploading...")
    console.log(event.target.files[0])
    const randomid= Math.random().toString(36).substring(2)
    this.ref = this.af.ref(randomid)
    this.ref.put(event.target.files[0])

  }

}
