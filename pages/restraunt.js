import Head from 'next/head';
import NEw from '../layout/new';
import Opnion from '../layout/opnion';
import Rests from '../layout/rests';
import styles from '../styles/Home.module.css'
const Restraunt = () => {
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
         <Rests />
         </div>
    </div>
        </div>  
      );
}
 
export default Restraunt;