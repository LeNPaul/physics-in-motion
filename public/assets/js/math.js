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

function sin(a, x) {
  return Math.sin(a * x)
}

function superSin(a, b, x) {
  return 2 * Math.cos((a - b)/2 * x) * Math.sin((a + b)/2 * x)
}

function drivenHarmonicMotion(x) {
  return x * Math.sin(x)
}

function dampedHarmonicMotion(x) {
  return Math.exp(-x) * Math.cos(x)
}
