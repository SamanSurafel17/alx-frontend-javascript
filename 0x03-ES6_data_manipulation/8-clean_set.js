export default function cleanSet(set, startString) {
  if (typeof set !== 'object') return '';
  if (!startString || typeof startString !== 'string' || startString.length === 0) return '';

  const values = Array.from(set);
  const array = [];

  for (const value of values) {
    if (value && value.startsWith(startString)) {
      array.push(value.replace(startString, ''));
    }
  }
  return array.join('-');
}
