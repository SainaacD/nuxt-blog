<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

@font-face {
  font-family: "iconfont";
  src: url('/iconfont/iconfont.eot'); /* IE9*/
  src: url('/iconfont/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/iconfont/iconfont.woff') format('woff'), /* chrome, firefox */
       url('/iconfont/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
       url('/iconfont/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.icon-check-close-circle-o:before { content: "\e77d"; }

.icon-frown:before { content: "\e77e"; }

.icon-info-circle-o:before { content: "\e77f"; }

.icon-meh:before { content: "\e780"; }

.icon-smile:before { content: "\e783"; }

.icon-reload:before { content: "\e788"; }

.icon-message:before { content: "\e78a"; }

.icon-setting:before { content: "\e78e"; }

.icon-location:before { content: "\e790"; }

.icon-edit-square-o:before { content: "\e791"; }

.icon-adduser:before { content: "\e7ae"; }

.icon-deleteuser:before { content: "\e7af"; }

.icon-user:before { content: "\e7b0"; }

.icon-mobile:before { content: "\e7b2"; }

.icon-redenvelope:before { content: "\e7b3"; }

.icon-home:before { content: "\e7c6"; }

.icon-like:before { content: "\e7c8"; }

.icon-unlike:before { content: "\e7c9"; }

.icon-unlock:before { content: "\e7ca"; }

.icon-lock:before { content: "\e7cb"; }

.icon-folder:before { content: "\e7d1"; }

.icon-camera:before { content: "\e7d7"; }

.icon-sound:before { content: "\e7da"; }

.icon-image:before { content: "\e7de"; }

.icon-mail:before { content: "\e7df"; }

.icon-heart:before { content: "\e7e0"; }

.icon-star:before { content: "\e7e1"; }

.icon-attachment:before { content: "\e7e2"; }

.icon-search:before { content: "\e7e3"; }

.icon-tag:before { content: "\e7e4"; }

.icon-tags:before { content: "\e7e5"; }

.icon-right:before { content: "\e7eb"; }

.icon-left:before { content: "\e7ec"; }

.icon-up:before { content: "\e7ed"; }

.icon-down:before { content: "\e7ee"; }

.icon-fullscreen:before { content: "\e7ef"; }

.icon-download:before { content: "\e7f0"; }

.icon-sort-descending:before { content: "\e7f1"; }

.icon-sort-ascending:before { content: "\e7f2"; }

.icon-menu:before { content: "\e7f4"; }

.icon-orderedlist:before { content: "\e7f5"; }

.icon-check:before { content: "\e7fc"; }

.icon-close:before { content: "\e7fd"; }

.icon-minus:before { content: "\e7fe"; }

.icon-question:before { content: "\e7ff"; }

.icon-plus:before { content: "\e800"; }

.icon-small-dash:before { content: "\e801"; }

.icon-pause:before { content: "\e802"; }

</style>
