import Head from "next/head";
import ProdItem from "./proditem";

const About = (props) => {
  
    return (  
      <div id="ab" className ="  rel mt-0 ">
         <Head>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>

        </Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        <div className =" d-none d-lg-block  rel mt-2 ">
       
     <div className="row">
        <div className="col-8 col-lg-8 row ">
    
            <p className="d-none d-lg-block h5h ">{props.data.about}</p>
            <div className="col-12 row">
              <div className="col-12 col-lg-6 row">
                <a className="col-6" href="https://play.google.com/store/apps/details?id=com.aloo.userapp&hl=en&gl=US"><img className="w-100" src="play.png" alt=""/></a>
                <a className="col-6" href="https://apps.apple.com/us/app/aloo-app-customer/id1645615723"><img className="w-100"src="app.png" alt=""/></a>
              </div>
              <h6 className="col-12 col-lg-6 text-center">حمل التطبيق الآن</h6>  
            </div>
        </div>
       <img className=" col-4 col-lg-4 nmn" src="pan.png" alt=""/>
       <p className="d-block d-lg-none vv0">{props.data.about}</p>
     </div>
</div>
 <div  className =" d-block d-lg-none fd  rel mt-0 ">
 
<div className="row zzzz">
 <div className="col-8 col-lg-8 row ">
   <div className="d-block d-lg-none col-1">         
   </div>
     <img className="col-6 col-lg-4" src={props.data.logo} alt=""/>
     <p className="d-none d-lg-block vv0">{props.data.about}</p>
     <div className="col-12 row">
       <div className="col-12 col-lg-6 row">
         <a className="col-6" href="https://play.google.com/store/apps/details?id=com.aloo.userapp&hl=en&gl=US"><img className="w-100" src="play.png" alt=""/></a>
         <a className="col-6" href="https://apps.apple.com/us/app/aloo-app-customer/id1645615723"><img className="w-100"src="app.png" alt=""/></a>
       </div>
       <h6 className="col-12 col-lg-6 text-center">حمل التطبيق الآن</h6>  
     </div>
 </div>
<img className=" col-4 col-lg-4 nmn" src="pan.png" alt=""/>
<p className="d-block d-lg-none vv0">{props.data.about}</p>
</div>
</div>
</div>
    );
}
 
export default About;