import Head from "next/head";
import styles from '../styles/layout1.module.css'
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Link from "next/link";

const Layout1 = ({children}) => {
  const de=[]
  var init ={}
  const[call,setcall]=useState('discall')
  const [appState, setAppState] = useAppContext();
  const[cart,setcart]=useState([])
 useEffect(async()=>{
  const codelist = collection(db, 'category');
  const codesnapshot = await getDocs(codelist);
  const infoRef = doc(db, "info", "info");
  const infoSnap = await getDoc(infoRef)
  const getinfo =  infoSnap.data()?setinfo(infoSnap.data().info):{}
  const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
  setcategory(de)
  setcategory1(de)
  setcategory2(de)
  return catolist,getinfo
 },[])
 const [category1,setcategory1]=useState([]);
const [category2,setcategory2]=useState([]);
const [category,setcategory]=useState([]);
const [info,setinfo]=useState({});
const[activ,setactiv]=useState('')
const[activ1,setactiv1]=useState('')
const[nav,setnav]=useState("nav-side")
const handleClickScroll = () => {
  const element = document.getElementById('op');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const onncal=()=>{
  call=="call"?setcall("discall"):setcall("call")
 }
const fixed=()=>{
 activ=="fixed-active"?setactiv(""):setactiv("fixed-active");setactiv1('')
}
const fixed1=()=>{
  activ1=="fixed-active"?setactiv1(""):setactiv1("fixed-active");setactiv('')
 }
 const onnave=()=>{
   nav=="nav-side-active"?setnav("nav-side"):setnav("nav-side-active")
 }
 document.addEventListener("scroll",()=>{setnav("nav-side")})

  return (  
< div >
<Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous"></script>
</Head>
<div className="divlarg d-none d-lg-block ">
<nav className="navbar navbar-light bg-white">
  <div className="container">
  <div className="wrapper text-center">
  {info.face? <a href={info.face} className="icon p-1 facebook">
    <div className="tooltip coloric">Facebook</div>
    <span><i id="coloric" className="fab coloric  fa-facebook-f"></i></span>
  </a>:""}
  {info.twitter?<a href={info.twitter} className="icon  p-1 twitter">
    <div className="tooltip coloric">Twitter</div>
    <span><i id="coloric" className="fab coloric  fa-twitter"></i></span>
  </a>:""}
  {info.insta?<a href={info.insta} className="icon  p-1 instagram">
    <div className="tooltip coloric">Instagram</div>
    <span><i id="coloric" className="fab coloric  fa-instagram"></i></span>
  </a>:""}
 {info.snap?<a href={info.snap} className="icon  p-1 github">
    <div className="tooltip coloric">Github</div>
    <span><i id="coloric" className="fab coloric  fa-snapchat"></i></span>
  </a>:""}
  {info.linked?<a href={info.linked} className="icon  p-1 youtube">
    <div className="tooltip coloric">Youtube</div>
    <span><i id="coloric" className="fab coloric  fa-linkedin"></i></span>
  </a>:""}
  <span className="ppp">aloo_com_sa</span>
  <a  href={`https://api.whatsapp.com/send?phone=${info.whats}`}><i id="coloric"  className="fab fa-whatsapp   "></i></a>
  <a className="ppp" href={`tel:0566642792}`}>{info.whats}</a>
</div>
    <Link href={`/`}>
    <a className="navbar-brand" href="#">
      <img src={info.logo} alt="" width="100" height="70" className="d-inline-block align-text-top"/>
    </a>
    </Link>
  </div>
</nav>
<ul className={`nav justify-content-center ${styles.navdesk}`}>
<li className="nav-item ">
    <Link href="/aboute">
    <a className="nav-link text-dark " >حمل التطبيق</a>
    </Link>
  </li>
  <li className="nav-item ">
    <Link href="/jop">
    <a className="nav-link text-dark " >التوظيف</a>
    </Link>
  </li>
  <li className="nav-item ">
    <Link href="/restraunt">
    <a className="nav-link text-dark " >سجل كمطعم</a>
    </Link>
  </li>
  <li className="nav-item ">
    <Link href="/captain">
    <a className="nav-link text-dark " >سجل كمندوب</a>
    </Link>
  </li>
  <li className="nav-item ">
    <Link href="/aboute">
    <a className="nav-link text-dark " >من نحن</a>
    </Link>
  </li>
  
            <li className="nav-item ">
    <Link href="/">
    <a className="nav-link text-dark " >الرئيسية</a>
    </Link>
  </li>
</ul>
</div>
<div className="divsmal d-block  d-lg-none">
<nav className="navbar navbar-light bg-white">
  <div className="container">
  
  </div>
</nav>
<nav className={`navbar navbar-expand-lg z10 navbar-light bg-wight ${styles.navmob}`}>
  <div className="container-fluid bg-white">
  <button className="btn btn-secondary btn-sm"onClick={onncal} >اتصل بنا </button> 
    <button className="navbar-toggler" type="button" onClick={onnave}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="  navbar-collapse " >
      <ul className={`navbar-nav   ${nav} `}>
        <li className="nav-item text-end ms-auto">
           <Link href={`/`}>
          <a className="nav-link active" aria-current="page" >الرئيسية</a>
          </Link>
        </li>
   
       <li className="nav-item text-end ms-auto"  onClick={()=>setnav("nav-side")}>
             
          <a className="nav-link  " href='/aboute'>من نحن</a>
             
       </li>
       <li className="nav-item text-end ms-auto"  onClick={()=>setnav("nav-side")}>
             
             <a className="nav-link  " href='/captain'>سجل كمندوب</a>
                
          </li>
          <li className="nav-item text-end ms-auto"  onClick={()=>setnav("nav-side")}>
             
             <a className="nav-link  " href='/restraunt'>سجل كمطعم</a>
                
          </li>   <li className="nav-item text-end ms-auto"  onClick={()=>setnav("nav-side")}>
             
             <a className="nav-link  " href='/jop'>التوظيف</a>
                
          </li>
          <li className="nav-item text-end ms-auto"  onClick={()=>setnav("nav-side")}>
             
             <a className="nav-link  " href='/aboute'>حمل التطبيق</a>
                
          </li>
          
      </ul>
    </div>
  </div>
</nav>
</div>
<div className="d-block d-lg-none">
<div className={`wrapper p-1 ${call} text-center w-100`}>
  {info.face? <a href={info.face} className="icon p-1 facebook">
    <div className="tooltip coloric">Facebook</div>
    <span><i id="coloric" className="fab coloric fa-1x fa-facebook-f"></i></span>
  </a>:""}
  {info.twitter?<a href={info.twitter} className="icon  p-1 twitter">
    <div className="tooltip coloric">Twitter</div>
    <span><i id="coloric" className="fab coloric fa-1x fa-twitter"></i></span>
  </a>:""}
  {info.insta?<a href={info.insta} className="icon  p-1 instagram">
    <div className="tooltip coloric">Instagram</div>
    <span><i id="coloric" className="fab coloric fa-1x fa-instagram"></i></span>
  </a>:""}
 {info.snap?<a href={info.snap} className="icon  p-1 github">
    <div className="tooltip coloric">Github</div>
    <span><i id="coloric" className="fab coloric fa-1x fa-snapchat"></i></span>
  </a>:""}
  {info.linked?<a href={info.linked} className="icon  p-1 youtube">
    <div className="tooltip coloric">Youtube</div>
    <span><i id="coloric" className="fab coloric fa-1x fa-linkedin"></i></span>
  </a>:""}
  <span className="ppp">aloo_com_sa</span>
  <a  href="https://api.whatsapp.com/send?phone=${info.whats}"><i id="coloric"  className="fab fa-whatsapp  fa-1x "></i></a>
  <a className="ppp" href={`tel:0506837260}`}>{info.whats}</a>
</div>
</div>
{/* <div className="fixed ">
  <div className={` bg-success rounded-3`} >
  <a className=" text-success col-8 p-2" href={`https://api.whatsapp.com/send?phone=${info.whats}`}>
  <p className="text-light twa">تواصل</p>
  <i className="fab fa-whatsapp col-4 fa-2x p-1 text-light"></i>
  </a>  
   </div>
  </div> */}
{/* --------------------------------------------------------------------------------------------------- */}
{children}
<div className={`p-3 ${styles.footerx}`}>
<nav className="navbar navbar-light ">
  <div className="container">
    <a className="navbar-brand mx-auto" href="#">
      <img src={info.logo} alt="" width="100" height="70" className="d-inline-block align-text-top"/>
    </a>
  </div>
</nav>
<div className="wrapper text-center">
  {info.face? <a href={info.face} className="icon p-2 facebook">
    <div className="tooltip">Facebook</div>
    <span><i className="fab fa-facebook-f"></i></span>
  </a>:""}
  {info.twitter?<a href={info.twitter} className="icon  p-2 twitter">
    <div className="tooltip">Twitter</div>
    <span><i className="fab fa-twitter"></i></span>
  </a>:""}
  {info.insta?<a href={info.insta} className="icon  p-2 instagram">
    <div className="tooltip">Instagram</div>
    <span><i className="fab fa-instagram"></i></span>
  </a>:""}
 {info.snap?<a href={info.snap} className="icon  p-2 github">
    <div className="tooltip">Github</div>
    <span><i className="fab fa-snapchat"></i></span>
  </a>:""}
  {info.linked?<a href={info.linked} className="icon  p-2 youtube">
    <div className="tooltip">Youtube</div>
    <span><i className="fab fa-linkedin"></i></span>
  </a>:""}
</div>
<div className="row justify-content-around">
    <div className="col-11 col-lg-5 ">
    <h5 className="card-title text-center text-primary">أقسامنا</h5>
    <ul className="row text-center list-unstyled">
       { category.map((item) => (
       <li className="col-6" key={item.name}>
             <Link href={`/${item.name}`}>
    <a className="text-decoration-none text-dark " >{item.name}</a>
             </Link>
       </li>
            ))}
    </ul>
    </div>
    <div className="col-11 col-lg-5 ">
    <h5 className="card-title text-end text-primary">تواصل معنا</h5>
    <ul className="row text-end list-unstyled">
        <li className="col-12 text-lift">
          <span className="text-dark">
           {info.adress?info.adress:""}
          </span>
        <i className="fas fa-map-marker-alt p-2"></i>
          </li>
          <li className="col-12 text-lift">
          <span className="text-dark">
           {info.tele?info.tele:""}
          </span>
          <i className="fas fa-phone-square-alt p-2"></i>
          </li>
          <li className="col-12 text-lift p-2">
          <span className="text-dark">
           {info.tele?info.tele:""}
          </span>
          <i className="fas fa-mobile p-2"></i>
          </li>
          <li className="col-12 text-lift">
          <span className="text-dark">
           {info.email?info.email:""}
          </span>
          <i className="fas fa-at p-2"></i>
          </li>
          
        
    </ul>
</div>
</div>
<h6 className="card-title text-center text-dark">{`الحقوق محفوظة${info.name} © 2023`}</h6>
{/* <h6 className="card-title text-center text-dark">powered by <a  href="http://sayedkhalil.com">sayed khalil</a></h6> */}
</div>
</div>
    );
}
 

export default Layout1;
