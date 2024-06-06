import stylishFormat from './stylish.js';
import plainFormat from './plain.js';
import jsonFormat from './json.js';

const format = (diffObject, formatName = 'default') => {
  if (formatName === 'plain') return plainFormat(diffObject);
  if (formatName === 'json') return jsonFormat(diffObject);
  return stylishFormat(diffObject);
};

export default format;
