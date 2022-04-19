const applicationType = [2, 17, 18, 3];
const temp1 = [];
const temp2 = [];
// applicationType.map((data) => {
//   console.log(data);
//   const temp = data !== 15 && data !== 17;
//   if (temp) {
//     temp1.push(data);
//   } else {
//     temp2.push(data);
//   }
// });

// console.log(temp1, temp2);
// console.log(Boolean(10 === 10 && 10 !== 10));
applicationType.map((items) => {
  if (items !== 15 || items !== 2 || items !== 17) {
    temp1.push(items);
  } else {
    temp2.push(items);
  }
});
console.log(temp1, temp2);
