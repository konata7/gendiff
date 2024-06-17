const filterUnchanged = (diffObject) => Object.keys(diffObject).filter((key) => diffObject[key].type === 'added'
  || diffObject[key].type === 'deleted'
  || diffObject[key].type === 'updated');

const mapping = {
  added: (node, path) => `Property '${path}' was added with value: ${node.value}`,
  deleted: (node, path) => `Property '${path}' was removed`,
  updated: (node, path) => `Property '${path}' was updated. From ${node.old} to ${node.new}`,
  unchanged: (node, path) => '',
};

const makeStringArray = (diffObject) => filterUnchanged(diffObject).map((key) => {
  const node = diffObject[key];
  return mapping[node.type](diffObject[key], key);
});
const format = (diffObject) => makeStringArray(diffObject).join('\n');

export default format;
