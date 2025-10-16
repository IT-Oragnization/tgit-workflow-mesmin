// app.js:
function greet(name) {
    if (!name) {
        return "Hello, world!";
    }

    return `Hello, ${name.toUpperCase()}!`;
}

module.exports = greet;