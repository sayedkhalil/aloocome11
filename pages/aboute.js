import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import About from "../layout/about";
import { async } from "@firebase/util";
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import Head from "next/head";
const Aboute = () => {
   const[getinfo,setgetinfo]=useState({})
   
    useEffect(async()=>{
        const infoRef = doc(db, "info", "info");
        const infoSnap = await getDoc(infoRef)
         const r =  infoSnap.data()?infoSnap.data().info:{}
         setgetinfo(r)
        
    },[])

    return (
    < div className="w-100 p-0 m-0 u2">
    <img className="w-100" src="nb.png" alt=""/>
    <div className="mt-1 ">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"/>
        <link rel="icon" href={getinfo.logo} type="image/x-icon" />
        </Head>
     <div className={`row ${styles.container}`}>
        <div className="col-8 col-lg-8 row">
            <img className="col-8 col-lg-4" src={getinfo.logo} alt=""/>
            <p className="d-none d-lg-block vv0">{getinfo.about}</p>
            <div className="col-12 row">
              <div className="col-12 col-lg-6 row">
                <a className="col-6" href="https://play.google.com/store/apps/details?id=com.aloo.userapp&hl=en&gl=US"><img className="w-100" src="play.png" alt=""/></a>
                <a className="col-6" href="https://apps.apple.com/us/app/aloo-app-customer/id1645615723"><img className="w-100"src="app.png" alt=""/></a>
              </div>
              <h6 className="col-12 col-lg-6 text-center">حمل التطبيق الآن</h6>  
            </div>
        </div>
       <img className="col-4 col-lg-4" src="pan.png" alt=""/>
       <p className="d-block d-lg-none vv0">{getinfo.about}</p>
     </div>
</div>
    </div>  
    );
}

export default Aboute;