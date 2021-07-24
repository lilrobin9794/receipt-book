import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [
  ]
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeId: number;
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params: Params) => { 
      this.recipeId = params["id"];
      this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddToList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(["/recipes", this.recipeId, "edit"]);
  }

  onDelete(){
    this.router.navigate(["/recipes"]);
    this.recipeService.deleteRecipe(this.recipeId);
  }

}
