import { greetJohn, greetFriend } from "../src/JavascriptGreeter";

test("greet John", () => { expect(greetJohn).toBe('console.log(Hello My Friend John)')});

test("greet John", () => { expect(greetFriend.greet('Roland')).toBe('console.log(Hello My Friend Roland)')});
