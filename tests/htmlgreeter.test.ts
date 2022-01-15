import { greetRami, greetAnton } from "../src/HtmlGreeter";

test("greet Rocky", () => { expect(greetRami).toBe('<h3>hello my friend, Rocky</h3>')});

test("greet Anton", () => { expect(greetAnton).toBe('<h3>hello my friend, Anton</h3>')});