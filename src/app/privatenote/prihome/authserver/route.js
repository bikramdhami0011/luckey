import { NextResponse } from "next/server"
import { UsercontoMd } from "../../ocomponent/userAuth/Usertomd";
import { UserauthModel } from "../../ocomponent/userAuth/Authmodel";
import mongoose from "mongoose";

  export async function  GET(req,co){
    // const getusers=await req
    // console.log(getusers);
//  try {
  
  await mongoose.connect(UsercontoMd);
  const getdata=await UserauthModel;
  const data=await getdata.find();
//     console.log(getusers);
return NextResponse.json({data,success:true})
 } 
//  catch (error) {
//   console.error(error);
//   return NextResponse.json({ success: false, error: error.message });
//  }   
// }

export async function POST(req){
  try {
    await mongoose.connect(UsercontoMd);
    const data = await req.json();
    const UserModel = await UserauthModel; // Assuming UserauthModel is a Mongoose model
    
    const userData = {
      name: data.name,
      collage: data.collage,
      email: data.email,
      password: data.password,
    };

    // Create a new document and save it to the collection
    const newUser =new UserModel(userData);
    const savedUser = await newUser.save();

    console.log(newUser);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
