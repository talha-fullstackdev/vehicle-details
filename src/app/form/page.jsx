"use client";
import React from "react";

const Page = () => {
  return (
    <>
      <form className="form-container">
        <h1 className="form_heading">fill vehicle data</h1>
        <div className="form-card">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="vccNo">VCC No</label>
              <input type="text" id="vccNo" />
            </div>
            <div className="form-group">
              <label htmlFor="vccStatus">VCC Status</label>
              <input type="text" id="vccStatus" />
            </div>
            <div className="form-group">
              <label htmlFor="vccDate">VCC Generation Date</label>
              <input type="date" id="vccDate" />
            </div>
            <div className="form-group">
              <label htmlFor="chassisNo">Chassis No</label>
              <input type="text" id="chassisNo" />
            </div>
            <div className="form-group">
              <label htmlFor="engineNumber">Engine Number</label>
              <input type="text" id="engineNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="yearBuilt">Year of Built</label>
              <input type="text" id="yearBuilt" />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleDrive">Vehicle Drive</label>
              <input type="text" id="vehicleDrive" />
            </div>
            <div className="form-group">
              <label htmlFor="origin">Country of Origin</label>
              <input type="text" id="origin" />
            </div>
            <div className="form-group">
              <label htmlFor="engineCapacity">Engine Capacity</label>
              <input type="text" id="engineCapacity" />
            </div>
            <div className="form-group">
              <label htmlFor="carriageCapacity">Carriage Capacity</label>
              <input type="text" id="carriageCapacity" />
            </div>
            <div className="form-group">
              <label htmlFor="passengerCapacity">Passenger Capacity</label>
              <input type="text" id="passengerCapacity" />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleModel">Vehicle Model</label>
              <input type="text" id="vehicleModel" />
            </div>
            <div className="form-group">
              <label htmlFor="brandName">Vehicle Brand Name</label>
              <input type="text" id="brandName" />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleType">Vehicle Type</label>
              <input type="text" id="vehicleType" />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleColor">Vehicle Color</label>
              <input type="text" id="vehicleColor" />
            </div>
            <div className="form-group">
              <label htmlFor="specStandard">Specification Standard Name</label>
              <input type="text" id="specStandard" />
            </div>
            <div className="form-group">
              <label htmlFor="declarationNo">Declaration Number</label>
              <input type="text" id="declarationNo" />
            </div>
            <div className="form-group">
              <label htmlFor="declarationDate">Declaration Date</label>
              <input type="date" id="declarationDate" />
            </div>
            <div className="form-group">
              <label htmlFor="ownerCode">Owner Code</label>
              <input type="text" id="ownerCode" />
            </div>
            <div className="form-group">
              <label htmlFor="ownerName">Owner Name</label>
              <input type="text" id="ownerName" />
            </div>
            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label htmlFor="printRemarks">Print Remarks</label>
              <textarea id="printRemarks" rows="3"></textarea>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page;
