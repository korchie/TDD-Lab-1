const { test, expect } = require("@jest/globals");
const pigLatin = require("./script");

// tests for starting with vowels
test("apple translates appleway", () => {
    expect(pigLatin("apple")).toBe("appleway");
})

test("eagle translates to eagleway", () => {
    expect(pigLatin("eagle")).toBe("eagleway");
})

test("orange translates to orangeway", () => {
    expect(pigLatin("orange")).toBe("orangeway");
})

// tests for starting with consonants
test("banana translates to ananabay", () => {
    expect(pigLatin("banana")).toBe("ananabay");
})

test("cat translates to atcay", () => {
    expect(pigLatin("cat")).toBe("atcay");
})

test("psychology translates to ologypsychay", () => {
    expect(pigLatin("psychology")).toBe("ologypsychay");
})