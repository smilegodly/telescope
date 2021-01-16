/**
 * Turn <pre>...</pre><pre>...</pre> into one <pre>... ...</pre>
 */
function collapsePre(preElem) {
  console.log('\n collapsePre Function Called ! \n');
  if (!(preElem.innerText.length > 0)) {
    return;
  }
  while (preElem.nextSibling.nodeName === 'PRE') {
    preElem.append(`\n ${preElem.nextSibling.innerText}`);
    preElem.nextSibling.remove();
  }
  console.log('\n collapsePre Function Finished ! \n');
}
/**
 * Given a parsed JSDOM Object. find all <pre>...</pre><pre>...</pre> tags and collapse them
 * resulting in one big <pre>...</pre> element.
 */
module.exports = function (dom) {
  if (!(dom && dom.window && dom.window.document)) {
    console.log('\n collapsePre DOM not okay ! \n');
    return;
  }

  dom.window.document.querySelectorAll('pre').forEach((pre) => {
    console.log(`\n collapsePre inside querySelectorAll ! ${pre}\n`);
    if (pre.nextSibling.nodeName === 'PRE') {
      console.log('\n if statement started ! \n');
      collapsePre(pre);
    }
  });
};
