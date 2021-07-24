import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "recipes", loadChildren: () => import(`./recipe/recipe.module`).then(module => module.RecipeModule) },  
  { path: "shopping-list", loadChildren: () => import(`./shopping-list/shopping-list.module`).then(module => module.ShoppingListModule) }  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
