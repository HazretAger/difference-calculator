import yaml from 'js-yaml';
import path from 'path';

const parse = (filePath, file) => {
  const parseFile = path.extname(file).slice(1);
  switch (parseFile) {
    case 'yaml':
      return yaml.load(filePath);
    case 'yml':
      return yaml.load(filePath);
    case 'json':
      return JSON.parse(filePath);
    default:
      throw new Error(`Error! Type ${parseFile} is unknown.`);
  }
};

export default parse;
