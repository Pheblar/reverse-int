module.exports = function reverse (n) {
  n = String(n);
  let a = n.split().reverse().join();
  a = Number(a)
  return a;
}
