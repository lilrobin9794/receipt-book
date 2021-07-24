import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: [
  ]
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  isAdding: boolean;
  @Output() cleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any){
    if(changes.selectedIngredient.currentValue == null){
      this.selectedIngredient = {name: "", amount: 0};
      this.isAdding = true;
    }else{
      this.isAdding = false;
    }
  }

  onSubmit(form: NgForm){
    const newIngredient: Ingredient = new Ingredient(form.value.name, form.value.amount);
    if(this.isAdding){
      // Neu
      this.shoppingListService.addIngredient(newIngredient);
    }else{
      this.shoppingListService.editIngredient(this.selectedIngredient, newIngredient);
    }
    this.onClear(form);
  }

  onClear(form: NgForm){
    form.resetForm();
    this.cleared.emit();
  }

  onDelete(form: NgForm){
    this.shoppingListService.deleteIngredient(this.selectedIngredient);
    this.onClear(form);
  }

}
