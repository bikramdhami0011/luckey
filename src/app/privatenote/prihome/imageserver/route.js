import { NextResponse } from "next/server";
import { writeFileSync}from "fs"
export async function POST(req){
      const data= await req.formData();
      const setdata=data.get("file")
      const contobyte=await setdata.arrayBuffer();
      const buffer= Buffer.from(contobyte);
      console.log(setdata.name)
    //    await  writeFileSync(`/public/photos/ ${setdata.name}`,buffer)
      console.log(contobyte);
    return NextResponse.json({setdata,name:"bikram"})
}