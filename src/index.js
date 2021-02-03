module.exports = function reverse (n) {
  n = String(n);
  let a = n.split(''); 
  if (a[0] === '-') {
    a.splice(0,1);
  }
  a = a.reverse().join('');
  a = Number(a)
  return a;
}
