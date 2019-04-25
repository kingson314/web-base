# `web-base`

Web development common base tools.

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
console.log(utils.date.getDateString(date,'YYYY-MM-DD hh:mm'))

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

#### `utils:`
- string
    - uuid
    - randomCode 
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
    - random
    - randomGoods `抽奖概率`
    - randomCode `随机验证码`
    - formatSmallChinese `将数字转换成对应的中文小写`
    - formatMoney `数字金钱表示`
    - formatBigMoney `中文大写金钱表示`
    - numberUnit `数字单位`
- array
    - contains `是否包含元素`
    - remove `移除元素`
    - each
    - map
    - sort
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
    - getItemByRandom
    - getIndexByItem
    - getItemByIndex
    - setItemByIndex
    - removeByItem
    - removeByIndex
- check
    - isBrowser
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
    - isChineseIdCard
    - isBankCard
    - isIOS
    - isPC
- date
    - countTime
    - getTimeStamp
    - getDateStringByTimeStamp
    - getDateString
    - getMonths
    - getDays
    - getHMS
    - getMonthOfDay
    - getYearOfDay
    - getFirstDayOfYear
    - getLastDayOfYear
    - getDayOfYear
    - getDayOfYearWeek
    - _transferDate `转换为日期对象`
    - _numYear `间隔年份`
    - _numMonth `间隔月份`
    - _numDay `间隔天数`
    - _numHour `间隔小时`
    - _numMinute `间隔分数`
    - _numSecond `间隔秒数`
    - _numMillSecond `间隔毫秒`
    - _plusMillisSeconds `某个日期加上多少毫秒`
    - _plusSeconds `某个日期加上多少秒`
    - _plusMinutes `某个日期加上多少分钟`
    - _plusHours `某个日期加上小时`
    - _plusDays `某个日期加上天数`
    - _plusMonths `某个日期加上多少个月,这里是按照一个月30天来计算天数的`
    - _plusYears `某个日期加上多少个年,这里是按照一个月365天来计算天数的，如果loop为true则按闰年计算`
    - _plusDate `某个日期加上某个日期`
    - _minusMillisSeconds `某个日期减去多少毫秒秒`
    - _minusSeconds `某个日期减去多少秒`
    - _minusMinutes `某个日期减去多少分钟`
    - _minusHours `某个日期减去小时数`
    - _minusDays `某个日期减去小时数`
    - _minusMonths `某个日期减去多少个月,这里是按照一个月30天来计算天数的`
    - _minusYears `某个日期减去多少个年,这里是按照一个月365天来计算天数的`
    - _minusDate `某个日期减去某个日期`
    - _getMonthOfDay `获取一个月有多少天`
    - _getYearOfDay `获取一年有多少天`
    - _getDayOfYear `某个日期是当年中的第几天`
    - _getDayOfMonth `获取某个日期在这一年的第几周`
    - _getDayOfWeek `某个日期是在当月中的星期几`
    - _getHourOfDay `获取在当前日期中的时间`
    - _eq `判断两个时间是否一样`
    - _after `判断两个时间是否晚于某个日期`
    - _before `某个日期是否早于某个日期`
    - _getFirstDayOfYear `获取某年的第一天`
    - _getLastDayOfYear `获取某年的最后一天`
    - _getFirstDayOfMonth `获取某月的第一天`
    - _getLastDayOfMonth `获取某月最后一天`
    - _getFirstOfDay `一天的开始时间`
    - _getLastOfDay `一天的结束时间`
    - _getNextDayOfMonth `获取下个月的第一天`
    - _getFirstOfWeek `获取当周的第一天`
    - _getLastOfWeek `获取当周的最后一天`
    - _format `时间格式化`
    - _getYear `年`
    - _getMonth `月`
    - _getDay `日`
    - _getWeek `星期`
    - _getHour `时`
    - _getHour12 `12小时制时`
    - _getMinute `分`
    - _getSecond `秒`
    - _getMillisecond `毫秒`
    - _getPeriod `季度`
    - _nowWeekChinese `获取星期的中文字`
    - _getTime `返回 1970 年 1 月 1 日至今的毫秒数`
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
    - getBreadcrumbs
    - getParam
    - getParams
    - ajax
    - fetch
    - cookie
        - parse
        - getFrom
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


#### `common class:`

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
