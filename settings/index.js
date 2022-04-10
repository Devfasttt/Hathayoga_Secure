 
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    // import{ getDatabase,ref,set,onValue} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
  
    // const firebaseConfig = {
    
    // apiKey: "AIzaSyD7uhANfrSN9-BLxDfve58x6lzzVEX7EUk",
    
    // authDomain: "hatha-yoga-c3c4c.firebaseapp.com",
    
    // projectId: "hatha-yoga-c3c4c",
    
    // storageBucket: "hatha-yoga-c3c4c.appspot.com",
    
    // messagingSenderId: "80422494884",
    
    // appId: "1:80422494884:web:529f4d9dc4601d52e33c31",
    
    // measurementId: "G-PMQHP3QE61"
    
    // };
    
    //   // Initialize Firebase
    //   const app=initializeApp(firebaseConfig);
    // const container1=document.getElementById("container1")
    // const lastName = document.getElementById('lastName');
    // const addBtn = document.getElementById('addBtn');
    // const updateBtn = document.getElementById('updateBtn');
    
    
    // const database = getDatabase();
    
    // addBtn.addEventListener('click', e => {
    //   e.preventDefault();
    
    
    
    // set(ref(database,  container1.value), {
    //     text: lastName.value,
    //   });
    // });
    // updateBtn.addEventListener("click",e=>{
    //     e.preventDefault();
    
    // onValue(ref(database, "Nav_About"), (snapshot) => {
    //   const data = snapshot.val();
    //   linkAbout=data.text.toString()
    //   document.getElementById("__about").innerHTML=linkAbout
    //   console.log(linkAbout );
    // });
    // }
    
    // )




    
// let title = "Hathayoga Classes"
// let aboutTitle = "What is Classical Hathayoga"
// let aboutText = "In this video, Sadhguru says Hathayoga is not an exercise, not a twist and turn, not a stretching, it is a way of re-aligning your system to the cosmic geometry so that you are a perfect receptacle of everything worth knowing.<br> <br>Sadhguru brings back Hathayoga in its classical form, brings back certain dimensions of Hathayoga which are almost absent today. Sadhguru created Isha Hatha school of Yoga to train teachers who offer Classical Hathayoga all over the world.<br><br>We are the first Classical Hatha Yoga studio in Japan. We offer the full range of Isha Hatha Yoga Practices in Japan."
// let linkHome="Home"
// let linkCourses="Courses"
// let linkCTA="Learn!"
// let linkTeacher="Teacher"
// let coursesCardHeader="Courses"
// let CardTitle1="Angamardana"
// let CardTitle2="Yogasana"
// let CardTitle3="Surya Kriya"
// let CardTitle4="Surya Shakti"
// let CardTitle5="Bhuta Shuddhi"
// let CardDesc1 ="Learn from certified instructor, recommended by students with bilingual support."
// let CardDesc2 ="Learn from certified instructor, recommended by students with bilingual support."
// let CardDesc3 ="Learn from certified instructor, recommended by students with bilingual support."
// let CardDesc4 ="Learn from certified instructor, recommended by students with bilingual support."
// let CardDesc5 ="Learn from certified instructor, recommended by students with bilingual support."
// let CardLink1="./form.html" 
// let CardLink2="./form.html" 
// let CardLink3="./form.html" 
// let CardLink4="./form.html" 
// let CardLink5="./form.html" 
// let CardLinkText1="Express Interest"
// let CardLinkText2="Express Interest"
// let CardLinkText3="Express Interest"
// let CardLinkText4="Express Interest"
// let CardLinkText5="Express Interest"
// let TeacherAbtTitle="About the Teacher"
// let teacherDetails="  <br>Deepika has undergone an intensive 1,750 hours (21 weeks) residential training by Isha Hatha School of Yoga, at Coimbatore, India in 2021. She has been living in Tokyo, Japan since 2006. She always wanted to introduce Yoga in its classical form to Japan. She is now a full-time yoga teacher, offering classical Hathayoga programs designed by Sadhguru to Japan. <br> <br> 「ディピカ」は2021年にインド・コインバトール市にあるIsha Hatha School of Yogaで1750時間以上（21週間）の集中的なハタヨガ・先生トレニンーグに参加し、教師の資格を取得しました。 彼女は2006年から日本に住んでいます。彼女はいつもヨガを起源から伝われるクラシカルな形で日本に紹介したいと思っていました。すると、 彼女は現在フルタイムのヨガ教師となり、サドグルによって再発見された古典的なハタヨガ・プログラムを日本に提供しています。 しばらくは英語での授業になります。<br> "
// let ContactUsText="Contact Us"
// let emails="hathayogajapan@gmail.com"
// let phones="+81-80-4201-8493"
// let fbs="hathayogajapan"
// let ccs="Deepika 2022"
// let LegalNotice1="All images are property of their respective owners, we do not claim rights to these."
// let LegalNotice2="Image Courtesy: 🧘🏻‍♂️ Isha Foundation"
// window.onload=()=>{
// onValue(ref(database, "Nav_About"), (snapshot) => {
//       const data = snapshot.val();})
//     document.title = data.text.toString()}
//     document.getElementById("__home").innerHTML=linkHome
//     document.getElementById("__about").innerHTML=linkAbout
//     document.getElementById("__courses").innerHTML=linkCourses
//     document.getElementById("__teachhh").innerHTML=linkTeacher
//     document.getElementById("sd").innerHTML=linkCTA
//     document.getElementById("aboutText").innerHTML=aboutText
//     document.getElementById("aboutTitle").innerHTML=aboutTitle
//     document.getElementById("coursesCardHeader").innerHTML=coursesCardHeader
//     document.getElementById("CardTitle1").innerHTML=CardTitle1
//     document.getElementById("CardTitle2").innerHTML=CardTitle2
//     document.getElementById("CardTitle3").innerHTML=CardTitle3
//     document.getElementById("CardTitle4").innerHTML=CardTitle4
//     document.getElementById("CardTitle5").innerHTML=CardTitle5
//     document.getElementById("CardDesc1").innerHTML=CardDesc1
//     document.getElementById("CardDesc2").innerHTML=CardDesc2
//     document.getElementById("CardDesc3").innerHTML=CardDesc3
//     document.getElementById("CardDesc4").innerHTML=CardDesc4
//     document.getElementById("CardDesc5").innerHTML=CardDesc5
//     document.getElementById("CardLink1").href=CardLink1
//     document.getElementById("CardLink2").href=CardLink2
//     document.getElementById("CardLink3").href=CardLink3
//     document.getElementById("CardLink4").href=CardLink4
//     document.getElementById("CardLink5").href=CardLink5
//     document.getElementById("CardLinkText1").innerHTML=CardLinkText1
//     document.getElementById("CardLinkText2").innerHTML=CardLinkText2
//     document.getElementById("CardLinkText3").innerHTML=CardLinkText3
//     document.getElementById("CardLinkText4").innerHTML=CardLinkText4
//     document.getElementById("CardLinkText5").innerHTML=CardLinkText5
//     document.getElementById("wer").innerHTML=TeacherAbtTitle
//     document.getElementById("teacherDetails").innerHTML=teacherDetails
//     document.getElementById("ContactUsText").innerHTML=ContactUsText
//     document.getElementById("email").innerHTML=emails
//     document.getElementById("phone").innerHTML=phones
//     document.getElementById("fb").innerHTML=fbs
//     document.getElementById("cc").innerHTML=ccs
//     document.getElementById("notice").innerHTML=LegalNotice1
//     document.getElementById("legalnotice2").innerHTML=LegalNotice2