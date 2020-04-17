function generateRandomNumber(min_value, max_value) {
  let random_number = Math.random() * (max_value - min_value) + min_value;
  return Math.floor(random_number);
}

function quadraticFunction(time, a, c) {
  return a * (time * time) + c
}

function linearFunction(time, a, c) {
  return a * time + c
}
