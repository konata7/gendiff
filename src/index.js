import { Command } from 'commander';
import fs from 'fs';
import * as path from 'node:path';
import genDiff from './gendiff-src.js';
import parse from './parsers.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const file1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
    const format1 = path.extname(filepath1);
    const file2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');
    const format2 = path.extname(filepath2);

    const obj1 = parse(file1, format1);
    const obj2 = parse(file2, format2);

    console.log(genDiff(obj1, obj2));
  });

export default () => program.parse();
