// 获取节点
const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");
// 通过fetch获取汇率并实现dom更新
function  calculate() {
    const currency_one = currencyEl_one.value;//获取到是什么交换
      const currency_two = currencyEl_two.value;//什么
      fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res=>res.json()).then(data=>
          /*下载数据,然后转换为json数据,然后是把数据赋值给*/
          {
              const rate = data.rates[currency_two];
              /*rates就是api里面的数组.意思是1块钱人民币转换成rates[currency_two]数组里面的值是多少.*/
              rateEl.innerText=`1${currency_one}=${rate}${currency_two}`;//1CNY = 0.317255FJD.ratee就是转换的利率
              amountEl_two.value=(amountEl_one.value*rate).toFixed(4);//人民币比如20转换成美元就是20rate就是一块钱人民币转换成美元是多少。*起来就得出结果了。。
          });/*汇率的api*/

}
currencyEl_one.addEventListener("change", calculate);//左上角的动西
amountEl_one.addEventListener("input", calculate);//右上角的东西
currencyEl_two.addEventListener("change", calculate);//左下角的东西
amountEl_two.addEventListener("input", calculate);//右下角的东西

window.addEventListener('load',()=>{
  calculate();

});



swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();//刷新把.
});//交换的按钮,按下第二次就是美元兑换成人民币是多少。
