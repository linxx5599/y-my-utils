const calcFn = {
  add() {
    let arg = Array.from(arguments);
    return arg.reduce((total, num) => accAdd(total, num));
  },
  sub() {
    let arg = Array.from(arguments);
    return arg.reduce((total, num) => accAdd(total, -num));
  },
  mul() {
    let arg = Array.from(arguments);
    return arg.reduce((total, num) => accMul(total, num));
  },
  div() {
    let arg = Array.from(arguments);
    return arg.reduce((total, num) => accDiv(total, num));
  }
};
const accAdd = (arg1, arg2) => {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
};

const accMul = (arg1, arg2) => {
  let m = 0;
  let s1 = arg1.toString();
  let s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) { }
  try {
    m += s2.split(".")[1].length;
  } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};

const accDiv = (arg1, arg2) => {
  let t1 = 0;
  let t2 = 0;
  try {
    t1 = arg1.toString().split(".").length;
  } catch (e) { }
  try {
    t2 = arg2.toString().split(".").length;
  } catch (e) { }
  let r1 = Number(arg1.toString().replace(".", ""));
  let r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
};
export default calcFn;