function sortToys(toys: string[], positions: number[]) {
  const toysPositions: [number, string][] = toys.map((toy, i) => {
    return [positions[i], toy];
  });
  const sorting = toysPositions.sort((a, b) => a[0] - b[0]);
  const result = sorting.map((toy) => toy[1]);
  return result;
}

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

const logSortToys = sortToys(toys, positions);
console.log(logSortToys);
