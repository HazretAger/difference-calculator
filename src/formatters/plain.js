import _ from 'lodash';

const plain = (data) => {
  const stringify = (item) => {
    if (_.isObject(item) && item !== null) {
      return '[complex value]';
    }
    if (typeof item === 'string') {
      return `'${item}'`;
    }
    return item;
  };

  const iter = (data, items) => {
    const result = data.filter(({ type }) => type !== 'identical')
      .map((node) => {
        const { type, value, key } = node;
        const fullName = items ? [...items, key].join('.') : key;
        switch (type) {
          case 'added':
            return `Property '${fullName}' was added with value: ${stringify(value)}`;
          case 'removed':
            return `Property '${fullName}' was removed`;
          case 'changed':
            return `Property '${fullName}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
          case 'nested':
            return iter(node.children, [...items, key]);
        }
      });

    return result.join('\n');
  };

  return iter(data, []);
};

export default plain;
