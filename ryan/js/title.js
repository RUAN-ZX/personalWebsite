// 标题搞笑
var OriginTitle = document.title;
var titleTime;
const changeFavicon = link => {
    let $favicon = document.querySelector('link[rel="icon"]');
    // If a <link rel="icon"> element already exists,
    // change its href to the given link.
    if ($favicon !== null) {
      $favicon.href = link;
      // Otherwise, create a new element and append it to <head>.
    } else {
      $favicon = document.createElement("link");
      $favicon.rel = "icon";
      $favicon.href = link;
      document.head.appendChild($favicon);
    }
};

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヽ(●-`Д´-)ノ你丑你就走！';
        changeFavicon("https://pic.cnblogs.com/face/1753718/20190729094430.png");
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヾ(Ő∀Ő3)ノ你帅就回来！' + OriginTitle;
        changeFavicon("https://stea.ryanalexander.cn/blog/img/avatar.jpg");
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});