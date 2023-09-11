import mongoose from "mongoose";
import { PublicCondb } from "./Condb";

const PublicPDfmodel =async()=>{
    await mongoose.connect(PublicCondb);
    const imageSchema = new mongoose.Schema({
     
      data: Buffer,
      contentType: String,
    });

   const Products= mongoose.models.publicpdf||mongoose.model("publicpdf",imageSchema)
   return Products;
}

export default PublicPDfmodel;