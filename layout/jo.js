import Head from "next/head";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,getDoc,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Jo = () => {
    const [imagesitem, setImagesitem] = useState([]);
    const [progresslogo, setProgresslogo] = useState(0);
    const [progress, setProgress] = useState(0);
    const [sale,setsale]=useState({})
    const onname = (e) => setsale({...sale,name:e.target.value,data:Date()})
  const ontele = (e) => setsale({...sale,tele:e.target.value})
  const onjop = (e) => setsale({...sale,jop:e.target.value})
  const onnation = (e) => setsale({...sale,nation:e.target.value})
  const oncv = (e) => setsale({...sale,cv:e.target.value})
  const uploadlogo = (e) => {
    const filelogo = e.target.files[0];
    if(filelogo){
     if(imagesitem.length<1){
    const filelogo = e.target.files[0];    
    const storage = getStorage();
    const storageRef = ref(storage, filelogo.name);
    const uploadTask = uploadBytesResumable(storageRef, filelogo);

    uploadTask.on('state_changed', 
    (snapshot) => {
      const progresslogo = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgresslogo(progresslogo)
      console.log('Upload is ' + progresslogo + '% done');          
    }, 
    (error) => {
    }, 
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setProgresslogo(0);

       
        setsale({...sale, cv:downloadURL})
        });
    }
  );}else{alert("أقصى سيرة ذاتية واحدة")}}
  };
  const onsend = async(e)=>{
    e.preventDefault() 
    const docRef = await setDoc(doc(db, "jops", sale.tele),sale); 
    setsale({name:"",tele:"",jop:"",nation:""}) 
    
    
}

    return (  
        <div className="mt-2">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <div className="row w-100 ">
    <h4 className="col-12 col-lg-3 title ms-auto"> أترك سيرتك الذاتية</h4>
    <p className="text-center cp m0">يسعدنا أن تكون في فريقنا أترك سيرتك الذاتية</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<form className="rtl" onSubmit={onsend}>
  <div class="form-row ">
    <div class="form-group col-md-6">
      <label for="inputEmail4">الاسم</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="الاسم بالكامل" onChange={onname} value={sale.name} required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">رقم الجوال</label>
      <input type="tele" class="form-control" id="inputPassword4" placeholder="رقم الجوال" onChange={ontele} value={sale.tele} required/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress"> الوظيفة</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="الوظيفة" onChange={onjop} value={sale.jop} required/>
  </div>
  <div class="form-group">
    <label for="inputAddress2"> الجنسية</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="الجنسية" onChange={onnation} value={sale.nation} required/>
  </div>
  <div className=" mb-3 w-75 ms-auto required">
<label htmlFor="htmlFormFileLg" className="form-label text-right text-primary">رفع السيرة الذاتية</label>
   <input className="form-control form-control-lg  text-dark" id="htmlFormFileLg" type="file" onChange={uploadlogo}/>
   </div>
   <div className="progress mb-3 w-75">
  <div className="progress-bar" role="progressbar" style={{width:` ${progress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{progress}</div>
</div>
        <div className="photo-grid  mb-3 w-75 ms-auto">
          {
            imagesitem.map((image) => (
              <img className="col-2" src={image} alt="" key={image} />
            ))}
        </div>
  <div className="ltr">
  <button type="submit" class="btn text-light mt-1  bcP" onSubmit={onsend}>ارسل</button>
  </div>
</form>
               
</div>
    );
}
 
export default Jo;