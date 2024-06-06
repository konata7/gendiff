import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { expect, test } from '@jest/globals';
import genDiff from '../src/gendiff-src.js';
import parse from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('flat json', () => {
  const file1 = readFile('flat1.json');
  const file2 = readFile('flat2.json');
  const obj1 = JSON.parse(file1);
  const obj2 = JSON.parse(file2);

  expect(genDiff(obj1, obj2)).toEqual(
    `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`,
  );
});
test('flat yaml', () => {
  const file1 = readFile('flat1.yaml');
  const file2 = readFile('flat2.yml');
  const obj1 = parse(file1, path.extname('flat1.yaml'));
  const obj2 = parse(file2, path.extname('flat2.yml'));

  expect(genDiff(obj1, obj2)).toEqual(
    `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`,
  );
});
test('--format plain', () => {
  const file1 = readFile('flat1.yaml');
  const file2 = readFile('flat2.yml');
  const obj1 = parse(file1, path.extname('flat1.yaml'));
  const obj2 = parse(file2, path.extname('flat2.yml'));

  expect(genDiff(obj1, obj2, 'plain')).toEqual(
    `Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true`,
  );
});
test('--format json', () => {
  const file1 = readFile('flat1.json');
  const file2 = readFile('flat2.json');
  const obj1 = parse(file1, path.extname('flat1.json'));
  const obj2 = parse(file2, path.extname('flat2.json'));

  expect(genDiff(obj1, obj2, 'json')).toEqual(
    '{"follow__deleted":false,"host":"hexlet.io","proxy__deleted":"123.234.53.22","timeout":{"__old":50,"__new":20},"verbose__added":true}',
  );
});
