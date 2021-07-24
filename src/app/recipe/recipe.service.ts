import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Schnitzel",
              "Sehr lecker",
              "https://images.ichkoche.at/data/image/variations/496x384/1/wiener-schnitzel-breaded-viennese-escalope-img-2896.jpg",
              [
                new Ingredient("Pommes", 10),
                new Ingredient("Schnitzel", 1)
              ]),
    new Recipe("Salat", "Auch lecker", "https://www.gutekueche.at/storage/media/recipe/14516/resp/gemischter-salat___webp_639_426.webp",
              [
                new Ingredient("Eisbergsalat", 1),
                new Ingredient("Tomaten", 1)
              ])
  ];

  constructor(private httpClient: HttpClient){}
  
  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(id: number){
    this.recipes.splice(id, 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.httpClient.put("https://ng-http-9db98-default-rtdb.firebaseio.com/recipes.json", body, { headers: headers });
  }

  fetchData(){
    return this.httpClient.get<Recipe[]>("https://ng-http-9db98-default-rtdb.firebaseio.com/recipes.json").subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }
}
