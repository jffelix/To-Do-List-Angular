import { Component } from '@angular/core';

@Component({
    selector: 'input-form',
    template: `
        <h3>Add new item</h3>
        <p>Name</p>
        <input 
            type="text" 
            #box
            (keyup)="getNameInput(box.value)"
            placeholder="ex: oranges"
        />
        <p>Quantity</p>
        <input 
            type="text" 
            #box
            (keyup)="getQuantityInput(box.value)"
            placeholder="ex: 3"
        />
        <button (click)="addItem()">Submit</button>
    `
})

export class InputFormComponent {
    title = "Input form to add item";

    getNameInput(name: string) {
        console.log("name: ", name);
    }

    getQuantityInput(quantity: string) {
        console.log("quantity: ", quantity);
    }

    addItem() {
        alert("You clicked the Submit button!");
    }
}