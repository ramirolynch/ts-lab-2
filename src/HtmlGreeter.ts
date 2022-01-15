
import { Greeter} from "./greeter";
const promptly = require('promptly');

export class HtmlGreeter extends Greeter {

    tagName:string = 'h1';

    constructor(greeting:string, tagName:string) {

        super(greeting)
        this.tagName = tagName
    }

    greet(name:string):string {
     

        return `<${this.tagName}>${this.greeting}, ${name}</${this.tagName}>`
}
}

let firstGreet = new HtmlGreeter('hello my friend', 'h3')

export let greetRami = firstGreet.greet('Rocky')
export let greetAnton = firstGreet.greet('Anton')

console.log(greetRami);

(async () => {
    const name = await promptly.prompt('Name: ');
    console.log(firstGreet.greet(name));
})();





