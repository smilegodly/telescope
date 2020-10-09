const entities = require('entities');

module.exports = function (dom) {
  if (!(dom && dom.window && dom.window.document)) {
    return;
  }

  dom.window.document.querySelectorAll('h1.MuiTypography-h1').forEach((h1Tag) => {
    h1Tag.outerHTML = entities.decodeHTML(h1Tag.outerHTML);
  });
};
