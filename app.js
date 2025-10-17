// app.js:
function greet(name) {
    if (!name) {
        return "Hello, world!";
    }
    // La nouvelle fonctionnalité : salutation personnalisée en majuscule
    return `Hello, ${name.toUpperCase()}!`;
}
module.exports = greet;
