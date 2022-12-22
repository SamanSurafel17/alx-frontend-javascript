export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (const idx of array) {
    myArray.push(appendString + idx);
  }
  return myArray;
}
