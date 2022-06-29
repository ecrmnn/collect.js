import { isArray, isObject } from '../helpers/is';
import nestedValue from '../helpers/nestedValue';

const buildKeyPathMap = function buildKeyPathMap(items) {
  const keyPaths = {};

  items.forEach((item, index) => {
    function buildKeyPath(val, keyPath) {
      if (isObject(val)) {
        Object.keys(val).forEach((prop) => {
          buildKeyPath(val[prop], `${keyPath}.${prop}`);
        });
      } else if (isArray(val)) {
        val.forEach((v, i) => {
          buildKeyPath(v, `${keyPath}.${i}`);
        });
      }

      keyPaths[keyPath] = val;
    }

    buildKeyPath(item, index);
  });

  return keyPaths;
};

export default function pluck(value, key) {
  if (value.indexOf('*') !== -1) {
    const keyPathMap = buildKeyPathMap(this.items);

    const keyMatches = [];

    if (key !== undefined) {
      const keyRegex = new RegExp(`0.${key}`, 'g');
      const keyNumberOfLevels = `0.${key}`.split('.').length;

      Object.keys(keyPathMap).forEach((k) => {
        const matchingKey = k.match(keyRegex);

        if (matchingKey) {
          const match = matchingKey[0];

          if (match.split('.').length === keyNumberOfLevels) {
            keyMatches.push(keyPathMap[match]);
          }
        }
      });
    }

    const valueMatches = [];
    const valueRegex = new RegExp(`0.${value}`, 'g');
    const valueNumberOfLevels = `0.${value}`.split('.').length;


    Object.keys(keyPathMap).forEach((k) => {
      const matchingValue = k.match(valueRegex);

      if (matchingValue) {
        const match = matchingValue[0];

        if (match.split('.').length === valueNumberOfLevels) {
          valueMatches.push(keyPathMap[match]);
        }
      }
    });

    if (key !== undefined) {
      const collection = {};

      this.items.forEach((item, index) => {
        collection[keyMatches[index] || ''] = valueMatches;
      });

      return new this.constructor(collection);
    }

    return new this.constructor([valueMatches]);
  }

  if (key !== undefined) {
    const collection = {};

    this.items.forEach((item) => {
      if (nestedValue(item, value) !== undefined) {
        collection[item[key] || ''] = nestedValue(item, value);
      } else {
        collection[item[key] || ''] = null;
      }
    });

    return new this.constructor(collection);
  }

  return this.map((item) => {
    if (nestedValue(item, value) !== undefined) {
      return nestedValue(item, value);
    }

    return null;
  });
}
