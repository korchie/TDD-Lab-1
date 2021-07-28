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

test("Bowser translates to owserbay", () => {
    expect(pigLatin("Bowser")).toBe("owserbay");
})

test("Pikachu translates to ikachupay", () => {
    expect(pigLatin("Pikachu")).toBe("ikachupay");
})

test("Precious translates to eciouspray", () => {
    expect(pigLatin("Precious")).toBe("eciouspray");
})

test("Bulbasaur translates to ulbasaurbay", () => {
    expect(pigLatin("Bulbasaur")).toBe("ulbasaurbay");
})

test("Charmander translates to armanderchay", () => {
    expect(pigLatin("Charmander")).toBe("armanderchay");
})

test("EeVeE translates to eeveeway", () => {
    expect(pigLatin("EeVeE")).toBe("eeveeway");
})

test("SpOnGeBoB translates to ongebobspay", () => {
    expect(pigLatin("SpOnGeBoB")).toBe("ongebobspay");
})

test("Onix translayes to onixway", () => {
    expect(pigLatin("Onix")).toBe("onixway");
})

test("Aipom translates to aipomway", () => {
    expect(pigLatin("Aipom")).toBe("aipomway");
})

test("Abra translates to abraway", () => {
    expect(pigLatin("Abra")).toBe("abraway");
})