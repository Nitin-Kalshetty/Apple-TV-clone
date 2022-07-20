    let userId=(localStorage.getItem("ID")) || 0;
    let HomeBut=localStorage.getItem("loggedin") || "Sign In";
    let Details=JSON.parse(localStorage.getItem("details")) || [];
    let btn=document.querySelector("#topNav>button")
    btn.innerText=HomeBut;


    btn.addEventListener("click",function(){
        dialogbox()
    })


    let count=0;
    let flag=true;


    function dialogbox(){
        let body=document.querySelector("body")

        let div=document.createElement("div")
        div.setAttribute("class","signin")

        let x=document.createElement("p");
        x.innerText= "×";
        x.addEventListener("click",function(){
           window.location.href="index.html"
        })

        let imge=document.createElement("img")
        imge.setAttribute("src","https://tv.apple.com/assets/brands/Apple_TV_plus_logo_white-2721485772b7d06c4e33379ce990870e.svg")
        
        let heading3=document.createElement("h3");
        heading3.innerText="Sign in with your Apple ID";
        
        let para=document.createElement("p")
        para.innerText="You will be signed in to Apple TV and Apple Music"
        
        let input1=document.createElement("input")
        input1.setAttribute("type","number")
        input1.setAttribute("placeholder","Apple ID")
        
        let btn1=document.createElement("button")
        btn1.setAttribute("type","click")
        btn1.innerText=">"

        let p1=document.createElement("p")
        p1.innerText="Create new Apple ID >"

        let p2=document.createElement("p")
        p2.innerText="Forgot Apple ID or password?"
    
        div.append(x,imge,heading3,para,input1,btn1,p1,p2)
        body.append(div)

        btn1.addEventListener("click",function(){
            let should=0;
                Details.forEach(function(elem){
                    if(input1.value==elem.userID){
                        should++;
                    }
                })
                if(should==0){
                    alert ("This UserID is not registered")
                } else if(flag==true && should>0){
                    checkID(div,btn1,input1)
                } else if(flag==false && should>0){
                    let input11=document.getElementById("typedPass")
                    checkIdAndPass(input1,input11,Details)
                } 
            
        })
        
        p1.addEventListener("click",function(){
            signup(div)
        })
        
        
    }


    function checkIdAndPass(id,pass,Details){
        let checkedData=0;
        Details.forEach(function(elem){
            if(id.value==elem.userID && pass.value==elem.password ){
                checkedData++;
                localStorage.setItem("loggedin",elem.firstName);
            }
            
        })
        if(checkedData==0){
            alert("Incorrect Credentials Please check again");
        } else{
                window.location.href="index.html";
        }
    }

    
    function checkID(div,btn1,input1){
        let input11=document.createElement("input")
        input11.setAttribute("type","password")
        input11.setAttribute("id","typedPass")
        input11.setAttribute("placeholder","password")
        flag=false;
        btn1.setAttribute("id","try")
        div.append(input11);
    }
    

    function signup(div){
        let x=document.createElement("p");
        x.innerText= "×";
        x.setAttribute("class","cancelBox")
        x.addEventListener("click",function(){
           window.location.href="index.html"
        })
        let form=document.createElement("form")
        div.innerHTML=""
        div.setAttribute("id","signUp")
        let imge=document.createElement("img")
        imge.setAttribute("src","https://tv.apple.com/assets/brands/Apple_TV_plus_logo_white-2721485772b7d06c4e33379ce990870e.svg")
        document.querySelector("body").append(div)
        let heading=document.createElement("h1")
        heading.innerText="Create Apple ID";

        let input1=document.createElement("input")
        input1.setAttribute("placeholder","FirstName")
        input1.setAttribute("id","FirstName")
        let label1=document.createElement("label")
        label1.innerText="FirstName"
        input1.append(label1)

        let input2=document.createElement("input")
        input2.setAttribute("placeholder","LastName")
        input2.setAttribute("id","LastName")

        let input3=document.createElement("input")
        input3.setAttribute("placeholder","Birthday")
        input3.setAttribute("id","Birthday")
        input3.addEventListener("click",function(){
        input3.setAttribute("type","date")
        })

        let input6=document.createElement("input")
        input6.setAttribute("type","email")
        input6.setAttribute("placeholder","Email")
        input6.setAttribute("id","Email")
        let label6=document.createElement("label")
        label6.innerText="Email"
        input6.append(label6)
        
        let input4=document.createElement("input")
        input4.setAttribute("type","password")
        input4.setAttribute("placeholder","Password")
        input4.setAttribute("id","Password")

        let checkDiv=document.createElement("div")
        checkDiv.setAttribute("class","checkDiv1")
        let input5=document.createElement("input")
        input5.setAttribute("type","checkbox")

        let span1=document.createElement("span")
        span1.innerText="Agree to Terms & Conditions"

        let para=document.createElement("p")
        para.innerText="By continuing, you acknowledge that you agree to the"

        let ancTer=document.createElement("a")
        ancTer.href="https://www.apple.com/legal/internet-services/itunes/"
        ancTer.innerText="Apple Media Services Terms & Conditions."
         checkDiv.append(input5,span1)
         let ContiB=document.createElement("button")
         ContiB.setAttribute("type","submit")
         ContiB.innerText="Continue"
         ContiB.setAttribute("id","signDat")


         ContiB.addEventListener("click",function(event){
            event.preventDefault();
            if(input1.value=="" || input2.value=="" || input3.value==""
            || input4.value=="" || input5.checked==false || input6.value==""){
                alert("Please fill all details")
            } else{
            storeDat(form);
            alert("Successfully Signed Up")
            window.location.href="index.html"
            }
         })
        para.append(ancTer)
        div.append(imge,input1,input2,input3,input6,input4,checkDiv,para)
        form.append(div,ContiB)
        document.querySelector("body").append(x,form)
    }   


    function storeDat(form){
        userId++;
        let obj={
            firstName:form.FirstName.value,
            lastName:form.LastName.value,
            dob:form.Birthday.value,
            email:form.Email.value,
            password:form.Password.value,
            userID:userId,
        } 
        Details.push(obj)
        localStorage.setItem("ID",userId)
        localStorage.setItem("details",JSON.stringify(Details))
    }





