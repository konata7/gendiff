const mapping = {
  added: (node, path) => `  + ${path}: ${node.value}`,
  deleted: (node, path) => `  - ${path}: ${node.value}`,
  unchanged: (node, path) => `    ${path}: ${node.value}`,
  updated: (node, path) => `  - ${path}: ${node.old}\n  + ${path}: ${node.new}`,
};

const makeStringArray = (diffObject) => Object.keys(diffObject).map((key) => {
  if (diffObject[key].type === 'added') return mapping.added(diffObject[key], key);
  if (diffObject[key].type === 'deleted') return mapping.deleted(diffObject[key], key);
  if (diffObject[key].type === 'updated') return mapping.updated(diffObject[key], key);
  return mapping.unchanged(diffObject[key], key);
});
const format = (diffObject) => `{\n${makeStringArray(diffObject).join('\n')}\n}`;

export default format;
