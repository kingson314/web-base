# `web-base`

> Web development common base tools.

## Example Usage

```
npm i web-base
//or
yarn add web-base
```

#### `utils`
```
import {utils} from 'web-base'

let arr = ['paddy','patrick','somebody']
let num = 'string'
let date = new Date()

console.log(utils.array.remove(arr,'somebody'))
console.log(utils.check.isNumber(num))
console.log(utils.date.format(date,'YYYY-MM-DD hh:mm'))

// [ 'paddy', 'patrick' ]
// false
// 2019-04-25 21:40

```

#### `css`
```
import 'web-base/dist/css/index.css'

<div class="hide">You can't see me!</div>

//display:none;
```
`Note:` include reset.css, grid.css, visibility.css, common.css

## API

For Documentation, visit [web-base-document]()

#### `utils:`
- string
    - uuid `生成uuid`
    - randomCode `生成数字字符随机组合`
    - encrypt `编码`
    - decrypt `解码`
    - checkPwd `检测密码强度`
    - remove `移除字符`
    - replace `替换字符`
    - ellipsis `省略号`
    - filterTag `过滤html代码(把<>转换)`
    - filterScript `过滤<script></script>转换`
    - getRandomColor `获取十六进制随机颜色`
    - domToString `DOM转字符串`
    - stringToDom `字符串转DOM`
- number
    - random `随机数`
    - randomGoods `抽奖概率`
    - randomCode `随机验证码`
    - formatSmallChinese `将数字转换成对应的中文小写`
    - formatMoney `数字金钱表示`
    - formatBigMoney `中文大写金钱表示`
    - numberUnit `数字单位`
- array
    - remove `移除元素`
    - sort `排序`
    - unique `去重`
    - union `并集`
    - intersect `交集`
    - complement `补集`
    - minus `差集`
    - formArray `将类数组转换为数组的方法`
    - max `最大值`
    - min `最小值`
    - sum `求和`
    - average `平均值`
    - isRepeat `判断数组是否有重复的项`
    - getItemByRandom `随机获取元素`
    - getIndexByItem `通过元素获取下标`
    - getItemByIndex `通过下标获取元素`
    - setItemByIndex `通过下标设置元素`
    - removeByItem `移除元素`
    - removeByIndex `通过下标移除元素`
- check
    - isBrowser `检查是什么浏览器`
    - isMobile `检查手机操作系统`
    - isString
    - isNumber
    - isBoolean
    - isFunction
    - isNull
    - isUndefined
    - isObj
    - isArray
    - isDate
    - isError
    - isSymbol
    - isPromise
    - isSet
    - isEmpty
    - isFalse
    - isInt
    - isPhone
    - isTel
    - isUsername
    - isPassword
    - isPostal
    - isQQ
    - isEmail
    - isMoney
    - isURL
    - isIP
    - isEnglish
    - isChinese
    - isLower
    - isUpper
    - isHTML
    - isSpace
    - isIdCard
    - isBankCard
    - isChineseIdCard
- date
    - format `日期格式化 如：YYYY-MM-DD hh:mm:ss`
    - countTime `计算时间的year,month,day,hour,minute,seconds,week,daytime,when 如：早晨，25秒以前等等`
    - getTimeStamp `获取时间戳`
    - getFormatDateByTimeStamp `通过时间戳获取格式化日期`
    - getMonths `返回指定长度的月份集合`
    - getDays `返回指定长度的天数集合`
    - getHMS `返回时分秒`
    - getMonthOfDay `获取某月有多少天`
    - getYearOfDay `获取某年有多少天`
    - getFirstDayOfYear `获取某年的第一天`
    - getLastDayOfYear `获取某年最后一天`
    - getDayOfYear `获取某个日期是当年中的第几天`
    - getDayOfYearWeek `获取某个日期在这一年的第几周`
- time
    - getMillisecond `获取毫秒数`
    - formatMillisecond `转换毫秒数`
    - frequency `随机间歇执行`
    - countDown `倒计时`
- event
    - debounce `空闲控制`
    - throttle `频率控制`
    - hit `检测两个物体是否相撞`
