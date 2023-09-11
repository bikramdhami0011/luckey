"use client"
import { useState } from 'react'
import ST from "@/app/publicclient/pbcomp/page.module.css"
const Donatenote = () => {

  const [pdf, setpdf] = useState(null)
  const [pdfname, setpdfname] = useState(null)
  const [rpdf, setrpdf] = useState(null)
  const [pdfread, setpdfread] = useState(null)
  const UploadPdf = async () => {

    
    console.log(pdf)
    const formData = new FormData();
    formData.set("file", pdf);
    const post = await fetch("../../publicclient/home/pdfserver", {
      method: "POST",
      body: formData
    })
    const posteddata = await post.json();
    console.log(posteddata)
    if (posteddata?.success == true) {
      alert("file is uploaded successfully")
    } else {
      alert("file is not upload try !!!")
    }


  }
  const GetPDF = async () => {
    const getpdss = await fetch("../../publicclient/home/pdfserver", {
      method: "GET",


    })
    const pdfget = await getpdss.json();
    setpdfread(pdfget);
    const setpdf = pdfget.pdfgets[1]
    

    const names = setpdf.contentType
    setpdfname(names);

    const bufferdata = setpdf.data
    const buffer = Buffer.from(bufferdata);
    const realimage = buffer.toString("base64");
    setrpdf(realimage);

  }
  const Otherwindo=()=>{
    try {
      if(pdfread!=null){
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
        window.open(blobURL, '_blank');
      }else{
        alert("First click on click me button if click the button then data fetching from database if not try again")
        if(pdfread.success==true){
          alert(
            "data fetch successfully"
          )
        }else{
          alert("internal server error")
        }

        
        
      }
      
      
    } catch (error) {
       
    }
   
  }
  // Your Base64 encoded PDF content


  const pdffile=`data:application/pdf;base64,${rpdf}`
  return (
    <div>
      <div className={ST.donatecontaner}>

        <div>In class room best note are donate here  donate unnecessary if you are donate unnecessary the you can not get well note for your study</div>
        <p> if pdf file are upload more then 6 per month then  file is stop to upload </p>
        <input type='file' onChange={(e) => {
          setpdf(e.target.files[0])
        }} accept='.pdf' style={{ color: "black", backgroundColor: "white", }} />
        <button onClick={()=>{
          UploadPdf()}} className={ST.donatenotebutton}> Donate Note</button>
      </div>
      <div style={{justifyContent:"center" ,textAlign:"center" ,display:"flex",flexDirection:"column",width:"100%" ,height:"400px",justifyContent:"center"}}>  
          <h1> your donated note is here ..</h1>
           <p> please click !!!</p>
           <div>
            <button onClick={GetPDF} style={{backgroundColor:"green" ,color:"white" ,height:"20px" , width:"4rem"}}> Click Me</button>
           <h3 onClick={()=>{
             Otherwindo();
         
           }} style={{cursor:"pointer"}}>Read you PDF</h3>
           </div>
          
          
      </div>
    </div>
  )
}

export default Donatenote