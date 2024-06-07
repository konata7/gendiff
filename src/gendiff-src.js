import _ from 'lodash';
import fs from 'fs';
import path from 'node:path';
import format from './formatters/index.js';
import parse from './parsers.js';

const makeDiffObject = (obj1, obj2) => {
  const diffObject = {};

  const uniqKeys = _.sortBy(_.uniq(Object.keys(obj1).concat(Object.keys(obj2))));
  uniqKeys.forEach((key) => {
    if (obj1[key] === undefined) {
      diffObject[`${key}__added`] = obj2[key];
    } else if (obj2[key] === undefined) {
      diffObject[`${key}__deleted`] = obj1[key];
    } else if (obj1[key] === obj2[key]) {
      diffObject[`${key}`] = obj2[key];
    } else {
      diffObject[`${key}`] = { __old: obj1[key], __new: obj2[key] };
    }
  });
  return diffObject;
};
const genDiff = (filepath1, filepath2, outputFormat) => {
  const file1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
  const file1Format = path.extname(filepath1);
  const file2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');
  const file2Format = path.extname(filepath2);

  const obj1 = parse(file1, file1Format);
  const obj2 = parse(file2, file2Format);

  const diffObject = makeDiffObject(obj1, obj2);
  return format(diffObject, outputFormat);
};

export default genDiff;
