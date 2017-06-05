import { Component, OnInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
 @ViewChild('f') slForm: NgForm;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  subscription: Subscription;
  editMode = false;
  editingIndexItem: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) =>{
          this.editingIndexItem = index;
          this.editMode = false;
          this.editedIngredient = this.shoppingListService.getIngerdient(index);
          this.slForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          })
        }
      )
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onSubmit(form: NgForm){
    //const ingName = this.nameInputRef.nativeElement.value;
    //const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
     if(this.editMode){
      this.shoppingListService.updateIngredient(this.editingIndexItem, newIngredient);
    } else{
       this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
   
    
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editingIndexItem);
    this.onClear();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

}
