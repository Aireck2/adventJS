const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

type Box = { l: number; w: number; h: number };

function fitsInOneBox(boxes: Box[]) {
  const ascBoxes = boxes.sort((a, b) =>
    a.w > b.w && a.l > b.l && a.h > b.h ? 1 : -1
  );
  const mapBoxes = ascBoxes.reduce(
    (prev, current) => {
      const isGreater: boolean =
        current.h > prev?.h && current.l > prev.l && current.w > prev.w;

      return {
        l: isGreater ? current.l : current.l + prev.l,
        w: isGreater ? current.w : current.w + prev.w,
        h: isGreater ? current.h : current.h + prev.h,
      };
    },
    { l: 0, w: 0, h: 0 }
  );

  return (
    mapBoxes.h === ascBoxes.at(-1)?.h &&
    mapBoxes.w === ascBoxes.at(-1)?.w &&
    mapBoxes.l === ascBoxes.at(-1)?.l
  );
}

const isFit = fitsInOneBox(boxes);

console.log(isFit, "result");
