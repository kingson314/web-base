/**
 * @module string
 */
module.exports = {
  /**
   * 生成uuid
   * @return {string}
   */
  uuid: function () {
    let S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
  },
  /**
   * 获取随机数字字符组合
   * @param len {number} 长度
   * @return {string}
   */
  randomCode:function (len) {
    var code = ''
    const random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z']
    for(let i = 0; i < len; i++){
      //设置随机数范围,这设置为0 ~ 36
      let index = Math.floor(Math.random()*36);
      code += random[index];
    }
    return code
  },
  /**
   * 编码
   * @param str {string}
   * @param k {number} 秘钥
   * @return {string}
   */
  encrypt: function(str, k) {
    let string = "";
    for(let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if(c >= 97 && c <= 122) {
        c += k % 26;
        if(c < 97) {
          c += 26;
        }
        if(c > 122) {
          c -= 26;
        }
      } else if(c >= 65 && c <= 90) {
        c += k % 26;
        if(c < 65) {
          c += 26;
        }
        if(c > 122) {
          c -= 26;
        }
      }
      string += String.fromCharCode(c);
    }
    return string;
  },
  /**
   * 解码
   * @param str {string}
   * @param n {number|string} 秘钥
   * @return {string}
   */
  decrypt: function(str, n) {
    let string = "";
    let k = parseInt("-" + n);
    for(let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if(c >= 97 && c <= 122) {
        c += k % 26;
        if(c < 97) {
          c += 26;
        }
        if(c > 122) {
          c -= 26;
        }
      } else if(c >= 65 && c <= 90) {
        c += k % 26;
        if(c < 65) {
          c += 26;
        }
        if(c > 122) {
          c -= 26;
        }
      }
      string += String.fromCharCode(c);
    }
    return string;
  },
  /**
   * 检测密码强度
   * @param str {string}
   * @return {number}
   */
  checkPwd: function (str) {
    let Lv = 0;
    if (str.length < 6) {
      return Lv
    }
    if (/[0-9]/.test(str)) {
      Lv++
    }
    if (/[a-z]/.test(str)) {
      Lv++
    }
    if (/[A-Z]/.test(str)) {
      Lv++
    }
    if (/[.|-|_]/.test(str)) {
      Lv++
    }
    return Lv;
  },
  /**
   * 移除字符
   * @param str {string}
   * @param character {string}
   * @return {string}
   */
  remove: function (str, character) {
    return str.replace(character, '');
  },
  /**
   * 替换字符
   * @param str {string}
   * @param character {string}
   * @param replacement {string}
   * @return {string}
   */
  replace: function (str, character, replacement) {
    return str.replace(character, replacement);
  },
  /**
   * 省略号
   * @param str {string}
   * @param len {number}
   * @return {string}
   */
  ellipsis: function (str, len) {
    if(str){
      if (str.length > len) return str.substring(0, len) + "...";
      return str
    }
    return
  },
  /**
   * 过滤html代码(把<>转换)
   * @param str {string}
   * @return {string}
   */
  filterTag: function (str) {
    str = str.replace(/&/ig, "&amp;");
    str = str.replace(/</ig, "&lt;");
    str = str.replace(/>/ig, "&gt;");
    str = str.replace(/\//ig, "&#x2F;");
    str = str.replace(/\s/ig, "&nbsp;");
    return str;
  },
  /**
   * 过滤<script></script>转换
   * @param str {string}
   * @return {string}
   */
  filterScript: function (str) {
    return str.replace(/(<script)/ig, "&lt;script").replace(/(<script>)/ig, "&lt;script&gt;").replace(/(<\/script>)/ig, "&lt;/script&gt;");
  },
  /**
   * 获取十六进制随机颜色
   * @return {string}
   */
  getRandomColor: function () {
    return '#' + ((h) => {
      return new Array(7 - h.length).join("0") + h;
    })((Math.random() * 0x1000000 << 0).toString(16));
  },
  /**
   * DOM转字符串
   * @param htmlDOM {Element}
   * @return {string}
   */
  domToString: function (htmlDOM) {
    let div = document.createElement("div");
    div.appendChild(htmlDOM);
    return div.innerHTML
  },
  /**
   * 字符串转DOM
   * @param htmlString {string}
   * @return {Element}
   */
  stringToDom: function (htmlString) {
    let div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.children[0];
  },
}
