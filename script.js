console.log("hello");
let btn=document.createElement("button");
let inputBtnDiv=document.createElement("div");
let temp= document.createElement("h1");
let tempDiv=document.createElement("div");
let input=document.createElement("input");
btn.innerText="Fetch Temperature";
input.placeholder="enter city name";
inputBtnDiv.style.alignItems="center";
inputBtnDiv.style.display="flex";
inputBtnDiv.style.justifyContent="center";
inputBtnDiv.style.gap="3px";
tempDiv.style.alignItems="center";
tempDiv.style.display="flex";
tempDiv.style.justifyContent="center";
document.body.append(inputBtnDiv);
document.body.append(tempDiv);
inputBtnDiv.append(input, btn);
tempDiv.append(temp);
async function fetchData(value){
    console.log("fetch");
    let response=await fetch(`http://api.weatherapi.com/v1/current.json?key=1ad06ac200f34b3496d134032243112&q=${value}&aqi=yes`);
    return response.ok ? await response.json() : 0;
}
btn.onclick= async()=>{
    let value=input.value;
    let d= await fetchData(value);
    console.log(d);
    return d ? temp.innerText=`${d.current.temp_c} ° celcius` : temp.innerText= "Enter the correct City Name" ;
}

