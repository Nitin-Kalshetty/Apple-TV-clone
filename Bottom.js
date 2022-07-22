let bottom=document.querySelector(".bottom");
let imge=document.createElement("img")
imge.setAttribute("src","https://images.macrumors.com/t/2KynFWrcdcF6WciQG2i-s61Gf_g=/800x0/article-new/2019/09/appletv.jpg?lossy")
let heading1=document.createElement("h2")
heading1.innerText="Watch Apple TV+ here or anywhere."
let para1=document.createElement("p")
para1.innerText="Find Apple TV+ on the Apple TV app, available on Apple devices, smart TVs, and more."
let anch1=document.createElement("a")
anch1.innerText="See all supported devices >"
anch1.href="https://support.apple.com/en-in/guide/tvplus/welcome/web"
let data=[
    {
        name:"Apple TV",
        url:"https://www.mac2sell.net/medias/categories/apple-tv.svg",
        redirect:"https://support.apple.com/en-in/guide/tvplus/apdec6a74b4c/1.0/web/1.0"
    },
    {
        name:"iPhone",
        url:"https://www.mac2sell.net/medias/categories/iphones.svg",
        redirect:"https://support.apple.com/en-in/guide/tvplus/apd5a38547d1/1.0/web/1.0"
    },
    {
        name:"iPad",
        url:"https://www.mac2sell.net/medias/categories/ipads.svg",
        redirect:"https://support.apple.com/en-in/guide/tvplus/apd5a38547d1/1.0/web/1.0"
    },
    {
        name:"Mac",
        url:"https://www.mac2sell.net/medias/categories/macbook-pro-13.svg",
        redirect:"https://support.apple.com/en-in/guide/tvplus/apd53158ab1f/1.0/web/1.0"
    },
    {
        name:"AirPlay",
        url:"https://www.mac2sell.net/medias/categories/apple-tv.svg",
        redirect:"https://support.apple.com/en-in/guide/tvplus/welcome/web"
    }
];
let divMain=document.createElement("div")
divMain.setAttribute("class","botdiv")
 divInDivImg(data,divMain)
function divInDivImg(data,appendIn){
    data.forEach(function(elem){
        let div=document.createElement("div");
        let imge=document.createElement("img")
        imge.setAttribute("src",elem.url)
        imge.addEventListener("click",function(){
            if(elem.redirect!=undefined){
            window.location.href=elem.redirect;
            }
        })
        let para=document.createElement("p")
        para.innerText=elem.name;
        div.append(imge,para)
        appendIn.append(div)
    })
}
let heading2=document.createElement("h2")
heading2.innerText="See it on your big screen."
let anch2=document.createElement("a")
anch2.innerText="Set up your device >"
anch2.href="https://support.apple.com/en-in/guide/tvplus/welcome/web"
let anch3=document.createElement("a")
anch3.innerText="Explore compatible devices >"
anch3.href="https://www.apple.com/apple-tv-app/devices/"
let br=document.createElement("br")

let divMain2=document.createElement("div")
divMain2.setAttribute("id","botdiv2")

Data2=[
    {
        name:"Streaming Devices",
        url:"data:image/png;base64,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"
    },
    {
        name:"Smart TVs",
        url:"data:image/png;base64,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"
    },
    {
        name:"Gaming Consoles",
        url:"data:image/png;base64,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"
    }
]
divInDivImg(Data2,divMain2)

bottom.append(imge,heading1,para1,anch1,divMain,heading2,anch2,br,anch3,divMain2);

let sd=document.querySelector("#botdiv2 div:first-child")
sdData=["Roku","Fire TV","Google TV","Android TV"];
addPara(sdData,sd)
let st=document.querySelector("#botdiv2 div:first-child+div")
stData=["Samsung","LG","VIZIO","Sony"];
addPara(stData,st)
let gc=document.querySelector("#botdiv2 div:first-child+div+div")
gcData=["PlayStation","Xbox"]
addPara(gcData,gc)
function addPara(data1,appendIn){
    data1.forEach(function(ele){
        let para=document.createElement("p")
        para.innerText=ele;
        appendIn.append(para)
    })
}
let last=document.createElement("p")
last.innerText="Device availability varies by country or region"
last.setAttribute("class","last")
bottom.append(last)