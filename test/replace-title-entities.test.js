const toDOM = require('../src/backend/utils/html/dom');
const replaceEntity = require('../src/backend/utils/html/replace-title-entities');

function replaceEntityInTitle(title) {
  const dom = toDOM(title);
  return replaceEntity(dom);
}

test('No html entities in title should not be changed', () => {
  const x = '<h1> Hello World </h1>';
  const original = '<h1> Hello World </h1>';
  const data = replaceEntityInTitle(x);
  expect(data).toBe(original);
});

test('The value returned by replaceEntityInTitle() is of type array', () => {
  const x = '<h1> Hello World </h1>';
  const data = replaceEntityInTitle(x);
  expect(data.isArray()).toBe(true);
});

test('Ampersand html entities from the title should be decoded', () => {
  const x = '';
  //
});

test('Greater than html entities from the title should be decoded', () => {
  const x = '';
  //
});

test('Less than html entities from the title should be decoded', () => {
  const x = '';
  //
});

test('Multiple elements should be decoded', () => {
  const x = '';
  //
});
