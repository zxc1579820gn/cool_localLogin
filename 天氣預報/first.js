//1到100以內的所有質數
// let ans=[];
// const numberlabel= document.getElementById("umberlabel");
// for (let i = 2; i <= 100; i++) {
//     let isright=true;
//     for (let x = 2; x < i; x++) {
//         if (i%x==0) {
//             isright=false;
//             // console.log(i+"不是質數")
//             break;
//         }
//     }
//     if (isright==true) {
//         console.log(i);
//         ans.push(i);
//     }
//     numberlabel.innerText=ans.join(",");
//     numberlabel.innerHTML=numberlabel.innerText+"<h1 style='color:blue;'>"+ans+"<h1 style='color:blue;'>";
// }

let arr=  [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let num =1;

let xxx =arr.reduce(function(x,y){
    num++;
    console.log("x="+x)
    console.log("y="+y)
    return x+y;
    
})
console.log(xxx)

let yyy =arr.filter(function(x){
    return x>3;
})
console.log(yyy)

let zzz =arr.map(function(x){
    return x+10;
})
console.log(zzz)










