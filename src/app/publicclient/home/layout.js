
import PbFooter from "../pbcomp/Footer";
import PbNavbar from "../pbcomp/Navbar";
import style from "@/app/publicclient/home/page.module.css"
export default function Publiclayout({children}){
return<div style={{margin:-8}}>
     <header  >
     <PbNavbar></PbNavbar>
     </header>
      {children}
      <footer className={style.pbfooter}>
        <PbFooter></PbFooter>
      </footer>
</div>
}