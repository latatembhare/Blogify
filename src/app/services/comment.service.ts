import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private afs:AngularFirestore,private toaster:ToastrService) { }
  saveData(data: any) {
    this.afs
      .collection('comment')
      .add(data)
      .then((docRef) => {
        console.log(docRef);
       this.toaster.success('Comment added successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  loadData() {
    return this.afs
      .collection('comment')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadLatest(){
    return this.afs
    .collection('comment',ref=>ref.orderBy('createdAt'))
    .snapshotChanges()
    .pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }

}
