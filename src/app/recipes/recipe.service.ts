import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
    new Recipe('A test', "desc", 'https://www.google.com.ua/search?q=recipe&client=opera&hs=Y4P&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZlo2Ig4PUAhXsJ5oKHZAwDm8Q_AUICigB&biw=1366&bih=658#imgrc=TNc-ZvDRzJVP9M:'),
    new Recipe('A test', "desc", 'https://www.google.com.ua/search?q=recipe&client=opera&hs=Y4P&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZlo2Ig4PUAhXsJ5oKHZAwDm8Q_AUICigB&biw=1366&bih=658#imgrc=TNc-ZvDRzJVP9M:')
  ];


  getRecipes(){

  }
}