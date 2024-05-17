### 基于webpack5发布的工具包
 * import yMyUtils from 'y-my-utils'  
  解构 import { getQueryObject } from 'y-my-utils'
 * const yMyUtils = require('y-my-utils')  
  解构 const { getQueryObject } = require('y-my-utils')

### readEnv 读取环境变量的文件把它转化成对象
 * @param {file} data 读取出来的文件
 * @returns {Object}

### getQueryObject 获取url问号后面的参数并且以对象的形式返回 
 * @param {String} 默认url = window.location.href
 * @returns {Object}
  > let url = 'https://172.12.12.12:9527/heool-wore?test=123'  
  > getQueryObject(url) //得到{ test: 123 }

### replaceCurrentUrl  使用浏览器的replaceStateff替换浏览器url路径
 * replaceCurrentUrl(data, global, url)
 * @param {Object} data 必须
 * @param {window} global 默认 window
 * @param {String} url 默认 window.location.href

### idCardMask 身份证打码
 * idCardMask(idCard)
 * @param {String} idCard 必须
 * @returns {String}

### scrollSpecifiedLoc 滚动到具体位置 参数一是时间，参数二是距离，但是有些机型，并不能兼容这个方法
 * scrollSpecifiedLoc(number, time)
 * @param {Number} number
 * @param {String} time 时间
 * @returns {String}

### multArray 将数组（array）拆分成多个子数组，并将这些子数组组成一个新数组。
 * multArray(arr, count)
 * @param {Array} arr 
 * @param {Number} count 
 * @returns {Array}

### flatten 将多层嵌套数组（array）拆分成一个数组
 * flatten(arr)
 * @param {Array} arr
 * @returns {Array}

### isArrayEqual 比较两个数组内的各项值是否相等，返回一个Boolean值
 * isArrayEqual(arr1, arr2)
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Boolean}

### calcFn 加减乘除运算 解决 0.1+0.2 !== 0.3 问题
 * 加法
 * calcFn.add(0.1, 0.2) // 0.3
 * 减法
 * calcFn.sub(0.1, 0.2) // 0.1
 * 乘法
 * calcFn.mul(0.2, 0.3) // 0.06
 *  乘法
 * calcFn.div(0.1, 0.2) // 0.5