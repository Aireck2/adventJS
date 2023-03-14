const lastBackup = 1546300800;

const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
] as [number, number][];

function getFilesToBackup(lastBackup: number, changes: [number, number][]) {
  const result: number[] = changes.reduce((prev: any, curr) => {
    const isAfter = curr[1] > lastBackup;
    const isRepeated = prev.includes(curr[0]);
    return prev.concat(isAfter && !isRepeated ? curr[0] : []) as number[];
  }, []);
  return result.sort((a, b) => a - b);
}

const logGetFilesToBackup = getFilesToBackup(lastBackup, changes);

console.log(logGetFilesToBackup, "result");
