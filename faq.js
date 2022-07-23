let heading=document.createElement("h1")
heading.innerText="Questions? Answers.";
let faq=document.querySelector(".FAQ")
faq.append(heading)

QandA=[
    {
        question:"What is Apple TV+?",
        answer:"Apple TV+ is a streaming service from Apple. It features exclusive Apple Original shows and movies from some of the industry's top talent, with new premieres arriving each month. Browse all of the available content on Apple TV+ inside the Apple TV app on the “Apple TV+” tab or here on tv.apple.com."
    },
    {
        question:"What does Apple TV+ include?",
        answer:"Apple TV+ includes Apple Original films and series—which are original shows and movies made exclusively for Apple. It also includes free access for anyone to watch Friday Night Baseball, provided through Apple TV+ in partnership with MLB (Major League Baseball). New shows and movies are being added to the streaming service often, so browse inside the Apple TV app or visit tv.apple.com often to see new releases."
    },
    {
        question:"Where can I watch Apple TV+?",
        answer:"Apple TV+ is an exclusive streaming subscription available in the Apple TV app. You can find Apple TV app on many of your favorite Apple devices. Plus, find the app on many smart TVs, streaming devices, game consoles, and some select cable boxes."
    },
    {
        question:"Can I watch Apple TV+ on my phone?",
        answer:"Apple TV+ is a streaming service that lives inside the Apple TV app—an app that brings Apple TV+ together with other streaming service subscriptions that you add. You can find the Apple TV app on iPhone, iPad, Apple TV 4K or HD, plus on many streaming devices and smart TVs like Roku, Samsung, LG, Panasonic, and more."
    },
    {
        question:"How to watch Apple TV+ on Android or Windows?",
        answer:"The easiest way to watch Apple TV+ on an Android phone or Windows device is to visit tv.apple.com. There, you can still sign in with an Apple ID, add Apple Original shows and movies to your Up Next watchlist, and keep track of what you're watching."
    },
    {
        question:"What can I watch on Apple TV+?",
        answer:"More Apple Original series are being added to the TV app frequently, so check back often to discover new TV shows on Apple TV+. Start by browsing in the Apple TV+ tab and popular shows like Severance, Slow Horses, and WeCrashed."
    },
    {
        question:"How do I get Apple TV+?",
        answer:"You can subscribe to Apple TV+ inside the Apple TV app on your mobile or living room device or on tv.apple.com. Your subscription to Apple TV+ will use the payment method associated with your Apple ID, which is your one sign-in for all things Apple. With one Apple account, it’s easy to manage your subscription in Settings on any device or on tv.apple.com."
    },
    {
        question:"Can I get Apple TV+ for free?",
        answer:"There are a few ways to try Apple TV+ for free. First, try 7 days of Apple TV+ for free by starting a trial in the Apple TV app on your iPhone, iPad, Apple TV 4K or HD, or on any streaming device. If you’ve recently purchased Apple hardware that includes a 12-month, 6-month, or 3-month or other complimentary free trial of Apple TV+, this offer will automatically appear in the Apple TV app when signed in with the Apple ID associated with your recent hardware purchase."
    },
    {
        question:"Is Apple TV+ accessible?",
        answer:"Apple TV+ is part of the Apple TV app, which includes many accessibility features—so you only have to focus on enjoying Apple Original shows and movies. All Apple Originals support Closed Captions and SDH (subtitles for the Deaf and Hard of Hearing) in addition to audio descriptions; plus the entire app supports VoiceOver,Apple’s built-in screenreader. Bold Text, Increase Contrast, and Reduce Motion settings are also available. Subtitles are supported for 40+ languages for all Apple TV+ titles.Learn about more accessibility options in the Apple TV app."
    },

]
faqFun(QandA,faq)
function faqFun(QandA,faq){
    QandA.forEach(function(elem,index){
        let divMain=document.createElement("div");
        let div=document.createElement("div")
        let Q=document.createElement("h2")
        Q.innerText=elem.question;
        let btn8=document.createElement("button")
        btn8.innerText="V";
        div.append(Q)
        divMain.append(div,btn8)
        let hr=document.createElement("hr")
        faq.append(divMain,hr)
        let show="yes";
        btn8.addEventListener("click",function(){
            if(show=="yes"){
                show="no"
                btn8.style.transform="rotate(180deg)"
                addAns(elem,div)
            } else{
                show="yes"
                delAns(elem,div,divMain,btn8)
            }
        })
    })
}

function addAns(elem,div){
            let A=document.createElement("h3")
            A.innerText=elem.answer;
            div.append(A);
}
function delAns(elem,div,divMain,btn8){
    div.innerHTML="";
    let Q=document.createElement("h2")
    Q.innerText=elem.question;
    btn8.style.transform="rotate(360deg)"
    div.append(Q)
    divMain.append(div,btn8)
}
