import { Component } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';
import { Categorie } from '../classes/categorie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Categorie[] = [];
  categorie:Categorie=new Categorie();
  constructor(private router: Router, private api:CategorieService)
  {

this.getCategories();

  }
  getCategories()
  {
    this.api.getCategories().subscribe((data)=>
    {
      this.categories=data;
      console.log("catégories disponible",this.categories)
    }
    )
  }
  addCategory()
  {
    this.api.createCategorie(this.categorie).subscribe(data=>
      {
        console.log("ajouté! ",data);
        //window.location.reload()
        this.getCategories();
        this.categorie=new Categorie();
      })
  }
  deleteCategory(category:any)
  {
    if(confirm("Vous voulez supprimer la catégorie "+category.category))
    {
      this.api.deleteCategorie(category.id).subscribe(data=>
        {
          console.log("deleted ");
          this.getCategories();
        })
    }

  }

}
