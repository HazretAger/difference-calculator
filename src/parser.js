import yml from 'js-yaml';

export default (file, extName) => {
  if (extName === 'yml' && 'yaml') return yml.load(file);
  return JSON.parse(file);
};
