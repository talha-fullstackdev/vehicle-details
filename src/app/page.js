// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import QRCode from "react-qr-code";
// export default function Home() {
//   const [vehicleData, setVehicleData] = useState([]);

//   useEffect(() => {
//     const getVehicleData = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/get-vehicle");
//         const result = await response.json();
//         console.log(result)
//         setVehicleData(result); // Set directly, since result is an array)
//       } catch (err) {
//         console.log("server side error", err);
//       }
//     };

//     getVehicleData();
//   }, []);

//   return (
//      <div>
//       <div className="home_header">
//        <p className="header-title">QR codes page</p>
//       <Link className="link" href="/form"><p className="header-btn">Form</p></Link>
//        </div>
     
//       <div className="card-container">
//         {vehicleData.map((vehicle) => (
//           <div key={vehicle._id} className="card">
//             <h2>{vehicle.brandName} {vehicle.vehicleModel}</h2>
//             <div className="QR_code" style={{ marginTop: "10px" }}>
//               <Link href={`/${vehicle._id}`}>
//               <QRCode 
//                 value={`http://localhost:3000/${vehicle._id}`} 
//                 size={200} 
//                 bgColor="#ffffff" 
//                 fgColor="#000000" 
//                 level="H" 
//               />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const getVehicleData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get-vehicle");
        const result = await response.json();
        setVehicleData(result);
      } catch (err) {
        console.log("server side error", err);
      }
    };

    getVehicleData();
  }, []);

  // Function to download QR code
  const downloadQRCode = (id) => {
    const svg = document.getElementById(`qr-${id}`);
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `qr-${id}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div>
      <div className="home_header">
        <p className="header-title">QR codes page</p>
        <Link className="link" href="/form">
          <p className="header-btn">Form</p>
        </Link>
      </div>

      <div className="card-container">
        {vehicleData.map((vehicle) => (
          <div key={vehicle._id} className="card">
            <h2>
              {vehicle.brandName} {vehicle.vehicleModel}
            </h2>
            <div className="QR_code" style={{ marginTop: "10px" }}>
              <Link href={`/${vehicle._id}`}>
                <QRCode
                  id={`qr-${vehicle._id}`}
                  value={`http://localhost:3000/${vehicle._id}`}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                />
              </Link>
            </div>
            <button
              onClick={() => downloadQRCode(vehicle._id)}
             className="download-btn"
            >
              Download QR Code
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
