import { Component } from '@angular/core';
import { GroceryItem } from '../models/groceryItem';
import { GroceryListService } from '../groceries/grocery-list.service';
import { GroceryListComponent } from '../groceries/grocery-list.component';

@Component({
    selector: 'update-form',
    template: `
        <div *ngIf="displayUpdateForm">
            <h3>Update selected item</h3>
            <p>Name</p>
                <input 
                    type="text"
                    #updateName
                    placeholder="update new name"
                />
            <p>Quantity</p>
                <input 
                    type="text"
                    #updateQuantity
                    placeholder="update new quantity"
                />
            <p></p>
            <button>Submit Update</button>
            <p></p>
            <button>Cancel Update</button>
        </div>
    `
})

export class UpdateFormComponent {
    title = "Update form to modify item entry";
    // groceryList;
    displayUpdateForm: boolean = false;


    constructor(private groceryService: GroceryListService, groceryList: GroceryListComponent) {
        // this.groceryList = groceryService.getGroceries();
        // this.displayUpdateForm = groceryList.showUpdateForm();
    }

    toggleUpdateForm() {
        this.displayUpdateForm = true;
    }
    // create toggle method to change toggleUpdateForm to true
    // add toggle method to Cancel Update button
}