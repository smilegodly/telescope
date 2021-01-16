const toDOM = require('../src/backend/utils/html/dom');
const collapsePre = require('../src/backend/utils/html/collapse-pre');

function collapseDoublePre(htmlData) {
  const dom = toDOM(htmlData);
  collapsePre(dom);
  return dom.window.document.body.innerHTML;
}

test('Double pre tags get collapsed into one', () => {
  const doublePre = `
    <pre>console.log(hello world);</pre>
    <pre>console.log(hello world);</pre>`;

  const collapsed = `
    <pre>console.log(hello world);
    console.log(hello world);</pre>;`;

  const data = collapseDoublePre(doublePre);
  expect(data).toBe(collapsed);
});
