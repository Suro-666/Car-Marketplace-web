export const engineValue = [];

for (let i = 0; i < 8; i++) {
  if (i !== 0) {
    engineValue.push(`${i}.0`);
  }

  for (let j = 1; j <= 9; j++) {
    if (i !== 0 && j !== 0) {
      engineValue.push(`${i}.${j}`);
    }
  }
}
