import variadic from '../helpers/variadic';

export default function has(...args) {
  const properties = variadic(args);

  return properties.filter(key => Object.hasOwnProperty.call(this.items, key)).length
    === properties.length;
}
