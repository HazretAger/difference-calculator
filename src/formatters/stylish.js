import _ from 'lodash';

const space = (depth) => ' '.repeat(depth);

const stringlify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const items = Object.keys(value).map((elem) => `${space(depth + 8)}${elem}: ${stringlify(value[elem], depth + 4)}`);
  return ['{', ...items, `${space(depth + 4)}}`].join('\n');
};

const render = (data) => {
  const iter = (dataAst, depth) => {
    const items = dataAst.map((elem) => {
      const { key, type, value } = elem;
      if (type === 'added') {
        return `${space(depth + 2)}+ ${key}: ${stringlify(value, depth)}`;
      } if (type === 'removed') {
        return `${space(depth + 2)}- ${key}: ${stringlify(value, depth)}`;
      } if (type === 'changed') {
        return `${space(depth + 2)}- ${key}: ${stringlify(elem.value1, depth)}\n${space(depth + 2)}+ ${key}: ${stringlify(elem.value2, depth)}`;
      } if (type === 'nested') {
        return `${space(depth + 2)}  ${key}: ${iter(elem.children, depth + 4)}`;
      }
      return `${space(depth + 2)}  ${key}: ${stringlify(value, depth)}`;
    });

    return ['{', ...items, `${space(depth)}}`].join('\n');
  };

  return iter(data, 0);
};

export default render;
