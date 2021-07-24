import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeComponent } from "./recipe.component";

const RECIPE_ROUTES = [
  { path: "", component: RecipeComponent, children: [
    { path: "", component: RecipeStartComponent },
    { path: "new", component: RecipeEditComponent },
    { path: ":id", component: RecipeDetailComponent },
    { path: ":id/edit", component: RecipeEditComponent }
  ]}
];

export const RECIPE_ROUTING = RouterModule.forChild(RECIPE_ROUTES);