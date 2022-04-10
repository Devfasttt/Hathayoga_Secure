    
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import{ getDatabase,ref,set,onValue} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

 const firebaseConfig = {
 
 apiKey:"AIzaSyD7uhANfrSN9-BLxDfve58x6lzzVEX7EUk",
 
 authDomain: "hatha-yoga-c3c4c.firebaseapp.com",
 
 projectId: "hatha-yoga-c3c4c",
 
 storageBucket: "hatha-yoga-c3c4c.appspot.com",
 
 messagingSenderId: "80422494884",
 
 appId: "1:80422494884:web:529f4d9dc4601d52e33c31",
 
 measurementId: "G-PMQHP3QE61"
 
 };
 
   // Initialize Firebase
   const app=initializeApp(firebaseConfig);
 const container1=document.getElementById("container1")
 const lastName = document.getElementById('lastName');
 
 
 const database = getDatabase();
 onValue(ref(database, "Nav_Head"), (snapshot) => {      
   let linkHead = snapshot.val().text.toString()
   document.getElementById("__home").innerHTML=linkHead
   document.getElementById("__home").innerHTML=linkHead
   document.getElementById("__home1").innerHTML=linkHead
 })
 onValue(ref(database, "Nav_About"), (snapshot) => {      
   let linkAbout = snapshot.val().text.toString()
   document.getElementById("__about").innerHTML=linkAbout
   document.getElementById("__about").innerHTML=linkAbout
   document.getElementById("__about1").innerHTML=linkAbout
 })
 onValue(ref(database, "VladTitle"), (snapshot) => {      
   let linkAsbout = snapshot.val().text.toString()
   document.getElementById("BodyTitle").innerHTML=linkAsbout
   
 })
 onValue(ref(database, "Nav_Courses"), (snapshot) => {      
   let linkCourses = snapshot.val().text.toString()
   document.getElementById("__courses").innerHTML=linkCourses
   document.getElementById("__courses").innerHTML=linkCourses
   document.getElementById("__courses1").innerHTML=linkCourses
 })
 onValue(ref(database, "Nav_Teacher"), (snapshot) => {      
   let linkTeacher = snapshot.val().text.toString()
   document.getElementById("__teachhh").innerHTML=linkTeacher
   document.getElementById("__teachhh").innerHTML=linkTeacher
   document.getElementById("__teachhh1").innerHTML=linkTeacher
 })
