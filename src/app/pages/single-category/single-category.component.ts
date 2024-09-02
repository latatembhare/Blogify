import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.scss'
})
export class SingleCategoryComponent implements OnInit {
  postArray: Array<object>=[];
  categoryObj: any;
 constructor(private activatedRoute:ActivatedRoute,private postservice:PostService){}
 categoryId = Array<object>
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val=>{
      this.categoryObj = val
      console.log(this.categoryObj)
      this.categoryId = val['id']
      console.log(this.categoryId)
      this.postservice.loadCategory(this.categoryId).subscribe((post)=>{
        this.postArray = post
      })
    }))
  }
}
