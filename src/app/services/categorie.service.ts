import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../classes/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  url="http://localhost:8080/categorie";
  constructor(private http:HttpClient) { }
  getCategories()
  {
    return this.http.get<Categorie[]>(this.url)
  }
  createCategorie(category:Categorie)
  {
    return this.http.post<Categorie>(this.url, category);
  }
  getCategorie(id:number)
  {
    return this.http.get<Categorie[]>(`${this.url}/${id}`)
  }
  deleteCategorie(id:number)
  {
    return this.http.delete<Categorie[]>(`${this.url}/${id}`)
  }
}
