const entities = require('entities');

function decode(codeElement) {
  // decode twice for double encoded html entities
  const result = entities.decodeHTML(codeElement.innerHTML);
  return entities.decodeHTML(result);
}

module.exports = function (dom) {
  if (!(dom && dom.window && dom.window.document)) {
    return;
  }

  let fixedTitle = {};

  dom.window.document.querySelectorAll('h1').forEach((h1Tag) => {
    fixedTitle = decode(h1Tag);
    console.log(fixedTitle);
    h1Tag.innerHTML = fixedTitle;
    h1Tag.title = fixedTitle;
  });
};
