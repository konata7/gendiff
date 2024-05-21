import { Command } from 'commander';
import fs from 'fs';
import * as path from 'node:path';
import genDiff from './gendiff-src.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const file1 = fs.readFileSync(path.resolve(filepath1)).toString();
    const file2 = fs.readFileSync(path.resolve(filepath2)).toString();
    const obj1 = JSON.parse(file1);
    const obj2 = JSON.parse(file2);

    console.log(genDiff(obj1, obj2));
  });

export default () => program.parse();
