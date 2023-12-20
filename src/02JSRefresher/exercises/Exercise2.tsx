type NumberArray = number[];

export default function transformToObjects(numberArray: NumberArray) {
  return numberArray.map((number) => ({ val: number }));
}

const aNumberArray: NumberArray = [1, 2, 3];
const transformedArray = transformToObjects(aNumberArray);
console.log(transformedArray);