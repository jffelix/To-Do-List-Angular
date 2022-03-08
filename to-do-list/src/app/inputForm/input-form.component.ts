import { Component } from '@angular/core';

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
        <button (click)="addItem(itemName.value, itemQuantity.value)">Submit</button>
    `
})

export class InputFormComponent {
    title = "Input form to add item";
    displayName=""

    getNameInput(name: string) {
        console.log("name: ", name);
    }

    getQuantityInput(quantity: string) {
        console.log("quantity: ", quantity);
    }

    addItem(name: string, quantity: string) {
        alert("Name: " + name + ", " + "Quantity: " + quantity);
    }
}