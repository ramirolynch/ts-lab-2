import { MaxRedirectsError } from "got/dist/source";

export interface Mountain {
    name: string;
    height: number;
}

const mountains : Mountain[] = [{name:'Kilimanjaro', height:19341}, {name:'Everest', height: 29029}, {name:'Denali', height:20310}]

export function findNameOfTallestMountain (arr:Mountain[]):string {

    let tallest = ''

    if (arr.length === 0) {
        return tallest;
    }

    else {
        let highest:number = 0;

        for (let i=0; i<arr.length; i++) {

            if(arr[i].height > highest) {
                highest = arr[i].height
                tallest = arr[i].name
            }   
        }   
     return tallest;
    }
}


let tallestMountain:string = findNameOfTallestMountain(mountains)

console.log(tallestMountain)