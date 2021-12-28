import _ from 'lodash';
import fs from 'fs';

const genDiff = (obj1, obj2) => {
    const allKeys = [..._.keys(obj1), ..._.keys(obj2)];
    const keysByAlphabet = _.sortBy(_.uniq(allKeys));

    const getDiff = keysByAlphabet.reduce((result, key) => {

        const hasObj1Key = _.has(obj1, key);
        const hasObj2Key = _.has(obj2, key);
        const valueObj1 = obj1[key];
        const valueObj2 = obj2[key];

        if (!hasObj1Key && hasObj2Key) {
            const newKey = `+ ${key}`;
            result[newKey] = valueObj2;
        }

        if (hasObj1Key && !hasObj2Key) {
            const newKey = `- ${key}`;
            result[newKey] = valueObj1;
        }

        if (hasObj1Key && hasObj2Key) {

            if (valueObj1 !== valueObj2) {
                const newKey1 = `- ${key}`;
                const newKey2 = `+ ${key}`;

                result[newKey1] = valueObj1;
                result[newKey2] = valueObj2;

            } else {
                const newKey = `  ${key}`;
                result[newKey] = valueObj1;
            }
        }

        return result;

    }, {});

    const resultJson = JSON.stringify(getDiff, null, 2);

    return resultJson.replaceAll("\"","");
}

export default genDiff;