import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';

@Component({
    selector: 'grocery-list',
    template: `
        <h2>Grocery List</h2>
        <ul *ngFor="let grocery of groceries">
            <h3>{{ grocery.item }}</h3>
            <p>{{ grocery.quantity }}</p>
        </ul>
    `
})

export class GroceryListComponent {
    title = "List of groceries";
    groceries;

    constructor(service: GroceryListService) {
        this.groceries = service.getGroceries();
    }
}