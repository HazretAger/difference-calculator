import genDiff from "./genDiff.js";
import parser from "./parser.js";
import fs from 'fs';
import path, { parse } from 'path';

const render = (filepath1, filepath2) => {
    const extName = path.extname(filepath1).split('.')[1];

    const pathToFile1 = path.resolve(process.cwd(), filepath1);
    const file1 = fs.readFileSync(pathToFile1, 'utf-8');
    const fileObj1 = parser(file1, extName);

    const pathToFile2 = path.resolve(process.cwd(), filepath2);
    const file2 = fs.readFileSync(pathToFile2, 'utf-8');
    const fileObj2 = parser(file2, extName);
    
    const diff = genDiff(fileObj1, fileObj2);

    return diff;
}

export default render;