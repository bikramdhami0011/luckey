
import {  writeFileSync } from "fs";

import { NextResponse } from "next/server";


import { PublicCondb } from "../../pbcomp/Condb";
import PublicPDfmodel from "../../pbcomp/pdfmodel";

export async function POST(req){
 const data=await req.formData();
 const getdata= data.get("file")
 
 const bytedata=await getdata.arrayBuffer();

 const buffer=Buffer.from(bytedata);

//  const path=`./public/${getdata.name}`
// await writeFileSync(path,buffer);
// await PublicCondb;
const dbset= await PublicPDfmodel();
const setpdf= await new  dbset({
    data:buffer,
    contentType:getdata.name
})
const savepdf=await setpdf.save();

 
return NextResponse.json({savepdf,success:true})
}
export async function GET(req){
const datab= req

   await PublicCondb;
   const pdfs= await PublicPDfmodel();
   const pdfgets= await pdfs.find();

   return NextResponse.json({pdfgets,success:true})
   }