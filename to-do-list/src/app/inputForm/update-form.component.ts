import { Component } from '@angular/core';
import { GroceryItem } from '../models/groceryItem';
import { GroceryListService } from '../groceries/grocery-list.service';
import { GroceryListComponent } from '../groceries/grocery-list.component';

@Component({
    selector: 'update-form',
    template: `
        <div *ngIf = "displayUpdateForm">
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
            <button (click)="submitUpdate()">Submit Update</button>
            <p></p>
            <button (click)="cancelUpdate()">Cancel Update</button>
        </div>
    `
})

export class UpdateFormComponent {
    title = "Update form to modify item entry";
    // groceryList;
    displayUpdateForm: boolean = false;


    constructor() {
        // this.groceryList = groceryService.getGroceries();
    }

    toggleUpdateForm() {
        // console.log("Hello from UpdateFormComponent!");
        console.log("displayUpdateForm: ", this.displayUpdateForm);
        
        this.displayUpdateForm = false;
    }

    submitUpdate() {
        this.displayUpdateForm = false;    
    }

    cancelUpdate() {
        this.displayUpdateForm = false;
    }
    
}