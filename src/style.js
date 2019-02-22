import {createGlobalStyle} from 'styled-components'

export const Globalstyle =createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {font-family: "iconfont";
  src: url('/src/static/iconfont.eot?t=1550824439106'); /* IE9 */
  src: url('/src/static/iconfont.eot?t=1550824439106#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASYAAsAAAAACQwAAARLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqFHIRfATYCJAMUCwwABCAFhG0HVhv5B8geB47rQIRijq762HgyAvr92j77p5KAJBrpPh0v6RIeCY2LjUTohOQl/P//N/U+XlIhrc+EmZHOhXYmSMVY8khphBzCxMnEmLn++V9k7n8mKLDbUTOOC0TLJMH+55jp8vk4+q9tLllFG+0NMPIO6OwwuojuQM79bMiWN6tgVuJ3Xk9A25rW0FnuUB6SZLRbQFioHhmSBhZ5RX3QFFTCsRnCEuyacQF1B3irfj/8wygJRCUB7Xu+ODf0efhx2PxvQnGBAOnhXHBOImEfyIQ70bOAm8w+rB1tbHMEtDVF8VDrVXvT7A33/z+d4oZ0bc4S5cP880IFpOkCe5TNfOGMT+SrmkTSNoPaKi0H2WvRlOKYNvr4AOEESLdSaSI/tNli7TSTUjMly5ZsR8kapilxpCCNLovFxEiE1yXRqOBAdD8Vj0t5jXJRbGrAQSS7aOgoIb5d4iWPKIlrTlXhBWnt1kni1fbxsHgiNji2kL8RyYmYwvHooKglnW1FVlsHw4EDSXZ3+ReKA1csLPmuuCX45qh5zPtFJkde8dHXQvytFHtTsbDamupFa6u71u6vkr+qSrn+mCJekviFB8IHrf3mPnaVaYWr0OZqa214zcJVjR2XB18mpNFlam60JiU9sGWpjlhYvE96oDRx6ixUTrnnzHEjc5DJQfFEHOonFPa1n/Q6xkys5BGEEDYHeE/2tQuFqB/iios5WO+93WjOHMqNyqfOgs176+7bU//Zs/nzv9UeNepCwy8D+i9Y0H/Al4bQ7ST/f9aEWn2WaPbN5WUP+tRaEnlQVnZ4gj9cVn7/Yuxr1P66A+omPTOoTRupcZSxaZNR4jZuovbfuBHgeZc0LWhiWU0KmpbcVUIYLas/uqTpXeGABNe167YQvoYv6rq6bsh23XZQ2y7QysXAUmcnl3Ppa6W0Pqpvn+2dtI8ftcCHQ5EsoRE704PplFEyEuen4mXQBaD+n2ZiDOrz+CzuDVDPwz/xxL/P31h+v/qoLL3H16bDBvC5OvK96qhNG6RXgP+A1sbSP4t0w74cy8lactidScJccSXpjRVHc238RQJjTw7jm4HOFTRdKSBqWIWkaR2ZsftQdBxApekQ2vbkndwxocNCTgZ2zTEgGDoKUd87JEN3kRn7GIq5z1AZhqHttuxzdmym0v11IhvEzYydxKguLaBou0HX9aOJZ5xP1vvyiiISPaTGmbZszjifRwJEP8QBofGedoahMIqu+Zlc42bE59OYoK5VEpfBVhhGsJvTqUhfxLo0P9BO6QiZgXBjjDUJQ+WiCVCK4QZ68vOjER7j+Mj0FT0jQRGhC1HXzmiLlbMBMk8T2KjnpWwcMp5HOwaDYu6k0Gn8GLlwET7OaBhBeatKhIuBVbFDKqgbpxqkbKphT6/zv8eroI3erQQKYWRDdpQA1YsqT5ZVxzjSKYdM0FWDtKcVOeBxy5VqoUq6q+VBORRqAwAA') format('woff2'),
  url('/src/static/iconfont.woff?t=1550824439106') format('woff'),
  url('/src/static/iconfont.ttf?t=1550824439106') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('/src/static/iconfont.svg?t=1550824439106#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xiazai:before {
  content: "\e645";
}

.icon-ue60ewrite3:before {
  content: "\e603";
}

.icon-fangdajing:before {
  content: "\e627";
}

.icon-compass-:before {
  content: "\e616";
}
`