import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Firestore, doc, updateDoc, increment } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs:AngularFirestore) { }
  loadFeatured() {
    return this.afs
      .collection('posts',ref=>ref.where('featured','==',true).limit(4))
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
    .collection('posts',ref=>ref.orderBy('createdAt'))
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

  loadCategory(categoryId:any){
    return this.afs
    .collection('posts',ref=>ref.where('category.categoryId','==',categoryId))
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

  loadSinglePost(postId:any){
  return  this.afs.doc(`posts/${postId}`).valueChanges()
  }

  loadSimilar(catId:any){
    return this.afs
    .collection('posts',ref=>ref.where('category.categoryId','==',catId))
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

  countViews(postId:any){
  const  viewsCount ={
          views : increment(1)
    }
this.afs.doc(`posts/${postId}`).update(viewsCount).then(res=>{
  console.log('viwes count updated')
})
  }
}
