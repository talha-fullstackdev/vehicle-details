"use client";
import React, { useEffect, useState } from "react";

const GetData = ({ id }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getVehicleData = async () => {
      const response = await fetch(
        `http://localhost:3000/api/get-vehicle/${id}`
      );
      const result = await response.json();
      console.log(result);
      setData(result.data);
    };
    getVehicleData();
  }, []);
  return (
    <>
      {data ? (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brand Name</td>
              <td>{data.brandName}</td>
            </tr>
            <tr>
              <td>Carriage Capacity</td>
              <td>{data.carriageCapacity}</td>
            </tr>
            <tr>
              <td>Chassis No</td>
              <td>{data.chassisNo}</td>
            </tr>
            <tr>
              <td>Declaration Date</td>
              <td>{new Date(data.declarationDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td>Declaration No</td>
              <td>{data.declarationNo}</td>
            </tr>
            <tr>
              <td>Engine Capacity</td>
              <td>{data.engineCapacity}</td>
            </tr>
            <tr>
              <td>Engine Number</td>
              <td>{data.engineNumber}</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>{data.origin}</td>
            </tr>
            <tr>
              <td>Owner Code</td>
              <td>{data.ownerCode}</td>
            </tr>
            <tr>
              <td>Owner Name</td>
              <td>{data.ownerName}</td>
            </tr>
            <tr>
              <td>Passenger Capacity</td>
              <td>{data.passengerCapacity}</td>
            </tr>
            <tr>
              <td>Print Remarks</td>
              <td>{data.printRemarks}</td>
            </tr>
            <tr>
              <td>Specification Standard</td>
              <td>{data.specStandard}</td>
            </tr>
            <tr>
              <td>VCC Date</td>
              <td>{new Date(data.vccDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td>VCC No</td>
              <td>{data.vccNo}</td>
            </tr>
            <tr>
              <td>VCC Status</td>
              <td>{data.vccStatus}</td>
            </tr>
            <tr>
              <td>Vehicle Color</td>
              <td>{data.vehicleColor}</td>
            </tr>
            <tr>
              <td>Vehicle Drive</td>
              <td>{data.vehicleDrive}</td>
            </tr>
            <tr>
              <td>Vehicle Model</td>
              <td>{data.vehicleModel}</td>
            </tr>
            <tr>
              <td>Vehicle Type</td>
              <td>{data.vehicleType}</td>
            </tr>
            <tr>
              <td>Year Built</td>
              <td>{data.yearBuilt}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1>loading.....</h1>
      )}
    </>
  );
};

export default GetData;
