export function flatTree(tree, flatArr = []) {
  func(tree, flatArr);
  return flatArr;
}

function func(tree, arr) {
  if (!tree.length) return;
  Array.prototype.push.apply(arr, tree);
  tree.map(item => (item.children && item.children.length) && func(item.children, arr));
}
