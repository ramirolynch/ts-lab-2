import { greetMrShickles, greetMike, greetBoss } from "../src/greeter";

test("greet Mr. Shickles", () => { expect(greetMrShickles).toBe('Top of the morning, Mr. Shickles!')});

test("greet Mike", () => { expect(greetMike).toBe('How you doing?, Mike!')});

test("greet Terry", () => { expect(greetBoss.greet('Terry')).toBe('Top of the morning, Terry!')});