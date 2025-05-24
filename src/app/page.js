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
            <div className="QR_code" style={{ marginTop: "10px" }}>
              <Link href={`/${vehicle._id}`}>
              <QRCode 
                value={`http://localhost:3000/${vehicle._id}`} 
                size={200} 
                bgColor="#ffffff" 
                fgColor="#000000" 
                level="H" 
              />
              </Link>
              <p >Scan to view</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
