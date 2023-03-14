function dryNumber(dry: number, numbers: number) {
  const sequence = (_: unknown, i: number) => i + 1;
  const list = Array.from({ length: numbers }, sequence);

  const listDryNumbers = list.filter((num) => {
    return num.toString().includes(dry.toString());
  });
  return listDryNumbers;
}
const logDryNumber = dryNumber(1, 15);
console.log(logDryNumber);
