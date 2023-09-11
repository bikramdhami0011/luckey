import Image from "next/image";
import Donatenote from "../../pbcomp/smallcomp/Donatenote";
import ST from "@/app/publicclient/home/page.module.css"
const DonateNotes=()=>{
return <div className={ST.donatenotebody}>
     <div className={ST.donateimage} >
           <h1>
             Donate notes 
           </h1>
           <div>
              <Image height={400} width={600} src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="donation box" ></Image>

              <Donatenote ></Donatenote>
           </div>
     </div>
</div>
}
export default DonateNotes;