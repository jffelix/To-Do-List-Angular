import { Component } from '@angular/core';
import { GroceryListService } from '../groceries/grocery-list.service';

// #itemName is the id
  // (keyup) attribute is the event listener when typing
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
            placeholder="ex: oranges"
        />
        <p>Quantity</p>
        <input 
            type="text" 
            #itemQuantity
            placeholder="ex: 3"
        />
        <p></p>
        <button (click)="submitInput(itemName.value, itemQuantity.value)">Submit</button>
    `
})

// method parameters need to define param type
  // name: string, quantity: string

export class InputFormComponent {
    title = "Input form to add item";

    constructor(private groceryService: GroceryListService) {
    }

    // console.log name input
    getNameInput(name: string) {
        console.log("name: ", name);
    }

    // console.log quantity input
    getQuantityInput(quantity: string) {
        console.log("quantity: ", quantity);
    }

    submitInput(name: string, quantity: string) {

        if (name.length === 0 || quantity.length === 0) {
            alert("Please fill in both fields.");
            return;
        }

        this.groceryService.addInput(name, quantity);
    }
}