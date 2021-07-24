import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: [
  ]
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeIndex: number;
  private subscription: Subscription;
  private isNew: boolean = true;
  private recipe: Recipe;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        if(params.hasOwnProperty("id")){
          this.isNew = false;
          this.recipeIndex = +params["id"];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }else{
          this.isNew = true;
          this.recipe = null;
        }
      }
    )

    let recipeIngredients = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('ingredients')) {
        for (let ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': this.formBuilder.control(ingredient.name, Validators.required),
              'amount': this.formBuilder.control(ingredient.amount, Validators.required)
            })
          )
        }
      }
    }

    this.recipeForm = this.formBuilder.group({
      "name": [this.recipe?.name, Validators.required],
      "imagePath": [this.recipe?.imagePath, Validators.required],
      "description": [this.recipe?.description, Validators.required],
      "ingredients": recipeIngredients,
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  get ingredientsFormGroup(){
    return this.recipeForm.get("ingredients") as FormArray;
  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(this.isNew){
      this.recipeService.addRecipe(newRecipe);
    }else{
      this.recipeService.editRecipe(this.recipe, newRecipe);
    }
    this.navigateBack();
  }

  onCancel(){
    this.navigateBack();
  }

  private navigateBack(){
    this.router.navigate(["/"]);
  }

  onAddIngredient(name: string, amount: string){
    this.ingredientsFormGroup.push(this.formBuilder.group({
      "name": [name, Validators.required],
      "amount": [amount, Validators.required]
    }));
  }

  onRemoveIngredient(index: number){
    this.ingredientsFormGroup.removeAt(index);
  }

}
