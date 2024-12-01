// Variat 1:
function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2
  );
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// Variant 2:

function getElementWidth(content, padding, border) {
  const contentFullWidth = Number.parseFloat(content);
  const paddingFullWidth = Number.parseFloat(padding) * 2;
  const borderFullWidth = Number.parseFloat(border) * 2;
  return contentFullWidth + paddingFullWidth + borderFullWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
