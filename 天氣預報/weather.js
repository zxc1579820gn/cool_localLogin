let wet=[];
const selectloc = document.getElementById('selectloc');
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-D843B008-810B-42F2-AE7B-5943A6DFF424")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//     wet=data;
    
// })
.then(response=>response.json())
.then(data=>{
    console.log(data);
    wet=data;

    // 迭代 API 返回的数据中的地点信息
    data.records.location.forEach(x => {
        const option = document.createElement('option');
        const locationName = x.locationName; // 获取地点名称
        option.value = locationName; // 选项的值
        option.text = locationName;   // 选项的显示文本
        selectloc.appendChild(option);
    });
    // 迭代 API 返回的数据中的地点信息
})
.catch(error=>{
    console.log(error);
})

//===============================================================主要區域===============================================================

function main() {

    const selectloc   =   document.getElementById("selectloc");
    const numberlabel =  document.getElementById("umberlabel");
    const numberlabel2= document.getElementById("umberlabel2");
    const numberlabel3= document.getElementById("umberlabel3");
    const numberlabel4= document.getElementById("umberlabel4");
    const numberlabel5= document.getElementById("umberlabel5");
    const numberlabel6= document.getElementById("umberlabel6");
    const numberlabel7= document.getElementById("umberlabel7");
    const numberlabel8= document.getElementById("umberlabel8");
    numberlabel.textContent =""
    numberlabel2.textContent=""
    numberlabel3.textContent=""
    numberlabel4.textContent=""
    numberlabel5.textContent=""
    numberlabel6.textContent=""
    numberlabel7.textContent=""
    numberlabel8.textContent=""

    console.log(wet.records.location.length)
    for (let i = 0; i <wet.records.location.length; i++) {
            if (selectloc.value==wet.records.location[i].locationName) {
                console.log("for迴圈找到地點了")
                numberlabel.textContent=numberlabel.textContent+wet.records.location[i].locationName;
                numberlabel2.textContent="從  "+wet.records.location[i].weatherElement[3].time[2].startTime+"開始"
                numberlabel3.textContent="到  "+wet.records.location[i].weatherElement[3].time[2].endTime+"結束"
                numberlabel4.textContent=wet.records.location[i].weatherElement[0].time[2].parameter.parameterName
                numberlabel5.textContent="最低溫  "+wet.records.location[i].weatherElement[2].time[2].parameter.parameterName+"℃"
                numberlabel6.textContent="最高溫  "+wet.records.location[i].weatherElement[4].time[2].parameter.parameterName+"℃"
                numberlabel7.textContent="降雨機率"+wet.records.location[i].weatherElement[1].time[2].parameter.parameterName+"%"
                numberlabel8.textContent=wet.records.location[i].weatherElement[3].time[2].parameter.parameterName;
            }
        }
    }






//================================================當下拉式選單的值改變時觸發
document.getElementById("selectloc").addEventListener("change", function() {
    main()
});
//================================================當下拉式選單的值改變時觸發

//===============================================================主要區域===============================================================








//================================================測試區================================================
function test() {
    const selectloc= document.getElementById("selectloc");
    const numberlabel= document.getElementById("umberlabel");
    const testbtn= document.getElementById("testbtn");
console.log(wet.records.location[0].locationName);
console.log(wet.records.location[0].weatherElement[0].time[2].parameter.parameterName);
console.log("最低溫"+wet.records.location[0].weatherElement[2].time[2].parameter.parameterName+"℃");
console.log("最高溫"+wet.records.location[0].weatherElement[4].time[2].parameter.parameterName+"℃");
for (let i = 0; i <=21; i++) {
    //console.log(wet.records.location[i].locationName)
    if (selectloc.value==wet.records.location[i].locationName) {
        
        console.log("xxxxxx")
        numberlabel.textContent=numberlabel.textContent+wet.records.location[i].locationName;
        numberlabel.textContent=numberlabel.textContent+wet.records.location[i].weatherElement[0].time[2].parameter.parameterName;
        numberlabel.textContent=numberlabel.textContent+"最低溫"+wet.records.location[i].weatherElement[2].time[2].parameter.parameterName+"℃";
        numberlabel.textContent=numberlabel.textContent+"最高溫"+wet.records.location[i].weatherElement[4].time[2].parameter.parameterName+"℃";
        numberlabel.textContent=numberlabel.textContent+"降雨機率"+wet.records.location[i].weatherElement[1].time[2].parameter.parameterName+"%";
    }
}
}
//================================================測試區================================================



//================================================測試按鈕================================================
document.getElementById("testbtn").addEventListener('click', function() {
    test()
});
//================================================測試按鈕================================================
