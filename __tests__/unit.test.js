// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// DONE - Part 2

test('Test isPhoneNumber with valid input', () => {
  expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('Test isPhoneNumber with valid input', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Test isPhoneNumber with invalid input', () => {
  expect(functions.isPhoneNumber('(123)-456-789')).toBe(false);
});

test('Test isPhoneNumber with invalid input', () => {
  expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('Test isEmail with valid input', () => {
  expect(functions.isEmail('example@hotmail.com')).toBe(true);
});

test('Test isEmail with valid input', () => {
  expect(functions.isEmail('example@hotmail.co')).toBe(true);
});

test('Test isEmail with invalid input', () => {
  expect(functions.isEmail('example@hotmail')).toBe(false);
});

test('Test isEmail with invalid input', () => {
  expect(functions.isEmail('@hotmail.com')).toBe(false);
});

test('Test isStrongPassword with valid input', () => {
  expect(functions.isStrongPassword('Password1')).toBe(true);
});

test('Test isStrongPassword with valid input', () => {
  expect(functions.isStrongPassword('Password123')).toBe(true);
});

test('Test isStrongPassword with invalid input', () => {
  expect(functions.isStrongPassword('passwordpassword')).toBe(false);
});

test('Test isStrongPassword with invalid input', () => {
  expect(functions.isStrongPassword('aa')).toBe(false);
});

test('Test isDate with valid input', () => {
  expect(functions.isDate('12/12/2012')).toBe(true);
});

test('Test isDate with valid input', () => {
  expect(functions.isDate('1/1/2012')).toBe(true);
});

test('Test isDate with invalid input', () => {
  expect(functions.isDate('12/12/12')).toBe(false);
});

test('Test isDate with invalid input', () => {
  expect(functions.isDate('12/12/2012/')).toBe(false);
});

test('Test isHexColor with valid input', () => {
  expect(functions.isHexColor('#000000')).toBe(true);
});

test('Test isHexColor with valid input', () => {
  expect(functions.isHexColor('000')).toBe(true);
});

test('Test isHexColor with invalid input', () => {
  expect(functions.isHexColor('00000g')).toBe(false);
});

test('Test isHexColor with invalid input', () => {
  expect(functions.isHexColor('#0000000')).toBe(false);
});

