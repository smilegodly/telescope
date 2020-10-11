const entities = require('entities');

function decode(codeElement) {
  // decode twice for double encoded html entities
  const result = entities.decodeHTML(codeElement);
  return entities.decodeHTML(result);
}

module.exports = function (dom) {
  if (!(dom && dom.window && dom.window.document)) {
    return;
  }
  let fixedTitle = {};

  dom.window.document.querySelectorAll('h1.MuiTypography-h1').forEach((h1Tag) => {
    fixedTitle = decode(h1Tag.outerHTML);
    h1Tag.outerHTML = fixedTitle;
  });
};
