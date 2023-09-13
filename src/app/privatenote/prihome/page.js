
"use client"
import { MdAddPhotoAlternate } from 'react-icons/md';
import styles from "@/app/privatenote/prihome/page.module.css"
import { useRef, useState } from 'react';
// import DailyRoutine from "./pricomponent/othercomp/DailyRoutine";
import Image from 'next/image';

export default function PrivateHome() {
  const [image,setimage]=useState();
  const useref=useRef();
  const HandleClickImage=()=>{
useref.current.click();
  }
  const HandleImage=(e)=>{
    setimage(e.target.files[0]);

   
  }
const UploadImage=async()=>{
  const newForm= new FormData();
  newForm.set("file",image)
   const  postimage= await fetch("/privatenote/prihome/imageserver",{
    method:"POST",
    body:newForm
   })
   const getdata=await postimage.json();
   console.log(getdata);
}
  
  return (
    <div >
  
      <div className={styles.homecontainer} >
          <div className={styles.hidefile}>
          
          <input  type='file' ref={useref} onChange={HandleImage} style={{display:"none"}}/>
          <MdAddPhotoAlternate size={80} onClick={HandleClickImage} style={{display:"unset"}}></MdAddPhotoAlternate>
          <Image src={"https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} height={200} width={250}></Image>
          <button  onClick={UploadImage}>Upload</button>
          </div>
           

      </div>
    </div>
  )
}