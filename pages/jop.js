import Head from 'next/head';
import Jo from '../layout/jo';
import NEw from '../layout/new';
import Opnion from '../layout/opnion';
import styles from '../styles/Home.module.css'
const jop = () => {
    return (
        < div className="w-100 p-0 m-0 u2">
        <img className="w-100" src="nb.png" alt=""/>
        <div className="mt-1 ">
            <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600&family=IBM+Plex+Sans+Arabic:wght@400;500&display=swap" rel="stylesheet"/>
            <link rel="icon" href="" type="image/x-icon" />
            </Head>
         <div className={`row ${styles.container}`}>
         <h4 className="col-12 col-lg-3 title ms-auto"> وظائف متاحة</h4>

            <div className='row col-12 p-2'>
                <p className='col-9 cp text-center'>
             نبحث عن مطوري  تطبيقات  يستخدم لغةدارت وعلى دراية تامة بفلاتر للعمل لدينا  على مشاريعنا الجارية
                  <br></br> : المتطلبات<br/>
<br></br>شهادة في البرمجة أو علوم الكمبيوتر أو مجال ذي صلة.
خبرة لا تقل عن سنتين في منصة فلاتر ولغة دارت<br></br>
خبرة في العمل مع واجهات برمجة التطبيقات مثل REST.
                    </p>
             <img className='col-3 h-50' src="dev.jpg" alt=""/>
            </div>
         <Jo />
         </div>
    </div>
        </div>  
      );
}
 
export default jop;