import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  latestPostArr: Array<object> = [];
isLoading:boolean = false;
  constructor(private postService:PostService){}
  featuredPostArr:any[]=[]
  ngOnInit(): void {
    this.postService.loadFeatured().subscribe((val)=>{
      console.log(val)
      this.featuredPostArr = val
      this.isLoading=true
    })
    this.postService.loadLatest().subscribe((val)=>{
      this.latestPostArr = val
    })
    
  }
}
