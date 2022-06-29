import getValues from '../helpers/values';

export default function values() {
  return new this.constructor(getValues(this.items));
}
