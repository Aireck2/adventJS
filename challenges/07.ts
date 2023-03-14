const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const filterUnique = (arr: string[]) =>
    arr.filter((value, index, array) => array.indexOf(value) === index);

  const uniquesArr = [
    ...filterUnique(a1),
    ...filterUnique(a2),
    ...filterUnique(a3),
  ];

  const repeatedArr = filterUnique(
    uniquesArr.filter((item, i, array) => array.indexOf(item) !== i)
  );

  const result = filterUnique(uniquesArr).filter(
    (item) => !repeatedArr.includes(item)
  );

  return result;
}

const log = getGiftsToRefill(a1, a2, a3);
console.log(log);
