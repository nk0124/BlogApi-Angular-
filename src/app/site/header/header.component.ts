import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
     categoryData:any;
   constructor(private cs:CategoryService){
       this.cs.getCategories().subscribe(res=>{
         this.categoryData=res;
      //   console.log(this.categoryData)
       })

   }
}
