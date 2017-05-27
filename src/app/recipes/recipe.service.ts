import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
    new Recipe('A test', "desc", 
    'https://www.google.com.ua/search?q=recipe&client=opera&hs=Y4P&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZlo2Ig4PUAhXsJ5oKHZAwDm8Q_AUICigB&biw=1366&bih=658#imgrc=TNc-ZvDRzJVP9M:'
    ,[new Ingredient('tomato', 3), new Ingredient('meat', 2)]),
    new Recipe('A test', "desc", 
    'https://www.google.com.ua/search?q=recipe&client=opera&hs=Y4P&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZlo2Ig4PUAhXsJ5oKHZAwDm8Q_AUICigB&biw=1366&bih=658#imgrc=TNc-ZvDRzJVP9M:'
    ,[new Ingredient('banana', 7), new Ingredient('meat', 4)])
  ];

  constructor(private shoppinglistService: ShoppingListService){}
  getRecipes(){

  }
   addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.shoppinglistService.addIngredients(ingredients);
   }
}