FastClick.attach(document.body);
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 375 * 100 + "px";
}();
new Swiper(".swiper-container", {
    loop: true,
    autoplay:5000,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd

});
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            if(n==1 || n== 6){
                slide.id = "page1";
                return;
            }else if(n == 2){
                slide.id = "page2";
                return;
            }
            else if(n == 3){
                slide.id="page3";
                return;
            }
            else if(n == 4){
                slide.id="page4";
                return;
            }else if(n == 0 || n== 5){
                slide.id="page5";
                return;
            }
        }
        slide.id = null;
    });
}
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();//->让音频播放:浏览器开始下载资源文件,也就是让它播放到出声音还需要一段时间示音乐的图标
    musicAudio.addEventListener("canplay", function () {
        //->canplay:音频文件已经可以播放了,但是不一定是所有资源都加载完成了,大部分是边播放边界
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    //->当前是暂停状态我让其播放
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    //->当前是播放状态我让其暂停
    musicAudio.pause();
    music.className = "music";
}, false);