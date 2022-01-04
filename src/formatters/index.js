import stylish from './stylish';
import plain from './plain';
import json from './json';

export default (data, format) => {
  switch (format) {
    case 'plain':
      return plain(data);
    case 'json':
      return json(data);
    default:
      return stylish(data);
  }
};
