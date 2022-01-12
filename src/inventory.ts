import { Product } from "./products";

interface InventoryItem {
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [{product: {name:'motor', price:10}, quantity:10},{product: {name:'sensor', price:12.50}, quantity:4}, {product: {name:'LED', price:1.00}, quantity:20}]


export function calcInventoryValue (arr:InventoryItem[]):number {

    let total:number = 0;

    if (arr.length === 0) {

        return total;

    }

    else {

        for (let i=0; i<arr.length; i++) {

            total += arr[i].product.price * arr[i].quantity
        }
        return total;
    }
}

let totalInvetoryValue:number = calcInventoryValue(inventory)

console.log(totalInvetoryValue)


