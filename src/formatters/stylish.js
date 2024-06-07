const makeStringArray = (diffObject) => Object.keys(diffObject).map((key) => {
  if (key.includes('__')) {
    if (key.split('__')[1] === 'added') return `  + ${key.split('__')[0]}: ${diffObject[key]}`;
    if (key.split('__')[1] === 'deleted') return `  - ${key.split('__')[0]}: ${diffObject[key]}`;
  }

  // eslint-disable-next-line no-underscore-dangle
  if (typeof diffObject[key] === 'object') return `  - ${key}: ${diffObject[key].__old}\n  + ${key}: ${diffObject[key].__new}`;
  return `    ${key}: ${diffObject[key]}`;
});
const format = (diffObject) => `{\n${makeStringArray(diffObject).join('\n')}\n}`;

export default format;
