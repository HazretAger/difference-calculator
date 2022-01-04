import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const allKeys = [..._.keys(obj1), ..._.keys(obj2)];
  const keysByAlphabet = _.sortBy(_.uniq(allKeys));

  const data = keysByAlphabet.map((key) => {
    const hasObj1Key = _.has(obj1, key);
    const hasObj2Key = _.has(obj2, key);
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!hasObj1Key && hasObj2Key) {
      const node = {
        key,
        value: value2,
        type: 'added',
      };
      return node;
    }

    if (hasObj1Key && !hasObj2Key) {
      const node = {
        key,
        value: value1,
        type: 'removed',
      };
      return node;
    }

    if (_.isObject(value1) && _.isObject(value2)) {
      const node = {
        key,
        children: genDiff(obj1[key], obj2[key]),
        type: 'nested'
      };
      return node;
    }

    if (value1 !== value2) {
      const node = {
        key,
        value1,
        value2,
        type: 'changed'
      };
      return node;
    }

    else {
      const node = {
        key,
        value: value1,
        type: 'identical'
      };
      return node;
    }
  });

  return data;
};

export default genDiff;
