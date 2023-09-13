import Footer from "./pricomponent/othercomp/Footer";
import styles from "@/app/privatenote/prihome/page.module.css"
import PrivateNavbar from "./pricomponent/othercomp/Navbar";

export default function PrivateLayout({children}){
 return   <div>
    <header>
    <PrivateNavbar></PrivateNavbar>
    </header> 
       {children}
       <footer className={styles.pbfooter} >
             <Footer ></Footer>
       </footer>
    </div>
}