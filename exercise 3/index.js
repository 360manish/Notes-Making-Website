// console.log("this is hello world  javascript")
// let fetchdata=document.getElementById("fetchdata");
// fetchdata.addEventListener('click',buttonclicklistener);
// function buttonclicklistener(){
//   console.log("i click the button");
//   const xhr=new XMLHttpRequest();

//   // xhr.open('GET','hello.txt',true);
//   xhr.open('POST','	http://dummy.restapiexample.com/api/v1/create',true);
//   xhr.getResponseHeader('Content-type','application/json');


//   xhr.onprogress=function(){
//     console.log("i am in progress");
//   }

//   xhr.onload=function(){
//     console.log(this.responseText);
//   }
//   params=`{"name":"test23324csdc","salary":"123","age":"23"}`
//   xhr.send(params)
// }

let fetchveg=document.getElementById("fetchveg");
let fetchfruits=document.getElementById("fetchfruits");
fetchveg.addEventListener('click',vegclickhandler);
fetchfruits.addEventListener('click',fclickhandler);
// fetchfruits.addEventListener('click',fclickhandler)

function vegclickhandler(){
  const xhr=new XMLHttpRequest();
  xhr.open('GET','veg.json',true);
  xhr.onprogress=function(){
    console.log("work in progress");
  }
  let str=""
  xhr.onload=function(){
    console.log(this.responseText);
    let obj=JSON.parse(this.responseText);
    let vega=document.getElementById("vega");
    for(key in obj){
      str+=`<li>${obj[key]}</li>`
      vega.innerHTML=str;
    }
  }
  xhr.send();

}      

function fclickhandler(){
  const xhr=new XMLHttpRequest();
  xhr.open('GET','fruits.json');
  xhr.onprogress=function(){
    console.log("fetching fruits is also on progress");
  }
  xhr.onload=function(){
    console.log(this.responseText);
    cbj=JSON.parse(this.responseText);
    let ctr="";
    let fruit=document.getElementById("fruit");
    for(key in cbj){
      ctr+=`<li>${cbj[key]}</li>`;
      fruit.innerHTML=ctr;
    }
  }
  xhr.send();
}