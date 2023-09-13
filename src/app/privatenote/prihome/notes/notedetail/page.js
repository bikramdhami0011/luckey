"use client"
import React, {  useState } from 'react'
import Link from 'next/link'
// import PDFViewer from '../../pdfviewr/PDFdoc';


const Notedetail =({params}) => {
  const [rpdf,setrpdf]=useState(null);

 const [pdfname,setpdfname]=useState(null);
  const subcode=  params.pdfnote
  
   
  const  GetPDF=async()=>{
    const getpdss=await fetch("../../publicclient/home/pdfserver",{
        method:"GET",
        

    })
    const pdfget=await getpdss.json();
   
    const setpdf= pdfget.pdfgets[1]
    
    const names=setpdf.contentType
    setpdfname(names);

    const bufferdata=setpdf.data
    const buffer=Buffer.from(bufferdata);
    const realimage=buffer.toString("base64");
    setrpdf(realimage);

}
// Your Base64 encoded PDF content
const base64PDF = rpdf; // Replace with your actual Base64 content

// Decode the Base64 content
const byteCharacters = atob(base64PDF);

// Convert the decoded bytes into an array buffer
const byteArray = new Uint8Array(byteCharacters.length);
for (let i = 0; i < byteCharacters.length; i++) {
  byteArray[i] = byteCharacters.charCodeAt(i);
}

// Create a Blob from the array buffer
const blob = new Blob([byteArray], { type: 'application/pdf' });

// Create a URL for the Blob
const blobURL = URL.createObjectURL(blob);

// Open a new window or tab with the PDF
// window.open(blobURL, '_blank');

GetPDF();
const pdffile=`data:application/pdf;base64,${rpdf}`
  return (
    <div>
 
    { pdffile!="data:application/pdf;base64,null" ? 
    <div>
      <div>
           <h3> Subject Details </h3>
          
           <p> Note Author: {}</p>
          
           <Link href={pdffile} target="_blank" download={pdfname} style={{color:"white"  }}> Download: {pdfname}</Link>
           <p onClick={()=>{
            window.open(blobURL,"_blank")
           }} style={{fontSize:"22px" ,textDecoration:"underline" ,cursor:"pointer"}}>Pdf Read</p>
          
          
           
   
      </div>
    </div>
   :<di>
     <h1> PDF File is Loading...</h1>
  
   </di>  }
   </div>

  )
}

export default Notedetail
// <PDFViewer  pdfData={pdffile}></PDFViewer>//  <iframe src={pdffile}  height={600} width="100%" /> 
// <p> {subcode.map((e)=>(
//   <div>Subject Code : {e}</div>
//  ))} </p

// export default Notedetail