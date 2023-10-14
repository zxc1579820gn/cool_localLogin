const txtbox = document.getElementById("txtbox");
const btn1 = document.getElementById("btn1");
const ans = document.getElementById("ans");

const data = document.getElementById("date");

txtbox.placeholder = '輸入天數';
//電子鐘
const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {
    var now = new Date();

    document.getElementById("time").innerText =
        zeroPadding(now.getHours(), 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText =
        now.getFullYear() + "-" +
        zeroPadding(now.getMonth() + 1, 2) + "-" +
        zeroPadding(now.getDate(), 2) + " " +
        WEEK[now.getDay()];
}

updateTime();
    setInterval(updateTime, 1000);

    function zeroPadding(num, digit) {
        return String(num).padStart(digit, '0');
}
//電子鐘

var now = new Date();
var txt=WEEK[now.getDay()];

var stxt=String(txt)

var add=0;
if (stxt=="SUN") {
    add=0;
} else if(stxt==="MON"){
    add=1;
}else if(stxt==="TUE"){
    add=2;
}else if(stxt==="WED"){
    add=3;
}else if(stxt==="THU"){
    add=4;
}
else if(stxt==="FRI"){
    add=5;
}
else if(stxt==="SAT"){
    add=6;
}

btn1.addEventListener("click",()=>{
    const day = parseInt(txtbox.value) ;
    console.log('輸入值:'+day)
    console.log('add:'+add)
    console.log('txt:'+txt)
    console.log('stxt:'+stxt)
    ans.textContent=""

    if (txtbox.value=="") {
        alert('請輸入數字');

    }else{

        switch((day+add)%7){
            case 1 :
                ans.textContent=day+"天後是"+"星期一";
            break;
            case 2 :
                ans.textContent=day+"天後是"+"星期二";
            break;
            case 3 :
                ans.textContent=day+"天後是"+"星期三";
            break;
            case 4 :
                ans.textContent=day+"天後是"+"星期四";
            break;
            case 5 :
                ans.textContent=day+"天後是"+"星期五";
            break;
            case 6 :
                ans.textContent=day+"天後是"+"星期六";
            break;
            default:
                ans.textContent=day+"天後是"+"星期日";
            break;
            }


//只用一個switch

            // switch((day+add)%7){
            //     case 0 :
            //         ans.textContent=day+"天後是"+"星期日";
            //     break;
            //     default:
            //         ans.textContent=day+"天後是"+"星期"+((day+add)%7);
            //     break;
            //     }
//只用一個switch

}
})