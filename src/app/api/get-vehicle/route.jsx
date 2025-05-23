import mongoose from "mongoose";
import { connectionString } from "@/db/db_connection";
import { VehicleModel } from "@/db/vehicleModel";
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  try {
    await mongoose.connect(connectionString);
    const data = await VehicleModel.find();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ msg: "server side error" }, { status: 500 });
  }
};
