import { Greeter} from "./greeter";
const promptly = require('promptly');

export class JavascriptGreeter extends Greeter {

    greet(name:string){
        return `console.log(Hello My Friend ${name})`
    }
}

export let greetFriend: Greeter = new JavascriptGreeter('John')

export let greetJohn:string = greetFriend.greet('John');

(async () => {
    const name = await promptly.prompt('Name: ');
    console.log(greetFriend.greet(name));
})();


