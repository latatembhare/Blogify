import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent implements OnInit {
  @ViewChild('commentForm') commentForm: NgForm | any;

  constructor(private comment:CommentService){}
  ngOnInit(): void {
    this.comment.loadData().subscribe(val=>console.log(val))
  }
  subitComment(){
    let commentData= {
      name: this.commentForm.value.name ||null,
      comment:this.commentForm.value.comment ||null
    };
    console.log(commentData)
    this.comment.saveData(commentData)
  }
}
