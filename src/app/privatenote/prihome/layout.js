import Footer from "./pricomponent/othercomp/Footer";
import PrivateNavbar from "./pricomponent/othercomp/Navbar";

export default function PrivateLayout({children}){
 return   <div>
    <header>
    <PrivateNavbar></PrivateNavbar>
    </header> 
       {children}
       <footer>
             <Footer></Footer>
       </footer>
    </div>
}