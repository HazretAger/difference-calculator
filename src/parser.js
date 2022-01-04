import _ from 'lodash';
import yml from 'js-yaml';

const getFormat = {
  json: JSON.parse,
};

export default (file, format) => (_.has(getFormat, format) ? getFormat[format](file) : yml.load(file));
