        
const inputxt = document.getElementById('inputxt');
const btnans = document.getElementById('btnans');
const title = document.getElementById("title");
const numberlabel= document.getElementById("umberlabel");


function isprime(number){
            if (number<=1) {
                return false;
            }
            if (number<=3) {
                return true;
            }
            if (number%2===0||number%3===0) {
                return false;
            }
            for (let i = 5; i*i <= number; i+=6) {
                if (number%i===0||number%(i+2)===0) {
                    return false;
                }
            }
return true;
}
function finduptox(inputvalue){
    const primes =[];

    for (let i = 2; i<= inputvalue; i++) {
        if (isprime(i)) {
            primes.push(i)

        }
        
    }
    return primes;
}


// window.addEventListener('load',()=>{
//     ans.length=0
//     title.textContent=ans.length
// });

// inputxt.addEventListener('input',()=>{});
btnans.addEventListener("click",()=>{
    const inputvalue = parseInt(inputxt.value) ;
    console.log('輸入值:'+inputvalue);
    const ans=finduptox(inputvalue);
    console.log('ans:'+ans);
    console.log('primes:'+ans.length);
    
    numberlabel.textContent=ans;
    title.textContent=ans.length
    



            // con1.textContent=x;
            // con3.textContent=y;
            // inputxt.min = x;
            // inputxt.max =y;

            // if (inputvalue===1) {
            //     numberlabel.textContent="12312"

            // }else if(inputvalue===2){
            //     numberlabel.text= "x234";
            // }

            
});