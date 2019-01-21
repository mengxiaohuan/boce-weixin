import { STATUS_DICT_1, STATUS_DICT_2, STATUS_DICT_3 } from '@/utils/constant';

function getCurrentTime() {
  let keep = ''
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
  return keep // 20160614134947
}

function objLength(input) {
  let type = toString(input)
  let length = 0
  if (type !== '[object Object]') {
    // throw '输入必须为对象{}！'
  } else {
    for (let key in input) {
      if (key !== 'number') {
        length++
      }
    }
  }
  return length
}
// 验证是否是手机号码
function vailPhone(number) {
  let flag = true
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
  if (number.length !== 11 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 验证是否西班牙手机(6开头 9位数)
function ifSpanish(number) {
  let flag = true
  let myreg = /^([6|7|9]{1}(\d+){8})$/
  if (number.length !== 9 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 浮点型除法
function div(a, b) {
  let c, d, e, f
  try {
    e = a.toString().split('.')[1].length
  } catch (g) { }
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  // [eslint] Return statement should not contain assignment. (no-return-assign)
  c = Number(a.toString().replace('.', ''))
  d = Number(b.toString().replace('.', ''))
  return mul(c / d, Math.pow(10, f - e))
}
// 浮点型加法函数
function accAdd(arg1, arg2) {
  let r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return ((arg1 * m + arg2 * m) / m).toFixed(2)
}
// 浮点型乘法
function mul(a, b) {
  let c = 0
  let d = a.toString()
  let e = b.toString()
  try {
    c += a.toString().split('.')[1].length
  } catch (f) { }
  try {
    c += b.toString().split('.')[1].length
  } catch (f) { }
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

//  遍历对象属性和值
function displayProp(obj) {
  let names = ''
  for (let name in obj) {
    names += name + obj[name]
  }
  return names
}
//  去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/g, '')
}
// 去除所有:,英文冒号
function replaceColon(txt) {
  return txt.replace(/:/g, '')
}
// 转换星星分数
function convertStarArray(score) {
  // 1 全星,0 空星,2半星
  let arr = []
  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i - 1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}
/**
 * 返回字符串长度
 * 数字英文算1字符 汉字算2字符
 * @param s
 */
function getTextLength (s) {
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    //单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    }
    else {
      len += 2;
    }
  }
  return len;
};

/**
 * 数字格式化
 * @param number：要格式化的数字
 * @param decimals：保留几位小数（可选，默认为2）
 * @param dec_point：小数点符号（可选，默认为.）
 * @param thousands_sep：千分位符号（可选，默认为,）
 */
function numberFormat(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.ceil(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  var re = /(-?\d+)(\d{3})/;
  while(re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

function testid(id) {
  // 1 "验证通过!", 0 //校验不通过
  var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
  //号码规则校验
  if(!format.test(id)){
    return {'status':0,'msg':'身份证号码不合规'};
  }
  //区位码校验
  //出生年月日校验   前正则限制起始年份为1900;
  var year = id.substr(6,4),//身份证年
    month = id.substr(10,2),//身份证月
    date = id.substr(12,2),//身份证日
    time = Date.parse(month+'-'+date+'-'+year),//身份证日期时间戳date
    now_time = Date.parse(new Date()),//当前时间戳
    dates = (new Date(year,month,0)).getDate();//身份证当月天数
  if(time>now_time||date>dates){
    return {'status':0,'msg':'出生日期不合规'}
  }
  //校验码判断
  var c = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);   //系数
  var b = new Array('1','0','X','9','8','7','6','5','4','3','2');  //校验码对照表
  var id_array = id.split("");
  var sum = 0;
  for(var k=0;k<17;k++){
    sum+=parseInt(id_array[k])*parseInt(c[k]);
  }
  if(id_array[17].toUpperCase() != b[sum%11].toUpperCase()){
    return {'status':0,'msg':'身份证校验码不合规'}
  }
  return {'status':1,'msg':'校验通过'}
}

/**
 *
 * @param type
 * @param status
 * @param shipStatus
 * @returns {string}
 */
function getStatusDesc(type, status, shipStatus) {
  let statusDesc = '';
  if(type && status) {
    if (type === 'C') {
      statusDesc = STATUS_DICT_3[status];
    } else if (type === '4') {
      if (STATUS_DICT_2[status]) {
        statusDesc = status === '02' ? STATUS_DICT_2[status][shipStatus] : STATUS_DICT_2[status];
      }
    } else if (type === '0' || type === '2' || type === '3') { //挂牌订单
      if (STATUS_DICT_1[status]) {
        statusDesc = status === '02' ? STATUS_DICT_1[status][shipStatus] : STATUS_DICT_1[status];
      }
    }
  }
  return statusDesc;
}

/**
 * 处理富文本里的图片宽度自适应
 * 1.去掉img标签里的style、width、height属性
 * 2.img标签添加style属性：max-width:100%;height:auto
 * 3.修改所有style里的width属性为max-width:100%
 * 4.去掉<br/>标签
 * @param html
 * @returns {void|string|*}
 */
function richTextImg(html){
  let newContent= html.replace(/<img[^>]*>/gi,function(match,capture){
    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
    match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi,function(match,capture){
    match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
    return match;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, '');
  newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"');
  return newContent;
}

module.exports = {
  getCurrentTime: getCurrentTime,
  objLength: objLength,
  displayProp: displayProp,
  sTrim: sTrim,
  replaceColon: replaceColon,
  vailPhone: vailPhone,
  ifSpanish: ifSpanish,
  div: div,
  mul: mul,
  accAdd: accAdd,
  convertStarArray: convertStarArray,
  getTextLength: getTextLength,
  numberFormat: numberFormat,
  getStatusDesc: getStatusDesc,
  testId: testid,
  richTextImg
};
