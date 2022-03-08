import { GroceryItem } from '../models/groceryItem';
import { Injectable } from '@angular/core';

// Injectable({
//     providedIn: "root"
// });
export class GroceryListService {

    private groceryList: GroceryItem[] = [
        {
            item: "apples",
            quantity: 4
        },
        {
            item: "strawberries",
            quantity: 2
        },
        {
            item: "bananas",
            quantity: 5
        }
    ]

    getGroceries() {
        return this.groceryList;
    }

    addInput(name: string, quantity: string) {

        const itemObj = {
            item: name,
            quantity: Number(quantity)
        }
        this.groceryList.push(itemObj);
    }
}

