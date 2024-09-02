import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.scss'
})
export class CategoryNavbarComponent implements OnInit {
  constructor(private categoryService:CategoriesService){}
  categoryArr:any[]=[]
  ngOnInit(): void {
    this.categoryService.loadData().subscribe((val)=>{
      this.categoryArr = val
      console.log(this.categoryArr)
    })
  }

}
