import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";

const Cover = (props) => {
  const[a,seta]=useState("mobi2")
document.addEventListener("scroll",()=>{if(document.documentElement.scrollTop==0){
  seta("mobi2")
}else{
  seta("anm")
}})
       return (  
        <div className="mt-1 rel">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="searsh m-auto">
<div class="input-group ">
  <div class="input-group-prepend">
    <button class="btn sb" type="button">ابحث</button>
  </div>
  <input type="text" className="form-control st" placeholder="هل تبحث عن مطعم؟" aria-label="" aria-describedby="basic-addon1"/>
  
</div>
</div>
<div className="d-none d-lg-block">
<Carousel  infiniteLoop="true"	showThumbs={false}>
               
               { props.data.map((item) => (
          <div key={item}>
          <img src={item} alt="فرسان الإنشاءات"/>
          </div>
         ))}
           </Carousel>
</div>
<div className="d-block mobn d-lg-none">
<img className="mobi1" src="img2.svg" alt=""/>
<img className={a} src="jpg.svg" alt=""/>
<img className="hei" src="hei.svg" alt=""/>
<img className="kg3" src="kg3.svg" alt=""/>
</div>

</div>
    );
}
 
export default Cover;