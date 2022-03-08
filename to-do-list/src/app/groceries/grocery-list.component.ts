import { Component } from '@angular/core';
import { UpdateFormComponent } from '../inputForm/update-form.component';
import { GroceryListService } from './grocery-list.service';
import { Injectable } from '@angular/core';

// Injectable({
//     providedIn: "root"
// })
@Component({
    selector: 'grocery-list',
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

        <h2>Grocery List</h2>
        <div *ngFor="let grocery of groceries; let i = index;">
            <h3>{{ grocery.item }}</h3>
            <p>{{ grocery.quantity }}</p>
            <button (click)="showUpdateForm()">Update</button>
            <button (click)="deleteInput(i)">Delete</button>
        </div>
    `
})

export class GroceryListComponent {
    title = "List of groceries";
    groceries;
    displayUpdateForm: boolean = false;

    constructor(service: GroceryListService) {
        this.groceries = service.getGroceries();
    }

    // update item
    showUpdateForm() {
        // this.updateComponent.toggleUpdateForm();
        this.displayUpdateForm = true;
    }

    submitUpdate() {
        this.displayUpdateForm = false;    
    }

    cancelUpdate() {
        this.displayUpdateForm = false;
    }

    // delete item
    deleteInput(id: number) {
        this.groceries.splice(id, 1);
    }
}

