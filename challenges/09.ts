// const leds: LedType[] = [0, 1, 1, 0, 1];
const leds: LedType[] = [0, 0, 0, 1];
// const leds: LedType[] = [0, 0, 1, 0, 0];

type LedType = 0 | 1;

function countTime(leds: LedType[]) {
  const ledsOn = leds.every((led) => led === 1);
  if (ledsOn) return 0;

  let times = 0;
  while (leds.includes(0)) {
    const indexes: number[] = leds.reduce(
      (prev: any, curr: any, i, arr: any) => {
        const canIgnite = (curr === 0 && arr[i - 1]) ?? arr.at(-1) === 1;
        return prev.concat(canIgnite ? i : []);
      },
      []
    );

    indexes.forEach((val, i, arr) => (leds[val] = 1));
    times++;
  }

  return times * 7;
}

const logCountTime = countTime(leds);

console.log(logCountTime);
