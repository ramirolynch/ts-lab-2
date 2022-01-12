
export interface Product {
    name:string;
    price:number;
}

let products:Product[] = [ {name:'iPhone', price:1000},{name:'Google Pixel', price:700}, {name:'Motorola Razor', price:150}, {name: 'Erickson Phone', price: 200}]


export function calcAverageProductPrice(arr:Product[]):number {

    let total:number = 0;

    if (arr.length === 0) {
        return total;
    }
    else {
        for (let i=0;i<arr.length;i++) {

            total += arr[i].price

        }

        return total / arr.length;

    }

}

let averagePrice:number = calcAverageProductPrice(products)

console.log(averagePrice)