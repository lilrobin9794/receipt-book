import { RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";

const SHOPPING_LIST_ROUTES = [
  { path: "", component: ShoppingListComponent }
]

export const SHOPPING_LIST_ROUTING = RouterModule.forChild(SHOPPING_LIST_ROUTES);