import { isFunction } from '../helpers/is';

export default function pull(key, defaultValue) {
  let returnValue = this.items[key] || null;

  if (!returnValue && defaultValue !== undefined) {
    if (isFunction(defaultValue)) {
      returnValue = defaultValue();
    } else {
      returnValue = defaultValue;
    }
  }

  delete this.items[key];

  return returnValue;
}
