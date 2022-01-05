import fs from 'fs';
import path from 'path';
import diffBuilder from './diffBuilder.js';
import parse from './parser.js';
import render from './formatters/index.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const filePath1 = path.resolve('__fixtures__', path1);
  const fileObj1 = parse(fs.readFileSync(filePath1, 'utf-8'), path1);
  const filePath2 = path.resolve('__fixtures__', path2);
  const fileObj2 = parse(fs.readFileSync(filePath2, 'utf-8'), path2);
  const result = diffBuilder(fileObj1, fileObj2);
  return render(result, formatName);
};

export default genDiff;
