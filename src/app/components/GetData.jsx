
"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
const GetData = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getVehicleData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/get-vehicle/${id}`
        );
        const result = await response.json();
        console.log(result);
        setTimeout(()=>{
             setData(result.data);
        },1000)
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };
    getVehicleData();
  }, [id]);

  return (
    <>
      {data ? (
       <div className="container">
        <header className="header">View VCC Details</header>
        <div className="para"><p>VCC/Vehicle Details</p></div>
        <div className="dataContainer">
            <div className="first_div">
            <div  className="firstdiv-item">
                <p>VCC No :</p>
                <p className="details">{data.vccNo}</p>
              </div>
              <div className="firstdiv-item">
                <p>VCC Generation Date :</p>
                <p className="details">{new Date(data.vccDate).toLocaleDateString()}</p>
              </div>
              <div className="firstdiv-item">
                <p>Engine Number :</p>
                <p className="details">{data.engineNumber}</p>
              </div>
              <div className="firstdiv-item">
                <p>Vehicle Drive :</p>
                <p className="details">{data.vehicleDrive}</p>
              </div>
              <div className="firstdiv-item">
                <p>Engine Capacity :</p>
                <p className="details">{data.engineCapacity}</p>
              </div>
              <div className="firstdiv-item">
                <p>Passenger Capacity :</p>
                <p className="details">{data.passengerCapacity}</p>
              </div>
              <div className="firstdiv-item">
                <p>Vehicle Brand Name :</p>
                <p className="details">{data.brandName}</p>
              </div>
              <div className="firstdiv-item">
                <p>Vehicle Color :</p>
                <p className="details">{data.vehicleColor}</p>
              </div>
              <div className="firstdiv-item">
                <p>Declaration Number :</p>
                <p className="details">{data.declarationNo}</p>
              </div>
              <div className="firstdiv-item">
                <p>Owner Code :</p>
                <p className="details">{data.ownerCode}</p>
              </div>
              <div className="firstdiv-item">
                <p>Print Remarks :</p>
                <p className="details">{data.printRemarks}</p>
              </div>
            </div>
            {/* /////////////////////////sond div */}
            <div className="second_div">
                <div className="firstdiv-item">
                  <p>VCC Status :</p>
                  <p className="details">
                    {data.vccStatus === "Printed/Downloaded" ? (
                      <span className="red">{data.vccStatus}</span>
                    ) : (
                      data.vccStatus
                    )}
                  </p>
                </div>
                <div className="firstdiv-item">
                  <p>Chassis No :</p>
                  <p className="details">{data.chassisNo}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Year of Built :</p>
                  <p className="details">{data.yearBuilt}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Country of Origin :</p>
                  <p className="details">{data.origin}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Carriage Capacity :</p>
                  <p className="details">{data.carriageCapacity}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Vehicle Model :</p>
                  <p className="details">{data.vehicleModel}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Vehicle Type :</p>
                  <p className="details">{data.vehicleType}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Specification Standard Name :</p>
                  <p className="details">{data.specStandard}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Declaration Date :</p>
                  <p className="details">{new Date(data.declarationDate).toLocaleDateString()}</p>
                </div>
                <div className="firstdiv-item">
                  <p>Owner Name :</p>
                  <p className="details">{data.ownerName}</p>
                </div>
            </div>
        </div>
       </div>
      ) : (
        <Loading/>
      )}
    </>
  );
};

export default GetData;
