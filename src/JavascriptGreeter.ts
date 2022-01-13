import { Greeter} from "./greeter";

export class JavascriptGreeter extends Greeter {

    greet(name:string){
        return `console.log(Hello My Friend ${name})`
    }
}

export let greetFriend: Greeter = new JavascriptGreeter('John')

export let greetJohn:string = greetFriend.greet('John')

