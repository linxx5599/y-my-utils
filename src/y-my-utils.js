/**
 * 读取环境变量的文件把它转化成对象
 * @param {file} data 读取出来的文件
 * @returns {Object}
 */
const readEnv = data => {
  // let data = fs.readFileSync(fileName, { encoding: 'utf8' })
  let d = data.replace(/\r/g, ',').replace(/\n/g, '') // 把换行和回车替换
  let arr = d.split(',').map(item => {
    return item.split('=')
  }) // [ [ 'a', '1' ], [ 'b', '2' ] ]
  let obj = {}
  arr.forEach(item => {
    obj[item[0]] = item[1]
  })
  return obj //{ a: '1', b: '2' }
}

/**
 * 获取url问号后面的参数并且以对象的形式返回
 * @param {String} url 
 * @returns {Object}
 */
const getQueryObject = url => {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * replaceState替换浏览器url路径
 * @param {Object} data
 * @param {window} global 
 * @param {String} url 
 */
const replaceCurrentUrl = (data, global, url = null) => {
  if (!data) return;
  let $window = global || window;
  let urlObj = getQueryObject(url) || {};
  let newUrlObj = { ...urlObj, ...data };
  let _href = $window.location.href.split("?")[0];
  Object.keys(newUrlObj).forEach((item, index) => {
    let keyValue = `${item}=${newUrlObj[item]}`;
    _href += (index === 0 ? "?" : "&") + keyValue;
  });
  $window.history.replaceState("", "", _href);
}

/**
 * 身份证打码
 * @param {String} idCard 
 * @returns {String}
 */
const idCardMask = (idCard = "") => {
  return idCard.substr(0, 1) + idCard.slice(1, -4).replace(/\d/g, '*') + idCard.substr(-4)
}

/**
 * 滚动到具体位置  简单的方法 参数一是时间，参数二是距离，但是有些机型，并不能兼容这个方法
 * @param {Number} number
 * @param {String} time 时间
 * @returns {String}
 */
const scrollSpecifiedLoc = (number = 0, time) => {
  // 模拟滚动  参数一是距离，参数二是时间
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number;
    return number;
  }
  const spacingTime = 20;
  let spacingInex = time / spacingTime;
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop;
  let everTop = (number - nowTop) / spacingInex;
  let scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--
      scrollTop((nowTop += everTop));
    } else {
      clearInterval(scrollTimer);
    }
  }, spacingTime);
}

/**
 * 将数组（array）拆分成多个子数组，并将这些子数组组成一个新数组。
 * @param {Array} arr 
 * @param {Number} count 
 * @returns {Array}
 */
const multArray = (arr, count = 2) => {
  let pages = [];
  arr.forEach((item, index) => {
    const page = Math.floor(index / count);
    (!pages[page]) && (pages[page] = []);
    pages[page].push(item);
  });
  return pages;
}

/**
 * 将多层嵌套数组（array）拆分成一个数组
 * @param {Array} arr
 * @returns {Array}
 */
const flatten = arr => [].concat(...arr.map(item => (Array.isArray(item) ? flatten(item) : item)));

/**
 * 比较两个数组内的各项值是否相等，返回一个Boolean值
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}
 */
const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const s = new Set(arr2);
  if (arr1.find(x => !s.has(x))) return false;
  return true;
}

/**
 * 加减乘除运算
 * 解决 0.1+0.2 !== 0.3 问题
 * 加法
 * calcFn.add(0.1, 0.2) // 0.3
 * 减法
 * calcFn.sub(0.1, 0.2) // 0.1
 * 乘法
 * calcFn.mul(0.2, 0.3) // 0.06
 *  乘法
 * calcFn.div(0.1, 0.2) // 0.5
 */

/**
 * H5复制文本
 * copyText(content, text => {
 *  this.$toast(text)
 * })
 * @param {String} content
 * @param {Function} callback
 */
// const copyText = (content, callback) => {
//   if (!document.queryCommandEnabled("copy")) return console.log("浏览器不支持");
//   let textarea = document.createElement("textarea");
//   textarea.value = content;
//   textarea.readOnly = "readOnly";
//   document.body.appendChild(textarea);
//   textarea.select(); //选择对象
//   textarea.setSelectionRange(0, content.length);
//   let result = document.execCommand("copy");
//   callback && callback(result ? "复制成功~" : "复制失败~");
//   textarea.remove();
// }

import calcFns from "./calcFn";
export default {
  readEnv,
  getQueryObject,
  replaceCurrentUrl,
  idCardMask,
  scrollSpecifiedLoc,
  multArray,
  flatten,
  isArrayEqual,
  calcFns
}