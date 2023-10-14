// function show_hide() {
//     var login = document.getElementById("container1");
//     var signup = document.getElementById("container2");
//     var copyright = document.getElementById("copyright");

//     if (login.style.display === "none") {
//         login.style.display = "block";  //lonin出現
//         document.getElementById("username").value="";
//         document.getElementById("password").value="";
//         signup.style.display = "none";  //signup消失
//         copyright.style.margin = "200px 0px 0px 0px";
//     } else {
//         login.style.display = "none";   //login消失
//         signup.style.display = "block"; //signup出現
//         signup.style.visibility="visible";
//         copyright.style.margin = "200px 0px 0px 0px";

//         document.getElementById("fullname").value="";
//         document.getElementById("username2").value="";
//         document.getElementById("password2").value="";
//         document.getElementById("comfirm_password").value="";
//     }
// }


// window.onload = function() {
//     // 获取audio标签
//     var audio = document.getElementsByTagName('audio')[0];
    
//     // 播放音乐
//     audio.play();
// };

// var audio = document.getElementById('music1');
// $("#btn").bind("touchstart", function bf() {
// if(audio !== null) {
// //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
// //alert(audio.paused);
// if(audio.paused) {
// audio.play(); //audio.play();// 这个就是播放
// $("#btn").addClass("active")
// } else {
// audio.pause(); // 这个就是暂停
// $("#btn").removeClass("active")
// }
// }
// })

// var audio = document.getElementById('myAudio');
// var hasBeenPlayed = false;

// // 監聽滾動事件
// window.addEventListener('scroll', function() {
//     // 如果音樂還沒有播放過並且用戶已經滾動，則播放音樂
//     if (!hasBeenPlayed && isElementInViewport(audio)) {
//         audio.play();
//         hasBeenPlayed = true;
//     }
// });

// // 檢查元素是否在可視區域內
// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }
// window.addEventListener('scroll', function() {
//     console.log('滚动事件触发了');
// });

document.getElementById('myAudio').addEventListener('play', function() {
    this.play();
});

