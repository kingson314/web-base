# `web-base`

Web development common base tools.

## Example Usage

```
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
console.log(utils.date.getFormatDate(date,'YYYY-MM-DD hh:mm'))

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

#### `common.css`

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
