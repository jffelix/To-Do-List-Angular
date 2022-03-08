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
    toggleUpdateForm: boolean = true;

    constructor(service: GroceryListService) {
        this.groceries = service.getGroceries();
    }

    // update item
    showUpdateForm() {
        // this.updateForm.toggleUpdateForm();
    }

    // delete item
    deleteInput(id: number) {
        this.groceries.splice(id, 1);
    }
}

