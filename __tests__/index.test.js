import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/render.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('comparison of flat JSON', () => {
    const filepath1 = getFixturePath('beforeFlat1.json');
    const filepath2 = getFixturePath('beforeFlat2.json');
    const result = readFileSync(getFixturePath('afterFlatJson.txt'), 'utf-8');

    expect(getDiff(filepath1, filepath2)).toEqual(result);
})