- file
    - formatSize `格式文件大小单位`
    - getExt `获取文件的后缀名`
    - getName `获取文件名称`
    - getFileName `根据路径获取文件全名`
    - isImageFile   `gif|jpg|jpeg|png|GIF|JPG|PNG`
    - isVideoFile   `mp4|mp3|flv|wav`
    - isDocumentFile    `doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|htm|shtml|xml`
    - isOfficeFile  `doc|docx|xls|xlsx|pdf|txt|ppt|pptx`
- net
    - getBreadcrumbs `获取path数组`
    - getParam `获取url参数`
    - getParams `获取所有url参数`
    - ajax `http请求`
    - fetch `fetch请求`
    - request `dependency superagent`
    - cookie
        - parse `转换字符串cookie`
        - getFromString `从headrs中获取cookie值`
        - getJSON `dependency js-cookie`
        - get 
        - set 
        - remove 
    - localStorage
        - set
        - get
        - remove
        - clear
    - sessionStorage
        - set
        - get
        - remove
        - clear
- xlsx
    - read
    - write

#### `common.css class:`

- show `display: none;`
- hide  `display: none;`
- invisible `visibility: hidden;`
- transparent `opacity: 0;`
- usn `user-select: none;`
- mask `create a mask`
    - -cover `background-size: cover;`
    - -cover-all `background-size: 100% 100%;`
- font
    - -indent `text-indent: 2em;`
    - -bold `font-weight: bold;`
    - -normal `font-weight: normal;`
    - -fz12 `font-size: 12px;`
    - -fz14 `font-size: 14px;`
    - -fz16 `font-size: 16px;`
    - -fz18 `font-size: 18px;`
    - -fz20 `font-size: 20px;`
    - -fz24 `font-size: 24px;`
    - -fz26 `font-size: 26px;`
    - -fz28 `font-size: 28px;`
    - -fz32 `font-size: 32px;`
- text
    - -tal `text-align: left;`
    - -tar `text-align: right;`
    - -tac `text-align: center;`
    - -taj `text-align: justify;`
    - -ellipsis `overflow: hidden;text-overflow: ellipsis;white-space: nowrap;`
        - -clamp `height: inherit; /*必须设置高度才生效*/`
- menu
    - -icon `width: 16px;height: 16px;...`
    - -text `vertical-align: middle;`
- fixed `position: fixed;`
    - -tl `top: 0;left: 0;`
    - -tr `top: 0;right: 0;`
    - -tc `top: 0;left: 50%;`
    - -bl `bottom: 0;left: 0;`
    - -br `bottom: 0;right: 0;`
    - -bc `bottom: 0;left: 50%;`
    - -cc `bottom: 50%;left: 50%;`
- float
    - -l `float: left;`
    - -r `float: right;`
    - -c `clear: both;...`
- flex
    - -b-half `flex-basis: 50%;`
    - -b-quarter `flex-basis: 25%;`
    - -b-fifth `flex-basis: 20%;`
    - -auto `flex-grow: 1;`
    - -shrink `flex-shrink: 1;`
    - -row `flex-flow: row wrap;...`
    - -row-sa `justify-content: space-around;`
    - -row-sb `justify-content: space-between;`
    - -row-c `justify-content: center;`
    - -row-end `justify-content: flex-end;`
    - -col `flex-flow: column nowrap;`
    - -col-sa `justify-content: space-around;`
    - -col-sb `justify-content: space-between;`
    - -col-c `justify-content: center;`
    - -col-end `justify-content: flex-end;`
    - -center `align-items: center;`
    - -center-sa `justify-content: space-around;`
    - -center-sb `justify-content: space-between;`
    - -center-c `justify-content: center;`
- grid
    - -row `display: grid;`
    - -inline `display: inline-grid;`
- margin
    - -center `position: absolute;left: 0;right: 0;bottom: 0;top: 0;margin: auto;`
- transform
    - -center `position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);`
- vertical
    - -center `display: inline-block;text-align: center;`
    - -inner-center `width: inherit;height: inherit;text-align: center;display: table-cell;vertical-align: middle;`

`Note:` 
- grid.css see [Foundation XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html)	
- visibility.css see [Foundation Visibility Classes](https://foundation.zurb.com/sites/docs/visibility.html)
- utils.net.request see [superagent](http://visionmedia.github.io/superagent)
- utils.net.cookie see [js-cookie](https://www.npmjs.com/package/js-cookie)
