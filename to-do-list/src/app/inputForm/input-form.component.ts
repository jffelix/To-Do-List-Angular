import { Component } from '@angular/core';
import { GroceryListComponent } from '../groceries/grocery-list.component';

// #itemName is the id
  // (keyup) is the event listener when typing
    // (keyup)="getNameInput(itemName.value)"
  // itemName.value is what you type in the input field
// remember to label different id's for each input

@Component({
    selector: 'input-form',
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
        <button (click)="submitInput(itemName.value, itemQuantity.value)">Submit</button>
    `
})

// method parameters need to define param type
  // name: string, quantity: string

export class InputFormComponent {
    title = "Input form to add item";
    groceryName;
    groceryQuantity;

    constructor() {
        this.groceryName = "";
        this.groceryQuantity = "";
    }

    getNameInput(name: string) {
        console.log("name: ", name);
    }

    getQuantityInput(quantity: string) {
        console.log("quantity: ", quantity);
    }

    submitInput(name: string, quantity: string) {
        this.groceryName = name;
        this.groceryQuantity = quantity;

        const itemObj = {
            name: this.groceryName,
            quantity: this.groceryQuantity
        }

        console.log("itemObj: ", itemObj);
    }
}