import genDiff from "./genDiff.js";
import fs from 'fs';

const render = (filepath1, filepath2) => {
    const file1 = fs.readFileSync(filepath1);
    const file2 = fs.readFileSync(filepath2);
    console.log(file1, file2);
}

export default render;