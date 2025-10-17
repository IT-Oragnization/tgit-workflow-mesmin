// app.test.js:
const greet = require('./app.js');
test('should greet the world when no name is provided', () => {
  expect(greet()).toBe("Hello, world!");
});

test('should greet a specific name', () => {
  expect(greet('Glenn')).toBe("Hello, Glenn!");
});
