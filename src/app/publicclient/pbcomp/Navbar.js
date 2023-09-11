import Link from "next/link";
import style  from "@/app/publicclient/pbcomp/page.module.css"
const PbNavbar = () => {
  return (
    <div>
        <div className={style.pbdiv} >
             <ul className={style.ul}>
                 <Link  className={style.li} href={"../../../publicclient/home"}>Home</Link>
                 <Link className={style.li} href={"../../../publicclient/home/pbnote"}>College Note</Link>
                 <Link className={style.li} href={"../../../publicclient/home/pbcontact"}>Contact</Link>
                 <Link className={style.li} href={"../../../publicclient/home/donate"}>Note donate</Link>
                 <Link className={style.li} href={"/"}>back Public</Link>
                 
             </ul>
        </div>
    </div>
  )
}

export default PbNavbar;