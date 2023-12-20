
type Combine = {
  a: number;
  b: number;
  c: number;
};

// 1
// export function combineNumbers({ a, b, c }: Combine): number {
// export function combineNumbers({ a, b, c }: Combine) {
// const result = a * b / c
// return result
// 2
// export function combineNumbers(props: Combine) {
//   const result = (props.a * props.b) / props.c;
//   return result

// 3
export function combineNumbers({ a, b, c }: Combine) {
  const result = a * b / c;
  return result;
}

// 1, 2, 3
const result = combineNumbers({ a: 2, b: 3, c: 4 });
console.log(result);

// 4
// export const combineNumbers = ({ a, b, c }: Combine): number => (a * b) / c;
// const result: number = combineNumbers({ a: 2, b: 3, c: 4 });
// console.log(result)