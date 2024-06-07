const filterUnchanged = (diffObject) => Object.keys(diffObject).filter((key) => key.includes('__added')
  || key.includes('__deleted')
  || typeof diffObject[key] === 'object');

const makeStringArray = (diffObject) => filterUnchanged(diffObject).map((key) => {
  if (key.includes('__')) {
    if (key.split('__')[1] === 'added') return `Property '${key.split('__')[0]}' was added with value: ${diffObject[key]}`;
    if (key.split('__')[1] === 'deleted') return `Property '${key.split('__')[0]}' was removed`;
  }
  // eslint-disable-next-line no-underscore-dangle
  return `Property '${key}' was updated. From ${diffObject[key].__old} to ${diffObject[key].__new}`;
});
const format = (diffObject) => makeStringArray(diffObject).join('\n');

export default format;
