import Head from "next/head";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,getDoc,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Opnion = () => {
    const [sale,setsale]=useState({})
    const onname = (e) => setsale({...sale,name:e.target.value,data:Date()})
  const ontele = (e) => setsale({...sale,tele:e.target.value})
  const onid = (e) => setsale({...sale,id:e.target.value})
  const onnation = (e) => setsale({...sale,nation:e.target.value})
  const onbirth = (e) => setsale({...sale,birth:e.target.value})
  const onexpire = (e) => setsale({...sale,expire:e.target.value})
  const onsend = async(e)=>{
    e.preventDefault() 
    const docRef = await setDoc(doc(db, "sales", sale.tele),sale); 
    setsale({name:"",tele:"",id:"",nation:""}) 
    
    
}

    return (  
        <div id="op" className="mt-2">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <div className="row w-100 ">
    <h4 className="col-12 col-lg-3 title ms-auto"> المندوب</h4>
    <p className="text-center cp m0">نسعى بتقديم خدماتنا لك فانضم إلينا</p>
<span className="text-end dsd m0">شروط التسجيل كمندوب: هوية سارية المفعول ، رخصة سارية ، استمارة سيارة سارية المفعول  ، سياررة موديل أكبر 2012 </span>
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
    <label for="inputAddress"> رقم الهوية</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="الهوية" onChange={onid} value={sale.id} required/>
  </div>
  <div class="form-group">
    <label for="inputAddress2"> الجنسية</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="الجنسية" onChange={onnation} value={sale.nation} required/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">تاريخ انتهاء الهوية</label>
      <input type="date" class="form-control" id="inputCity" onChange={onexpire} value={sale.expire} required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">تاريخ الميلاد</label>
      <input type="date" class="form-control" id="inputCity" onChange={onbirth} value={sale.birth} required/>
    </div>
    
  </div>
  <div className="ltr">
  <button type="submit" class="btn text-light mt-1  bcP" onSubmit={onsend}>انضم الآن</button>
  </div>
</form>
               
</div>
    );
}
 
export default Opnion;