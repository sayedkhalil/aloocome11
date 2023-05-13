import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";
import ProdItem from "./proditem";

const NEw = (props) => {
    let storage=[]
    const mob =props.data? props.data:[]
    const mob1= mob.length>4?mob.slice(0,4):mob
    const desk =props.data? props.data:[]
    const desk1= desk.length>8?desk.slice(0,8):desk
    const [appState, setAppState] = useAppContext()
    const i=["i1.png","i2.png","i3.png","i4.png","i5.png","i6.png","i7.png","i8.png"]
    const i2=["i1.png","i2.png","i3.png","i4.png"]
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="row w-100">
    <h4 className="col-12 col-lg-3 title ms-auto"> استكشف أفضل المطاعم</h4>

</div>
<div  >
 
    <div className="d-none d-lg-block d-xl-block">
    <div className="row ">
        {
       i.map((item)=>(
        <img className="col-12 col-lg-3 p-2" src={item} alt=""/>
        ))
    }
    </div>
    </div>
    <div className="d-block d-lg-none">
    <div className="row ">
        {
       i2.map((item)=>(
        <img className="col-6 col-lg-3 p-2 " src={item} alt=""/>
        ))
    }
    </div>
    </div>

 </div>
 
</div>
    );
}
 
export default NEw;