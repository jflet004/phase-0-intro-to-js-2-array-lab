// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
    cats.push(catName);
}
function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
 // adds a cat to a new array and returns it
function appendCat(catName) {
    const endCats = [...cats, catName];
    return endCats;
}

function prependCat(catName) {
    const firstCats = [catName, ...cats];
    return firstCats;
}

function removeLastCat() {
    const lastCat = cats.slice(0, -1);
    return lastCat;
}

function removeFirstCat() {
    const firstCat = cats.slice(1);
    return firstCat;
}