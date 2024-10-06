export default function returnHowManyArguments(...rest) {
  let total = 0;
  for (const arg of rest) {
    if (arg) {
      total += 1;
    }
  }
  return total;
}
