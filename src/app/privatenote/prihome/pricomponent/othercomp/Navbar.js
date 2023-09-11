"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const PrivateNavbar = () => {
    const router=useRouter();
  return (
    <div>
          <div>
               <ul style={{display:"flex",gap:"4%",textDecoration:"none"}}>
                     <li onClick={()=>{
                       router.push("../../../privatenote/prihome")
                     }} style={{cursor:"pointer",backgroundColor:"green" }} >Home</li>  
                     <li onClick={()=>{
                      router.push("../../../privatenote/prihome/notes")
                    }} style={{cursor:"pointer",backgroundColor:"green" }}>Notes</li>  
                    <li onClick={()=>{
                      router.push("../../../../privatenote/prihome/notes/notedetail")
                    }} style={{cursor:"pointer",backgroundColor:"green" }}>Note Details</li>  
                    <li onClick={()=>{
                      router.push("../../../privatenote/prihome/extra")
                    }} style={{cursor:"pointer",backgroundColor:"green" }}>Extra</li>  

               </ul>
           </div>
    </div>
  )
}

export default PrivateNavbar