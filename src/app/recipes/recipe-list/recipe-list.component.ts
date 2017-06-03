import { Component, OnInit} from '@angular/core';
import { Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test', "desc", 'https://www.google.com.ua/search?q=recipe&client=opera&hs=Y4P&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZlo2Ig4PUAhXsJ5oKHZAwDm8Q_AUICigB&biw=1366&bih=658#imgrc=TNc-ZvDRzJVP9M:',
    [new Ingredient("tomato" , 3), new Ingredient("tomato" , 3)
    ]),
    new Recipe('A test', "desc", 'https://www.google.com.ua/search?q=recipe&client=opera&hs=Y4P&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZlo2Ig4PUAhXsJ5oKHZAwDm8Q_AUICigB&biw=1366&bih=658#imgrc=TNc-ZvDRzJVP9M:'
  , [new Ingredient("kokos" , 3), new Ingredient("tomato" , 3)]
  )];

  constructor(private router: Router, private route:  ActivatedRoute) { }

  ngOnInit() {
  };
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
