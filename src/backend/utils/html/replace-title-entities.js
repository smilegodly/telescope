const entities = require('entities');

module.exports = function (dom) {
  if (!(dom && dom.window && dom.window.document)) {
    return null;
  }

  dom.window.document.querySelectorAll('h1.MuiTypography-h1').forEach((h1Tag) => {
    h1Tag.title = entities.decodeHTML(h1Tag.title);
    h1Tag.innerHTML = h1Tag.title;
  });
};
