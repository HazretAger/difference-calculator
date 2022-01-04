import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('stylish-format test JSON', () => {
    const filepath1 = getFixturePath('before1.json');
    const filepath2 = getFixturePath('before2.json');
    const result = readFileSync(getFixturePath('stylish-format'), 'utf-8');

    expect(getDiff(filepath1, filepath2)).toEqual(result);
})

test('stylish-format test YAML', () => {
    const filepath1 = getFixturePath('before1.yml');
    const filepath2 = getFixturePath('before2.yml');
    const result = readFileSync(getFixturePath('stylish-format'), 'utf-8');

    expect(getDiff(filepath1, filepath2)).toEqual(result);
})