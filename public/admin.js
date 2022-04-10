      
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import{ getDatabase,ref,set} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
 import{ getAuth,isSignInWithEmailLink,signInWithEmailLink , sendSignInLinkToEmail} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

 const firebaseConfig = {
 
 apiKey: "AIzaSyD7uhANfrSN9-BLxDfve58x6lzzVEX7EUk",
 
 authDomain: "hatha-yoga-c3c4c.firebaseapp.com",
 
 projectId: "hatha-yoga-c3c4c",
 
 storageBucket: "hatha-yoga-c3c4c.appspot.com",
 
 messagingSenderId: "80422494884",
 
 appId: "1:80422494884:web:529f4d9dc4601d52e33c31",
 
 measurementId: "G-PMQHP3QE61"
 
 };
 
   // Initialize Firebase
   const app=initializeApp(firebaseConfig);


   const auth = getAuth();
 
   const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:8008/admin',
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
  };

document.getElementById("EmailSignin").addEventListener("click",()=>{
    
    sendSignInLinkToEmail(auth, "veerasriv@gmail.com", actionCodeSettings)

    .then(() => {
      alert("link sent")
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', "veerasriv@gmail.com");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error1")
      console.log(errorCode)
    });


})
  

if (isSignInWithEmailLink(auth, window.location.href)) {
    // let email = "veerasriv@gmail.com"
    
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, "veerasriv@gmail.com", window.location.href)
      .then((result) => {
        // Clear email from storage.
        alert("Successfully Signed in!")
        document.getElementById("conetct").style.display="block"
        document.getElementById("EmailSignin").style.display="none"

        window.localStorage.removeItem('emailForSignIn');
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        console.log(error)
        alert("error2")

      });
  
}


 const container1=document.getElementById("container1")
 const container2=document.getElementById("container2")

 const lastName = document.getElementById('lastName');
 const lastName1 = document.getElementById('lastName1');

 const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', e => {
   e.preventDefault();

 set(ref(getDatabase(),  container1.value), {
    text: lastName.value,

    japanese: lastName1.value,
   });
 });