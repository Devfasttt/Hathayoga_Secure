
document.getElementById("abtn").addEventListener("click",()=>{window.open("./form.html")})
document.getElementById("klasd").addEventListener("click",()=>{window.open("./form.html")})
var email=document.getElementById("email")
email.addEventListener("pointerenter",()=>{
    email.style.color="orangered"
})
email.addEventListener("mouseleave",()=>{
    email.style.color="black"
})
email.addEventListener("click",()=>{
    window.open("mailto:"+ email.textContent)
})
const fb=document.getElementById("fb")
fb.addEventListener("pointerenter",()=>{
    fb.style.color="orangered"
})
fb.addEventListener("mouseleave",()=>{
    fb.style.color="black"
})
fb.addEventListener("click",()=>{
    window.open("https://www.facebook.com/"+fb.textContent)
})
const phone=document.getElementById("phone")
phone.addEventListener("pointerenter",()=>{
    phone.style.color="orangered"
})
phone.addEventListener("mouseleave",()=>{
    phone.style.color="black"
})
phone.addEventListener("click",()=>{
    window.open("tel:"+phone.textContent)
})
const v1=document.getElementById("▶1")
const v2=document.getElementById("▶2")
const v3=document.getElementById("▶3")
const v5=document.getElementById("▶5")
const vF=document.getElementById("iframee")
const ee=document.getElementById("ee")
ee.addEventListener("pointerenter",()=>{
    ee.style.transform="scale(1.4) translateY(-80px)"
    ee.style.cursor="pointer"
})
ee.addEventListener("mouseleave",()=>{
    ee.style.transform="scale(1) translateY(-110px)"
    ee.style.cursor="pointer"

})
ee.addEventListener("click",()=>{
    vF.src="https://www.youtube.com/embed/4ZdcGKUQufU"

    vF.style.display="none"
    ee.style.display="none"
})
v1.addEventListener("pointerenter",()=>{
    v1.style.transform="scale(1.4)"
})
v1.addEventListener("mouseleave",()=>{
    v1.style.transform="scale(1)"
})
v2.addEventListener("pointerenter",()=>{
    v2.style.transform="scale(1.4)"
})
v2.addEventListener("mouseleave",()=>{
    v2.style.transform="scale(1)"
})
v3.addEventListener("pointerenter",()=>{
    v3.style.transform="scale(1.4)"
})
v3.addEventListener("mouseleave",()=>{
    v3.style.transform="scale(1)"
})

v5.addEventListener("pointerenter",()=>{
    v5.style.transform="scale(1.4)"
})
v5.addEventListener("mouseleave",()=>{
    v5.style.transform="scale(1)"
})
v1.addEventListener("click",()=>{
    vF.style.display="block"
    ee.style.display="block"

    vF.src="https://www.youtube.com/embed/9aAzFTQOJJU"
})

v2.addEventListener("click",()=>{
    vF.style.display="block"
    ee.style.display="block"

    vF.src="https://www.youtube.com/embed/4ZdcGKUQufU"
})
v3.addEventListener("click",()=>{
    vF.style.display="block"
    ee.style.display="block"

    vF.src="https://www.youtube.com/embed/_wq-OiPk-pU"
})

v5.addEventListener("click",()=>{
    vF.style.display="block"
    ee.style.display="block"

    vF.src="https://www.youtube.com/embed/hc9g8u77g24"
})

// var visible=false
document.getElementById("😁").addEventListener("click",()=>{
    // visible=true

    document.getElementById("😁").style.display="none !important"
    document.getElementById("menuu").style.display="block !important"
    document.getElementById("menuu").style.opacity="1 !important"

})
document.getElementById("cross").addEventListener
("click",()=>{
    
        // visible=false
})

