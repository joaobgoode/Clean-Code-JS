function filterEvens(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const even = 2;
    if (array[i] % even === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const um = 1;
const dois = 2;
const tres = 3;
const quatro = 4;
const cinco = 5;
const seis = 6;
const unfilteredArray = [um, dois, tres, quatro, cinco, seis];
const filteredArray = filterEvens(unfilteredArray);
console.log(filteredArray);
