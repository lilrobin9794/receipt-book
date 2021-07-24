import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients(): Ingredient[]{
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]){
    Array.prototype.push.apply(this.ingredients, ingredients);
  }

  deleteIngredient(ingredient: Ingredient){
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }

  editIngredient(oldIngredient: Ingredient, newIngredient: Ingredient){
    this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;
  }
}
