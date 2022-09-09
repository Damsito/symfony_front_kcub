export default function createArray(
  start = 0,
  end = 10000,
  step = 1,
  pad = true
) {
  const allNumbers = [start, end, step].every(Number.isFinite);
  const zeroPad = (num, places) => String(num).padStart(places, "0");
  if (!allNumbers) {
    throw new TypeError("range() expects only finite numbers as arguments.");
  }
  if (start > end) {
    step = -step;
  }
  const length = Math.floor(Math.abs((end - start) / step)) + 1;
  return pad
    ? Array.from(Array(length), (x, index) => zeroPad(start + index * step, 4))
    : Array.from(Array(length), (x, index) => start + index * step);
}
