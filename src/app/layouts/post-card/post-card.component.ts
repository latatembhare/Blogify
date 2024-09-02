import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent implements OnInit{
  @Input('postCard')
  postCard!: any; 

 ngOnInit(): void {
   console.log(this.postCard)
 }
}
