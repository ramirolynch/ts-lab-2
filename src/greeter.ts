const promptly = require('promptly');

import chalk from 'chalk';


export class Greeter  {
    greeting: string;
    constructor(greeting:string) {
        this.greeting = greeting;
    }
    greet(name:string) {
        return `${this.greeting}, ${name}!`
    }
}

let greetPerson: Greeter = new Greeter('How you doing?');


export let greetMike: string = greetPerson.greet('Mike')

export let greetBoss: Greeter = new Greeter('Top of the morning');

console.log(greetPerson.greet('Rami'))

console.log(greetPerson.greet('Mark'))

export let greetMrShickles: string = greetBoss.greet('Mr. Shickles');


(async () => {
    const name = await promptly.prompt('Name: ');
    console.log(greetPerson.greet(name));
})();





