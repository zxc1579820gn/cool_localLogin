// let d =[]//陣列
// let e ={}//物件
const inputxt = document.getElementById('inputxt');
const btnans = document.getElementById('btnans');
const title = document.getElementById("title");
const con1 = document.getElementById("con1");
const con2 = document.getElementById("con2");
const con3 = document.getElementById("con3");
const rebtn = document.getElementById("rebtn");
const conrebtn = document.getElementById('conrebtn');

var x =1;
var y =100;

var z =Math.floor(Math.random()*100)+1;
const initialX = 1;
const initialY = 100;


        window.addEventListener('load',()=>{
            con1.textContent=x;
            con3.textContent=y;
            inputxt.min = x;
            inputxt.max =y;
            console.log("答案"+z)
        });

        inputxt.addEventListener('input',()=>{


        })
        
        btnans.addEventListener("click",()=>{
            const inputvalue = parseInt(inputxt.value) ;
            console.log('輸入值:'+inputvalue)
            console.log("答案"+z)
            a=true
            b=true
            if ( inputvalue <x) {
                inputxt.min = x;
                inputxt.value=x;
                alert('不能低於'+x)
                a=false
            }
            if ( inputvalue >y) {
                inputxt.max = y;
                inputxt.value=y;
                alert('不能高於'+y)
                b=false
            }

            if ( inputvalue === z) {
                title.textContent="你贏了";
                con1.style.display= "none";
                con2.textContent=z;
                con3.style.display= "none";
                inputxt.style.display= "none";
                btnans.style.display= "none";
                rebtn.style.display="block";
                conrebtn.style.display= "none";

            }else if(inputvalue < z && a===true && b===true){
                alert('太小');
                x=parseInt(inputvalue);
            }else if(inputvalue > z && a===true && b===true) {
                alert('太大');
                y=parseInt(inputvalue);
            }
                con1.textContent=x;
                con3.textContent=y;
                inputxt.min = x;
                inputxt.max =y;
        });

        rebtn.addEventListener("click",()=>{
            title.textContent="猜數字";
            con1.style.display="block";
            con2.textContent="-";
            con3.style.display="block";
            inputxt.style.display="block";
            btnans.style.display="block";
            rebtn.style.display="none";

            x=1
            y=100
            z =Math.floor(Math.random()*100)+1;
            console.log("答案"+z)
            conrebtn.style.display= "block";
            con1.textContent=1;
            con3.textContent=100;

            inputxt.max = 100;
            inputxt.min = 1;
        });
        conrebtn.addEventListener("click",()=>{
            title.textContent="猜數字";
            con1.style.display="block";
            con2.textContent="-";
            con3.style.display="block";
            inputxt.style.display="block";
            btnans.style.display="block";
            
            
            x=1
            y=100
            z =Math.floor(Math.random()*100)+1;
            console.log("答案"+z)

            con1.textContent=1;
            con3.textContent=100;

            inputxt.max = 100;
            inputxt.min = 1;
        });