//  onValue(ref(database, "Nav_Button"), (snapshot) => {      
//    let linkCTA = snapshot.val().text.toString()
//    document.getElementById("sd").innerHTML=linkCTA
//  })VladTitle
 onValue(ref(database, "About_Title"), (snapshot) => {      
   let aboutTitle = snapshot.val().text.toString()
   document.getElementById("aboutTitle").innerHTML=aboutTitle
 })
 onValue(ref(database, "About_Description"), (snapshot) => {      
   let aboutTitle = snapshot.val().text.toString()
   document.getElementById("aboutText").innerHTML=aboutTitle
 })
 onValue(ref(database, "CardTitle1"), (snapshot) => {      
   let CardTitle1 = snapshot.val().text.toString()
   document.getElementById("CardTitle1").innerHTML=CardTitle1
 })
 onValue(ref(database, "CardTitle2"), (snapshot) => {      
   let CardTitle2 = snapshot.val().text.toString()
   document.getElementById("CardTitle2").innerHTML=CardTitle2
 })  
   onValue(ref(database, "CardTitle3"), (snapshot) => {      
   let CardTitle3 = snapshot.val().text.toString()
   document.getElementById("CardTitle3").innerHTML=CardTitle3
 })   
  onValue(ref(database, "CardTitle4"), (snapshot) => {      
   let CardTitle4 = snapshot.val().text.toString()
   document.getElementById("CardTitle4").innerHTML=CardTitle4
 })   
  onValue(ref(database, "CardTitle5"), (snapshot) => {      
   let CardTitle5 = snapshot.val().text.toString()
   document.getElementById("CardTitle5").innerHTML=CardTitle5
 })
 onValue(ref(database, "CardDesc1"), (snapshot) => {      
   let CardDesc1 = snapshot.val().text.toString()
   document.getElementById("CardDesc1").innerHTML=CardDesc1
 })
 onValue(ref(database, "CardDesc2"), (snapshot) => {      
   let CardDesc2 = snapshot.val().text.toString()
   document.getElementById("CardDesc2").innerHTML=CardDesc2
 })
 onValue(ref(database, "CardDesc3"), (snapshot) => {      
   let CardDesc3 = snapshot.val().text.toString()
   document.getElementById("CardDesc3").innerHTML=CardDesc3
 })
 onValue(ref(database, "CardDesc4"), (snapshot) => {      
   let CardDesc4 = snapshot.val().text.toString()
   document.getElementById("CardDesc4").innerHTML=CardDesc4
 })
 onValue(ref(database, "CardDesc5"), (snapshot) => {      
   let CardDesc5 = snapshot.val().text.toString()
   document.getElementById("CardDesc5").innerHTML=CardDesc5
 })
 onValue(ref(database, "CardBtnLink1"), (snapshot) => {      
   let CardLink1 = snapshot.val().text.toString()
   document.getElementById("CardLink1").href=CardLink1
 })
 onValue(ref(database, "CardBtnLink2"), (snapshot) => {      
   let CardLink2 = snapshot.val().text.toString()
   document.getElementById("CardLink2").href=CardLink2
 })
 onValue(ref(database, "CardBtnLink3"), (snapshot) => {      
   let CardLink3 = snapshot.val().text.toString()
   document.getElementById("CardLink3").href=CardLink3
 })
 onValue(ref(database, "CardBtnLink4"), (snapshot) => {      
   let CardLink4 = snapshot.val().text.toString()
   document.getElementById("CardLink4").href=CardLink4
 })
 onValue(ref(database, "CardBtnLink5"), (snapshot) => {      
   let CardLink5 = snapshot.val().text.toString()
   document.getElementById("CardLink5").href=CardLink5
 })
 onValue(ref(database, "CardBtn1"), (snapshot) => {      
   let CardLinkText1 = snapshot.val().text.toString()
   document.getElementById("CardLinkText1").index=CardLinkText1
 })
 onValue(ref(database, "CardBtn2"), (snapshot) => {      
   let CardLinkText2 = snapshot.val().text.toString()
   document.getElementById("CardLinkText2").innerHTML=CardLinkText2
 })
 onValue(ref(database, "CardBtn3"), (snapshot) => {      
   let CardLinkText3 = snapshot.val().text.toString()
   document.getElementById("CardLinkText3").innerHTML=CardLinkText3
 })
 onValue(ref(database, "CardBtn4"), (snapshot) => {      
   let CardLinkText4 = snapshot.val().text.toString()
   document.getElementById("CardLinkText4").innerHTML=CardLinkText4
 })
 onValue(ref(database, "CardBtn5"), (snapshot) => {      
   let CardLinkText5 = snapshot.val().text.toString()
   document.getElementById("CardLinkText5").innerHTML=CardLinkText5
 })
 onValue(ref(database, "coursesCardHeader"), (snapshot) => {      
   let coursesCardHeader = snapshot.val().text.toString()
   document.getElementById("coursesCardHeader").innerHTML=coursesCardHeader
 })
 onValue(ref(database, "Teacher_Title"), (snapshot) => {      
   let TeacherAbtTitle = snapshot.val().text.toString()
   document.getElementById("wer").innerHTML=TeacherAbtTitle
 })
 onValue(ref(database, "Teacher_Description"), (snapshot) => {      
   let TeacherAbtDetails = snapshot.val().text.toString()
   document.getElementById("teacherDetails").innerHTML=TeacherAbtDetails
 })
 onValue(ref(database, "Footer_Title"), (snapshot) => {      
   let ContactUsText = snapshot.val().text.toString()
   document.getElementById("ContactUsText").innerHTML=ContactUsText
 })
 onValue(ref(database, "Email"), (snapshot) => {      
   let emails = snapshot.val().text.toString()
   document.getElementById("email").innerHTML=emails
 })
 onValue(ref(database, "Phone"), (snapshot) => {      
   let phones = snapshot.val().text.toString()
   document.getElementById("phone").innerHTML=phones
 })
 onValue(ref(database, "Facebook"), (snapshot) => {      
   let fbs = snapshot.val().text.toString()
   document.getElementById("fb").innerHTML=fbs
 })
 onValue(ref(database, "Notice"), (snapshot) => {      
   let LegalNotice1 = snapshot.val().text.toString()
   document.getElementById("notice").innerHTML=LegalNotice1
 })
 onValue(ref(database, "ImageNotice"), (snapshot) => {      
   let LegalNotice2 = snapshot.val().text.toString()
   document.getElementById("legalnotice2").innerHTML=LegalNotice2
 })
 onValue(ref(database, "Copyright"), (snapshot) => {      
   let ccs = snapshot.val().text.toString()
   document.getElementById("cc").innerHTML=ccs
 })
 onValue(ref(database, "VadTitle"), (snapshot) => {      
   let vtitle = snapshot.val().text.toString()
   document.title=vtitle
 })

 window.addEventListener("load",e=>{
     e.preventDefault();
     document.getElementById("sd").addEventListener("click",()=>{
     if(document.getElementById("sd").innerText==="Toggle to Japanese")
        {
            document.getElementById("sd").innerText="Toggle to English"
            console.log("Toggle to English")
            onValue(ref(database, "Nav_Head"), (snapshot) => {      
                let linkHead = snapshot.val().japanese.toString()
                document.getElementById("__home").innerHTML=linkHead
                document.getElementById("__home").innerHTML=linkHead
                document.getElementById("__home1").innerHTML=linkHead
              })
              onValue(ref(database, "Nav_About"), (snapshot) => {      
                let linkAbout = snapshot.val().japanese.toString()
                document.getElementById("__about").innerHTML=linkAbout
                document.getElementById("__about").innerHTML=linkAbout
                document.getElementById("__about1").innerHTML=linkAbout
              })
              onValue(ref(database, "VladTitle"), (snapshot) => {      
                let linkAsbout = snapshot.val().japanese.toString()
                document.getElementById("BodyTitle").innerHTML=linkAsbout
                
              })
              onValue(ref(database, "Nav_Courses"), (snapshot) => {      
                let linkCourses = snapshot.val().japanese.toString()
                document.getElementById("__courses").innerHTML=linkCourses
                document.getElementById("__courses").innerHTML=linkCourses
                document.getElementById("__courses1").innerHTML=linkCourses
              })
              onValue(ref(database, "Nav_Teacher"), (snapshot) => {      
                let linkTeacher = snapshot.val().japanese.toString()
                document.getElementById("__teachhh").innerHTML=linkTeacher
                document.getElementById("__teachhh").innerHTML=linkTeacher
                document.getElementById("__teachhh1").innerHTML=linkTeacher
              })
//  onValue(ref(database, "Nav_Button"), (snapshot) => {      
//    let linkCTA = snapshot.val().japanese.toString()
//    document.getElementById("sd").innerHTML=linkCTA
//  })

 onValue(ref(database, "About_Title"), (snapshot) => {      
   let aboutTitle = snapshot.val().japanese.toString()
   document.getElementById("aboutTitle").innerHTML=aboutTitle
 })
 onValue(ref(database, "About_Description"), (snapshot) => {      
   let aboutTitle = snapshot.val().japanese.toString()
   document.getElementById("aboutText").innerHTML=aboutTitle
 })
 onValue(ref(database, "CardTitle1"), (snapshot) => {      
   let CardTitle1 = snapshot.val().japanese.toString()
   document.getElementById("CardTitle1").innerHTML=CardTitle1
 })
 onValue(ref(database, "CardTitle2"), (snapshot) => {      
   let CardTitle2 = snapshot.val().japanese.toString()
   document.getElementById("CardTitle2").innerHTML=CardTitle2
 })  
   onValue(ref(database, "CardTitle3"), (snapshot) => {      
   let CardTitle3 = snapshot.val().japanese.toString()
   document.getElementById("CardTitle3").innerHTML=CardTitle3
 })   
  onValue(ref(database, "CardTitle4"), (snapshot) => {      
   let CardTitle4 = snapshot.val().japanese.toString()
   document.getElementById("CardTitle4").innerHTML=CardTitle4
 })   
  onValue(ref(database, "CardTitle5"), (snapshot) => {      
   let CardTitle5 = snapshot.val().japanese.toString()
   document.getElementById("CardTitle5").innerHTML=CardTitle5
 })
 onValue(ref(database, "CardDesc1"), (snapshot) => {      
   let CardDesc1 = snapshot.val().japanese.toString()
   document.getElementById("CardDesc1").innerHTML=CardDesc1
 })
 onValue(ref(database, "CardDesc2"), (snapshot) => {      
   let CardDesc2 = snapshot.val().japanese.toString()
   document.getElementById("CardDesc2").innerHTML=CardDesc2
 })
 onValue(ref(database, "CardDesc3"), (snapshot) => {      
   let CardDesc3 = snapshot.val().japanese.toString()
   document.getElementById("CardDesc3").innerHTML=CardDesc3
 })
 onValue(ref(database, "CardDesc4"), (snapshot) => {      
   let CardDesc4 = snapshot.val().japanese.toString()
   document.getElementById("CardDesc4").innerHTML=CardDesc4
 })
 onValue(ref(database, "CardDesc5"), (snapshot) => {      
   let CardDesc5 = snapshot.val().japanese.toString()
   document.getElementById("CardDesc5").innerHTML=CardDesc5
 })
 onValue(ref(database, "CardBtnLink1"), (snapshot) => {      
   let CardLink1 = snapshot.val().japanese.toString()
   document.getElementById("CardLink1").href=CardLink1
 })
 onValue(ref(database, "CardBtnLink2"), (snapshot) => {      
   let CardLink2 = snapshot.val().japanese.toString()
   document.getElementById("CardLink2").href=CardLink2
 })
 onValue(ref(database, "CardBtnLink3"), (snapshot) => {      
   let CardLink3 = snapshot.val().japanese.toString()
   document.getElementById("CardLink3").href=CardLink3
 })
 onValue(ref(database, "CardBtnLink4"), (snapshot) => {      
   let CardLink4 = snapshot.val().japanese.toString()
   document.getElementById("CardLink4").href=CardLink4
 })
 onValue(ref(database, "CardBtnLink5"), (snapshot) => {      
   let CardLink5 = snapshot.val().japanese.toString()
   document.getElementById("CardLink5").href=CardLink5
 })
 onValue(ref(database, "CardBtn1"), (snapshot) => {      
   let CardLinkText1 = snapshot.val().japanese.toString()
   document.getElementById("CardLinkText1").index=CardLinkText1
 })
 onValue(ref(database, "CardBtn2"), (snapshot) => {      
   let CardLinkText2 = snapshot.val().japanese.toString()
   document.getElementById("CardLinkText2").innerHTML=CardLinkText2
 })
 onValue(ref(database, "CardBtn3"), (snapshot) => {      
   let CardLinkText3 = snapshot.val().japanese.toString()
   document.getElementById("CardLinkText3").innerHTML=CardLinkText3
 })
 onValue(ref(database, "CardBtn4"), (snapshot) => {      
   let CardLinkText4 = snapshot.val().japanese.toString()
   document.getElementById("CardLinkText4").innerHTML=CardLinkText4
 })
 onValue(ref(database, "CardBtn5"), (snapshot) => {      
   let CardLinkText5 = snapshot.val().japanese.toString()
   document.getElementById("CardLinkText5").innerHTML=CardLinkText5
 })
 onValue(ref(database, "coursesCardHeader"), (snapshot) => {      
   let coursesCardHeader = snapshot.val().japanese.toString()
   document.getElementById("coursesCardHeader").innerHTML=coursesCardHeader
 })
 onValue(ref(database, "Teacher_Title"), (snapshot) => {      
   let TeacherAbtTitle = snapshot.val().japanese.toString()
   document.getElementById("wer").innerHTML=TeacherAbtTitle
 })
 onValue(ref(database, "Teacher_Description"), (snapshot) => {      
   let TeacherAbtDetails = snapshot.val().japanese.toString()
   document.getElementById("teacherDetails").innerHTML=TeacherAbtDetails
 })
 onValue(ref(database, "Footer_Title"), (snapshot) => {      
   let ContactUsText = snapshot.val().japanese.toString()
   document.getElementById("ContactUsText").innerHTML=ContactUsText
 })
 onValue(ref(database, "Email"), (snapshot) => {      
   let emails = snapshot.val().japanese.toString()
   document.getElementById("email").innerHTML=emails
 })
 onValue(ref(database, "Phone"), (snapshot) => {      
   let phones = snapshot.val().japanese.toString()
   document.getElementById("phone").innerHTML=phones
 })
 onValue(ref(database, "Facebook"), (snapshot) => {      
   let fbs = snapshot.val().japanese.toString()
   document.getElementById("fb").innerHTML=fbs
 })
 onValue(ref(database, "Notice"), (snapshot) => {      
   let LegalNotice1 = snapshot.val().japanese.toString()
   document.getElementById("notice").innerHTML=LegalNotice1
 })
 onValue(ref(database, "ImageNotice"), (snapshot) => {      
   let LegalNotice2 = snapshot.val().japanese.toString()
   document.getElementById("legalnotice2").innerHTML=LegalNotice2
 })
 onValue(ref(database, "Copyright"), (snapshot) => {      
   let ccs = snapshot.val().japanese.toString()
   document.getElementById("cc").innerHTML=ccs
 })
 onValue(ref(database, "VadTitle"), (snapshot) => {      
   let vtitle = snapshot.val().japanese.toString()
   document.title=vtitle
 })
        }
        else{
            document.getElementById("sd").innerText="Toggle to Japanese"
            console.log("Toggle to Japanese")
            onValue(ref(database, "Nav_Head"), (snapshot) => {      
   let linkHead = snapshot.val().text.toString()
   document.getElementById("__home").innerHTML=linkHead
   document.getElementById("__home1").innerHTML=linkHead

 })
 onValue(ref(database, "Nav_About"), (snapshot) => {      
   let linkAbout = snapshot.val().text.toString()
   document.getElementById("__about").innerHTML=linkAbout
   document.getElementById("__about1").innerHTML=linkAbout

 })
 onValue(ref(database, "Nav_Courses"), (snapshot) => {      
   let linkCourses = snapshot.val().text.toString()
   document.getElementById("__courses").innerHTML=linkCourses
   document.getElementById("__courses1").innerHTML=linkCourses

 })
 onValue(ref(database, "Nav_Teacher"), (snapshot) => {      
   let linkTeacher = snapshot.val().text.toString()
   document.getElementById("__teachhh").innerHTML=linkTeacher
   document.getElementById("__teachhh1").innerHTML=linkTeacher
 })
 
//  onValue(ref(database, "Nav_Button"), (snapshot) => {      
//    let linkCTA = snapshot.val().text.toString()
//    document.getElementById("sd").innerHTML=linkCTA
//  })
 onValue(ref(database, "About_Title"), (snapshot) => {      
   let aboutTitle = snapshot.val().text.toString()
   document.getElementById("aboutTitle").innerHTML=aboutTitle
 })
 onValue(ref(database, "About_Description"), (snapshot) => {      
   let aboutTitle = snapshot.val().text.toString()
   document.getElementById("aboutText").innerHTML=aboutTitle
 })
 onValue(ref(database, "CardTitle1"), (snapshot) => {      
   let CardTitle1 = snapshot.val().text.toString()
   document.getElementById("CardTitle1").innerHTML=CardTitle1
 })
 onValue(ref(database, "CardTitle2"), (snapshot) => {      
   let CardTitle2 = snapshot.val().text.toString()
   document.getElementById("CardTitle2").innerHTML=CardTitle2
 })  
   onValue(ref(database, "CardTitle3"), (snapshot) => {      
   let CardTitle3 = snapshot.val().text.toString()
   document.getElementById("CardTitle3").innerHTML=CardTitle3
 })   
  onValue(ref(database, "CardTitle4"), (snapshot) => {      
   let CardTitle4 = snapshot.val().text.toString()
   document.getElementById("CardTitle4").innerHTML=CardTitle4
 })   
  onValue(ref(database, "CardTitle5"), (snapshot) => {      
   let CardTitle5 = snapshot.val().text.toString()
   document.getElementById("CardTitle5").innerHTML=CardTitle5
 })
 onValue(ref(database, "CardDesc1"), (snapshot) => {      
   let CardDesc1 = snapshot.val().text.toString()
   document.getElementById("CardDesc1").innerHTML=CardDesc1
 })
 onValue(ref(database, "CardDesc2"), (snapshot) => {      
   let CardDesc2 = snapshot.val().text.toString()
   document.getElementById("CardDesc2").innerHTML=CardDesc2
 })
 onValue(ref(database, "CardDesc3"), (snapshot) => {      
   let CardDesc3 = snapshot.val().text.toString()
   document.getElementById("CardDesc3").innerHTML=CardDesc3
 })
 onValue(ref(database, "CardDesc4"), (snapshot) => {      
   let CardDesc4 = snapshot.val().text.toString()
   document.getElementById("CardDesc4").innerHTML=CardDesc4
 })
 onValue(ref(database, "CardDesc5"), (snapshot) => {      
   let CardDesc5 = snapshot.val().text.toString()
   document.getElementById("CardDesc5").innerHTML=CardDesc5
 })
 onValue(ref(database, "CardBtnLink1"), (snapshot) => {      
   let CardLink1 = snapshot.val().text.toString()
   document.getElementById("CardLink1").href=CardLink1
 })
 onValue(ref(database, "CardBtnLink2"), (snapshot) => {      
   let CardLink2 = snapshot.val().text.toString()
   document.getElementById("CardLink2").href=CardLink2
 })
 onValue(ref(database, "CardBtnLink3"), (snapshot) => {      
   let CardLink3 = snapshot.val().text.toString()
   document.getElementById("CardLink3").href=CardLink3
 })
 onValue(ref(database, "CardBtnLink4"), (snapshot) => {      
   let CardLink4 = snapshot.val().text.toString()
   document.getElementById("CardLink4").href=CardLink4
 })
 onValue(ref(database, "CardBtnLink5"), (snapshot) => {      
   let CardLink5 = snapshot.val().text.toString()
   document.getElementById("CardLink5").href=CardLink5
 })
 onValue(ref(database, "CardBtn1"), (snapshot) => {      
   let CardLinkText1 = snapshot.val().text.toString()
   document.getElementById("CardLinkText1").index=CardLinkText1
 })
 onValue(ref(database, "CardBtn2"), (snapshot) => {      
   let CardLinkText2 = snapshot.val().text.toString()
   document.getElementById("CardLinkText2").innerHTML=CardLinkText2
 })
 onValue(ref(database, "CardBtn3"), (snapshot) => {      
   let CardLinkText3 = snapshot.val().text.toString()
   document.getElementById("CardLinkText3").innerHTML=CardLinkText3
 })
 onValue(ref(database, "CardBtn4"), (snapshot) => {      
   let CardLinkText4 = snapshot.val().text.toString()
   document.getElementById("CardLinkText4").innerHTML=CardLinkText4
 })
 onValue(ref(database, "CardBtn5"), (snapshot) => {      
   let CardLinkText5 = snapshot.val().text.toString()
   document.getElementById("CardLinkText5").innerHTML=CardLinkText5
 })
 onValue(ref(database, "coursesCardHeader"), (snapshot) => {      
   let coursesCardHeader = snapshot.val().text.toString()
   document.getElementById("coursesCardHeader").innerHTML=coursesCardHeader
 })
 onValue(ref(database, "Teacher_Title"), (snapshot) => {      
   let TeacherAbtTitle = snapshot.val().text.toString()
   document.getElementById("wer").innerHTML=TeacherAbtTitle
 })
 onValue(ref(database, "Teacher_Description"), (snapshot) => {      
   let TeacherAbtDetails = snapshot.val().text.toString()
   document.getElementById("teacherDetails").innerHTML=TeacherAbtDetails
 })
 onValue(ref(database, "Footer_Title"), (snapshot) => {      
   let ContactUsText = snapshot.val().text.toString()
   document.getElementById("ContactUsText").innerHTML=ContactUsText
 })
 onValue(ref(database, "Email"), (snapshot) => {      
   let emails = snapshot.val().text.toString()
   document.getElementById("email").innerHTML=emails
 })
 onValue(ref(database, "Phone"), (snapshot) => {      
   let phones = snapshot.val().text.toString()
   document.getElementById("phone").innerHTML=phones
 })
 onValue(ref(database, "Facebook"), (snapshot) => {      
   let fbs = snapshot.val().text.toString()
   document.getElementById("fb").innerHTML=fbs
 })
 onValue(ref(database, "Notice"), (snapshot) => {      
   let LegalNotice1 = snapshot.val().text.toString()
   document.getElementById("notice").innerHTML=LegalNotice1
 })
 onValue(ref(database, "ImageNotice"), (snapshot) => {      
   let LegalNotice2 = snapshot.val().text.toString()
   document.getElementById("legalnotice2").innerHTML=LegalNotice2
 })
 onValue(ref(database, "Copyright"), (snapshot) => {      
   let ccs = snapshot.val().text.toString()
   document.getElementById("cc").innerHTML=ccs
 })
 onValue(ref(database, "VadTitle"), (snapshot) => {      
   let vtitle = snapshot.val().text.toString()
   document.title=vtitle
 })
        }
 })
 document.getElementById("sd").style.display="none"
 document.getElementById("fb").style.display="none"
 document.getElementById("iframee").src="https://www.youtube.com/embed/hc9g8u77g24"

 }


 
 )
