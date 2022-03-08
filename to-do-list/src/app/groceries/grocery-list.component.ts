import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';

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
    toggleUpdateForm: boolean = false

    constructor(service: GroceryListService) {
        this.groceries = service.getGroceries();
    }

    // update item
    showUpdateForm() {
        this.toggleUpdateForm = true;
    }

    // delete item
    deleteInput(id: number) {
        this.groceries.splice(id, 1);
    }
}

