import mongoose from "mongoose";
import { connectionString } from "@/db/db_connection";
import { VehicleModel } from "@/db/vehicleModel";
import { NextResponse } from "next/server";
export const GET = async(req,{params})=>{
    await mongoose.connect(connectionString)
    try{
    const {id} = await params
    let data = await VehicleModel.findById(id)
    if(!data){
        return NextResponse.json(
            {msg:"no vehicle found with this is"},{status:404}
        )
    }
    return NextResponse.json({
        data
    })
    }catch(err){
        return NextResponse.json(
            {msg:"server side error"},{status:500}
        )
    }
}