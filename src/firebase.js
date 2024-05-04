
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAWFYwps27P11GL6y3Cf5WKTpZaBkB_daI",
  authDomain: "netflix-clone-88b35.firebaseapp.com",
  projectId: "netflix-clone-88b35",
  storageBucket: "netflix-clone-88b35.appspot.com",
  messagingSenderId: "806076385045",
  appId: "1:806076385045:web:391cb6f64d0afb24034b1c"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const db=getFirestore(app);

const signUp=async(name,email,password)=>{
    try {
        const response=await createUserWithEmailAndPassword(auth,email,password)
        const user=response.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }

}
 const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);

    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }

 }
 const logout=async()=>{
    await signOut(auth)
 }

 export{auth,db,login,signUp,logout};