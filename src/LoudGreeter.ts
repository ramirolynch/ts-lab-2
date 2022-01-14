const promptly = require('promptly')

import { Greeter} from "./greeter";

export class LoudGreeter extends Greeter {

    private extra:string = '!';

    addVolume(): void {
        this.extra += '!';
    }

    greet(name:string):string{
        
        return super.greet(name) + `${this.extra}!`
    }
    
}

export let greetText = new LoudGreeter('Hello')

greetText.addVolume()

export let addVolume = greetText.greet('Rami')


console.log(addVolume);



(async () => {
    const name = await promptly.prompt('Name: ');
    console.log(greetText.greet(name));
})();














