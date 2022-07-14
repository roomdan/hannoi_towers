export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomColor() {
  return (
    "rgb(" +
    randomNumber(0, 100) +
    "," +
    randomNumber(0, 255) +
    "," +
    randomNumber(200, 255) +
    ")"
  );
}
