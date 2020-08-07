const ages = [23, 21, 34, 32];
const ages2 = [34, 54, 27];
const ages3 = [87, 65, 54];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges)


//describing Spread operator (...)

const allAges2 = [...ages, ...ages2 , 5 , ...ages3];
console.log(allAges2)

const primeMinister = 705;
const educationMinister = 650;
const financeMinister = 690;
const maximum = Math.max(primeMinister, educationMinister, financeMinister);
console.log(maximum)

const takaPoisa = [3467, 3645, 1287];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2)