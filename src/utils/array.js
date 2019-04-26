module.exports = {
  /**
   * 移除元素
   *
   * @param {array} arr
   * @param {*} ele - 移除元素 可以是number string
   * @returns {array}
   */
  remove: function (arr, ele) {
    let index = arr.indexOf(ele);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  },
  /**
   * 排序
   *
   * @param {array} arr
   * @param {number} type - 默认：1.正序 2.倒序 3.乱序
   * @returns {array}
   */
  sort: function (arr, type = 1) {
    return arr.sort((a, b) => {
      switch (type) {
        case 1:
          return a - b;
        case 2:
          return b - a;
        case 3:
          return Math.random() - 0.5;
        default:
          return arr;
      }
    })
  },
  /**
   * 去重
   *
   * @param {array} arr
   * @returns {array}
   */
  unique: function (arr) {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(arr));
    } else {
      let n = {}, r = [];
      for (let i = 0; i < arr.length; i++) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }
      return r;
    }
  },
  /**
   * 并集
   *
   * @param {array} arr1
   * @param {array} arr2
   * @returns {array}
   */
  union: function (arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return this.unique(newArr);
  },
  /**
   * 交集
   *
   * @param {array} arr1
   * @param {array} arr2
   * @returns {array}
   */
  intersect: function (arr1, arr2) {
    let _this = this;
    arr1 = this.unique(arr1);
    return this.map(arr1, function (o) {
      return _this.contains(arr2, o) ? o : null;
    });
  },
  /**
   * 补集
   *
   * @param {array} arr1
   * @param {array} arr2
   * @returns {array}
   */
  complement: function (arr1, arr2) {
    return this.minus(this.union(arr1, arr2), this.intersect(arr1, arr2));
  },
  /**
   * 差集
   *
   * @param {array} arr1
   * @param {array} arr2
   * @returns {array}
   */
  minus: function (arr1, arr2) {
    arr1 = this.unique(arr1);
    return this.map(arr1, function (o) {
      return arr2.includes(o) ? null : o;
    });
  },
  /**
   * 将类数组转换为数组
   *
   * @param {*} ary
   * @returns {*|Array}
   */
  formArray: function (ary) {
    let arr = [];
    if (Array.isArray(ary)) {
      arr = ary;
    } else {
      arr = Array.prototype.slice.call(ary);
    }

    return arr;
  },
  /**
   * 最大值
   *
   * @param {array} arr
   * @returns {number}
   */
  max: function (arr) {
    return Math.max.apply(null, arr);
  },
  /**
   * 最小值
   *
   * @param {array} arr
   * @returns {number}
   */
  min: function (arr) {
    return Math.min.apply(null, arr);
  },
  /**
   * 求和
   *
   * @param {array} arr
   * @returns {number}
   */
  sum: function (arr) {
    return arr.reduce((pre, cur) => {
      return pre + cur
    })
  },
  /**
   * 平均值
   *
   * @param {array} arr
   * @returns {number}
   */
  average: function (arr) {
    return this.sum(arr) / arr.length
  },
  /**
   * 判断数组是否有重复的项
   *
   * @param {array} arr
   * @returns {boolean}
   */
  isRepeat: function (arr) {
    let hash = {};
    for (let i in arr) {
      if (hash[arr[i]]) return true;
      hash[arr[i]] = true;
    }
    return false;
  },
  /**
   * 随机返回数组中一个元素
   *
   * @param {array} arr
   * @returns {*}
   */
  getItemByRandom: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  /**
   * 通过元素获取下标
   *
   * @param {array} arr
   * @param {*} item
   * @returns {number}
   */
  getIndexByItem: function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
    }
    return -1;
  },
  /**
   * 通过下标获取元素
   *
   * @param {array} arr
   * @param {number} index
   * @returns {*}
   */
  getItemByIndex: function (arr, index) {
    return arr[index]
  },
  /**
   * 通过下标设置元素
   *
   * @param {array} arr
   * @param {number} index
   * @param {*} item
   * @returns {array}
   */
  setItemByIndex: function (arr, index, item) {
    arr[index] = item
    return arr
  },
  /**
   * 删除指定元素
   *
   * @param {array} arr
   * @param {*} item
   * @returns {*|Array}
   */
  removeByItem: function (arr, item) {
    let uniqueArr = this.unique(arr)
    let index = this.getIndexByItem(uniqueArr, item);
    if (index > -1) {
      uniqueArr.splice(index, 1);
    }
    return uniqueArr;
  },
  /**
   * 通过下标删除元素
   *
   * @param {array} arr
   * @param {number} index
   * @returns {array}
   */
  removeByIndex: function (arr, index) {
    arr.splice(index, 1)
    return arr
  }
}
