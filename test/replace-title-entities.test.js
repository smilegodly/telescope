const toDOM = require('../src/backend/utils/html/dom');
const replaceEntityInTitle = require('../src/backend/utils/html/replace-title-entities');

function decodeTitles(title) {
  const dom = toDOM(title);
  replaceEntityInTitle(dom);
  return dom.window.document.querySelectorAll('h1.MuiTypography-h1');
}

test('No html entities in title, title should not be changed', () => {
  const original =
    '<h1 class="MuiTypography-root jss26 MuiTypography-h1" title="About Myself &amp; Why I Chose This Course" id="66f0fd529b">About Myself &amp; Why I Chose This Course</h1>';
  const data = decodeTitles(original);
  expect(data[0].outerHTML).toBe(original);
});

test('The value returned by decodeTitles() is of type object', () => {
  const original =
    '<h1 class="MuiTypography-root jss290 MuiTypography-h1" title="Hello World"> Hello World </h1>';
  const data = decodeTitles(original);
  expect(typeof data).toBe('object');
});

test('Double encoded ampersand html entities should be properly singly encoded', () => {
  const original =
    '<h1 class="MuiTypography-root jss26 MuiTypography-h1" title="About Myself &amp;amp; Why I Chose This Course" id="66f0fd529b">About Myself &amp;amp; Why I Chose This Course</h1>';
  const properEncoding =
    '<h1 class="MuiTypography-root jss26 MuiTypography-h1" title="About Myself &amp; Why I Chose This Course" id="66f0fd529b">About Myself &amp; Why I Chose This Course</h1>';
  const data = decodeTitles(original);
  expect(data[0].outerHTML).toBe(properEncoding);
});

test('Double encoded greater than html entities from the title should be singly encoded', () => {
  const original =
    '<h1 class="MuiTypography-root jss26 MuiTypography-h1" title="About Myself &amp;gt; Why I Chose This Course" id="66f0fd529b">About Myself &amp;gt; Why I Chose This Course</h1>';
  const properEncoding =
    '<h1 class="MuiTypography-root jss26 MuiTypography-h1" title="About Myself > Why I Chose This Course" id="66f0fd529b">About Myself &gt; Why I Chose This Course</h1>';
  const data = decodeTitles(original);
  expect(data[0].outerHTML).toBe(properEncoding);
});

test('Double encoded less than html entities from the title should be singly encoded', () => {
  const original =
    '<h1 class="MuiTypography-root jss26 MuiTypography-h1" title="About Myself &amp;lt; Why I Chose This Course" id="66f0fd529b">About Myself &amp;lt; Why I Chose This Course</h1>';
  const properEncoding =
    '<h1 class="MuiTypography-root jss26 MuiTypography-h1" title="About Myself < Why I Chose This Course" id="66f0fd529b">About Myself &lt; Why I Chose This Course</h1>';
  const data = decodeTitles(original);
  expect(data[0].outerHTML).toBe(properEncoding);
});
