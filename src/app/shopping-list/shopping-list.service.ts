import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [
    new Ingredient("banana", 5), new Ingredient("tomato", 3)
  ];

  getIngredients() {
      return this.ingredients.slice();
  };

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients (ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}