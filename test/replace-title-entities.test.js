const toDOM = require('../src/backend/utils/html/dom');
const replaceEntityInTitle = require('../src/backend/utils/html/replace-title-entities');

function decodeTitles(title) {
  const dom = toDOM(title);
  replaceEntityInTitle(dom);
  return dom.window.document.querySelectorAll('h1.MuiTypography-h1');
}

test('No html entities in title, title should not be changed', () => {
  const original =
    '<h1 class="MuiTypography-root jss290 MuiTypography-h1" title="Hello World"> Hello World </h1>';
  const data = decodeTitles(original);
  expect(data[0].outerHTML).toBe(original);
});

test('The value returned by decodeTitles() is of type object', () => {
  const original =
    '<h1 class="MuiTypography-root jss290 MuiTypography-h1" title="Hello World"> Hello World </h1>';
  const data = decodeTitles(original);
  expect(typeof data).toBe('object');
});

test('Titles with double encoding on html entities should be properly singly encoded', () => {
  const original =
    '<h1 class="MuiTypography-root jss290 MuiTypography-h1" title="Hello World"> Hello World &amp;amp; Hello World </h1>';
  const properEncoding =
    '<h1 class="MuiTypography-root jss290 MuiTypography-h1" title="Hello World"> Hello World &amp; Hello World </h1>';
  const data = decodeTitles(original);
  expect(data[0].outerHTML).toBe(properEncoding);
});

// test('Greater than html entities from the title should be decoded', () => {
//   const x = '';
//   //
// });

// test('Less than html entities from the title should be decoded', () => {
//   const x = '';
//   //
// });

// test('Multiple titles should be decoded', () => {
//   const x = '';
//   //
// });
