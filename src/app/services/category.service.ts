import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url="http://localhost:3000/category";

  constructor(private http:HttpClient) {}

  getCategories(){
    return this.http.get<any>(this.url)
  }

  addCategory(data:any){
    return this.http.post<any>(this.url,data)
  }

  deleteCategory(id:string){
    return this.http.delete<any>(this.url+"/"+id)
  }

} 
  
  