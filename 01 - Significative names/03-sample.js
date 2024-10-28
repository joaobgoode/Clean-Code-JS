const date1 = "2024-01-01";
const date2 = "2024-12-31";

function timeDelta(date1, date2) {
  return new Date(date2) - new Date(date1);
}

const result = timeDelta(date1, date2);
console.log(result);
