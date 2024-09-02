import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubcriberService {

  constructor(private afs:AngularFirestore) { }
  addSubs(subdata:any){
    this.afs.collection('subscriber').add(subdata).then((data)=>{
      console.log(data)
    })
  }

  checkSubs(subEmail:string){
   return this.afs.collection('subscriber',ref=>ref.where('email','==',subEmail)).get()
  }
}
