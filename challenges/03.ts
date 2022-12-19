const packOfGifts = ["game", "videoconsole", "computer"];
const reindeers = [
  "midudev",
  "pheralb",
  "codingwithdani",
  "carlosble",
  "blasco",
  "facundocapua",
  "madeval",
  "memxd",
];

function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const countLetters = (arr: string[]) => arr.map((str) => str.length);
  const sumArrOfNumbers = (arr: number[]) =>
    arr.reduce((prev, cur) => prev + cur);

  const packWeights = sumArrOfNumbers(countLetters(packOfGifts));
  const reindeersCanCarry = sumArrOfNumbers(countLetters(reindeers)) * 2;
  const roundResult = Math.floor(reindeersCanCarry / packWeights);
  return roundResult;
}

const g = distributeGifts(packOfGifts, reindeers); // 2
console.log(g);
