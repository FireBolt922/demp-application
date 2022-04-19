/**
 * Objects.freezes the objects and the object cannot be modified after that* */
const data = Object.freeze({ name: 'Nikhil' });
data.name = 'Changed';
console.log(data.name);

function getData(a, b) {
  console.log('Okay');
}
