"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
export default function Home() {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const getVehicleData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get-vehicle");
        const result = await response.json();
        console.log(result)
        setVehicleData(result); // Set directly, since result is an array)
      } catch (err) {
        console.log("server side error", err);
      }
    };

    getVehicleData();
  }, []);

  return (
     <div>
      <h1>This is home page</h1>
      <Link href="/form">Form</Link>
      <div className="card-container">
        {vehicleData.map((vehicle) => (
          <div key={vehicle._id} className="card">
            <h2>{vehicle.brandName} {vehicle.vehicleModel}</h2>
            {/* <p><strong>VCC No:</strong> {vehicle.vccNo}</p>
            <p><strong>Status:</strong> {vehicle.vccStatus}</p>
            <p><strong>VCC Date:</strong> {new Date(vehicle.vccDate).toLocaleDateString()}</p>
            <p><strong>Chassis No:</strong> {vehicle.chassisNo}</p>
            <p><strong>Engine Number:</strong> {vehicle.engineNumber}</p>
            <p><strong>Year Built:</strong> {vehicle.yearBuilt}</p>
            <p><strong>Drive:</strong> {vehicle.vehicleDrive}</p>
            <p><strong>Origin:</strong> {vehicle.origin}</p>
            <p><strong>Engine Capacity:</strong> {vehicle.engineCapacity}</p>
            <p><strong>Carriage Capacity:</strong> {vehicle.carriageCapacity}</p>
            <p><strong>Passenger Capacity:</strong> {vehicle.passengerCapacity}</p>
            <p><strong>Vehicle Type:</strong> {vehicle.vehicleType}</p>
            <p><strong>Color:</strong> {vehicle.vehicleColor}</p>
            <p><strong>Standard:</strong> {vehicle.specStandard}</p>
            <p><strong>Declaration No:</strong> {vehicle.declarationNo}</p>
            <p><strong>Declaration Date:</strong> {new Date(vehicle.declarationDate).toLocaleDateString()}</p>
            <p><strong>Owner Code:</strong> {vehicle.ownerCode}</p>
            <p><strong>Owner Name:</strong> {vehicle.ownerName}</p>
            <p><strong>Remarks:</strong> {vehicle.printRemarks}</p> */}
            <div className="QR_code" style={{ marginTop: "10px" }}>
              <QRCode 
                value={`https://facebook.com`} 
                size={200} 
                bgColor="#ffffff" 
                fgColor="#000000" 
                level="H" 
              />
              <p >Scan to view</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
