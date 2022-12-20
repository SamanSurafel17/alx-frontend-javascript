export default function appendToEachArrayValue(array, appendString) {
  const arry1 = [];
  for (const idx of array) {
    arry1.push(appendString + idx);
  }

  return arry1;
}
