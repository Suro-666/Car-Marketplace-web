export const year = [];

const date = new Date();
const currentYear = date.getFullYear();
const startYear = 1960;

for (let i = startYear; i <= currentYear; i++) {
  year.unshift(i);
}
