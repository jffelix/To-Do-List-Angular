import { Component } from '@angular/core';
import { GroceryListService } from './grocery-list.service';

@Component({
    selector: 'grocery-list',
    template: `

        <h3>Add new item</h3>
        <p>Name</p>
        <input 
            type="text" 
            #itemName
            (keyup)="getNameInput(itemName.value)"
            placeholder="ex: oranges"
        />
        <p>Quantity</p>
        <input 
            type="text" 
            #itemQuantity
            (keyup)="getQuantityInput(itemQuantity.value)"
            placeholder="ex: 3"
        />
        <button (click)="addInput(itemName.value, itemQuantity.value)">Submit</button>

        <h2>Grocery List</h2>
        <div *ngFor="let grocery of groceries; let i = index">
            <h3>{{ grocery.item }}</h3>
            <p>{{ grocery.quantity }}</p>
            <button>Update</button>
            <button (click)="deleteInput(i)">Delete</button>
        </div>
    `
})

export class GroceryListComponent {
    title = "List of groceries";
    groceries;

    groceryName;
    groceryQuantity;

    constructor(service: GroceryListService) {
        this.groceryName = "";
        this.groceryQuantity = "";

        this.groceries = service.getGroceries();
    }

    getNameInput(name: string) {
        console.log("name: ", name);
    }

    getQuantityInput(quantity: string) {
        console.log("quantity: ", quantity);
    }

    addInput(name: string, quantity: string) {
        const itemObj = {
            item: name,
            quantity: Number(quantity)
        }

        this.groceries.push(itemObj);
    }

    deleteInput(id: number) {
        console.log("id: " + id);
    }
}




// // BACKUP CODE

// import { Component } from '@angular/core';
// import { GroceryListService } from './grocery-list.service';

// @Component({
//     selector: 'grocery-list',
//     template: `
//         <h2>Grocery List</h2>
//         <ul *ngFor="let grocery of groceries">
//             <h3>{{ grocery.item }}</h3>
//             <p>{{ grocery.quantity }}</p>
//             <button>Update</button>
//             <button>Delete</button>
//         </ul>
//     `
// })

// export class GroceryListComponent {
//     title = "List of groceries";
//     groceries;

//     constructor(service: GroceryListService) {
//         this.groceries = service.getGroceries();
//     }

//     addItem(name: string, quantity: string) {
//         const itemObj = {
//             name: name,
//             quantity: quantity
//         }

//         // this.groceries.push(itemObj);
//     }
// }