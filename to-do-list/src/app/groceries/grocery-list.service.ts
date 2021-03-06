import { GroceryItem } from '../models/groceryItem';

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

    updateInput(index: number, name: string, quantity: string) {
        const updateObj = {
            item: name,
            quantity: Number(quantity)
        }
        
        this.groceryList[index] = updateObj;
    }
}

