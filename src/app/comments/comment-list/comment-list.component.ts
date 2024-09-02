import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent implements OnInit{
  Commentarray: any[]=[];
  constructor(private comment:CommentService){}
  ngOnInit(): void {
    this.comment.loadData().subscribe(val=>{
      this.Commentarray = val
    })
  }

}
