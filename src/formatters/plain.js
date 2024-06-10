const filterUnchanged = (diffObject) => Object.keys(diffObject).filter((key) => diffObject[key].type === 'added'
  || diffObject[key].type === 'deleted'
  || diffObject[key].type === 'updated');

const mapping = {
  added: (node, path) => `Property '${path}' was added with value: ${node.value}`,
  deleted: (node, path) => `Property '${path}' was removed`,
  updated: (node, path) => `Property '${path}' was updated. From ${node.old} to ${node.new}`,
};

const makeStringArray = (diffObject) => filterUnchanged(diffObject).map((key) => {
  if (diffObject[key].type === 'added') return mapping.added(diffObject[key], key);
  if (diffObject[key].type === 'deleted') return mapping.deleted(diffObject[key], key);

  // eslint-disable-next-line no-underscore-dangle
  return mapping.updated(diffObject[key], key);
});
const format = (diffObject) => makeStringArray(diffObject).join('\n');

export default format;
