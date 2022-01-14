
import { Greeter} from "./greeter";

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

console.log(greetRami)


