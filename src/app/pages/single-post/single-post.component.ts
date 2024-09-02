import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit {
  post: any;
  postId: any;
  similarPostArray: Array<object>=[];
  constructor(private activatedRoute:ActivatedRoute,private postService:PostService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      console.log(val['id'])
      this.postId = val['id']
      this.postService.countViews(this.postId)
      this.postService.loadSinglePost(val['id']).subscribe((post)=>{
        this.post = post
        console.log(post)
        this.loadSimilarPost(this.post.category.categoryId)
      })
    })
    
  }
 loadSimilarPost(id:any){
  this.postService.loadSimilar(id).subscribe(val=>{
    this.similarPostArray = val
  })
 }


}
