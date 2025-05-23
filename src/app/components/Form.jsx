"use client"
import React from 'react'
import { useRef } from 'react';
const Form = () => {
const vccNoRef = useRef();
const vccStatusRef = useRef();
const vccDateRef = useRef();
const chassisNoRef = useRef();
const engineNumberRef = useRef();
const yearBuiltRef = useRef();
const vehicleDriveRef = useRef();
const originRef = useRef();
const engineCapacityRef = useRef();
const carriageCapacityRef = useRef();
const passengerCapacityRef = useRef();
const vehicleModelRef = useRef();
const brandNameRef = useRef();
const vehicleTypeRef = useRef();
const vehicleColorRef = useRef();
const specStandardRef = useRef();
const declarationNoRef = useRef();
const declarationDateRef = useRef();
const ownerCodeRef = useRef();
const ownerNameRef = useRef();
const printRemarksRef = useRef();

  return (
   <form className="form-container">
        <h1 className="form_heading">fill vehicle data</h1>
        <div className="form-card">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="vccNo">VCC No</label>
              <input ref={vccNoRef} type="text" id="vccNo" />
            </div>
            <div className="form-group">
              <label htmlFor="vccStatus">VCC Status</label>
              <input type="text" id="vccStatus"  ref={vccStatusRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="vccDate">VCC Generation Date</label>
              <input type="date" id="vccDate"  ref={vccDateRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="chassisNo">Chassis No</label>
              <input type="text" id="chassisNo"  ref={chassisNoRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="engineNumber">Engine Number</label>
              <input type="text" id="engineNumber"  ref={engineNumberRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="yearBuilt">Year of Built</label>
              <input type="text" id="yearBuilt" ref={yearBuiltRef} />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleDrive">Vehicle Drive</label>
              <input type="text" id="vehicleDrive"  ref={vehicleDriveRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="origin">Country of Origin</label>
              <input type="text" id="origin" ref={originRef} />
            </div>
            <div className="form-group">
              <label htmlFor="engineCapacity">Engine Capacity</label>
              <input type="text" id="engineCapacity"  ref={engineCapacityRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="carriageCapacity">Carriage Capacity</label>
              <input type="text" id="carriageCapacity"  ref={carriageCapacityRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="passengerCapacity">Passenger Capacity</label>
              <input type="text" id="passengerCapacity" ref={passengerCapacityRef} />
            </div>
            <div className="form-group">
              <label htmlFor="vehicleModel">Vehicle Model</label>
              <input type="text" id="vehicleModel"  ref={vehicleModelRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="brandName">Vehicle Brand Name</label>
              <input type="text" id="brandName"  ref={brandNameRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="vehicleType">Vehicle Type</label>
              <input type="text" id="vehicleType"  ref={vehicleTypeRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="vehicleColor">Vehicle Color</label>
              <input type="text" id="vehicleColor"  ref={vehicleColorRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="specStandard">Specification Standard Name</label>
              <input type="text" id="specStandard" ref={specStandardRef} />
            </div>
            <div className="form-group">
              <label htmlFor="declarationNo">Declaration Number</label>
              <input type="text" id="declarationNo"  ref={declarationNoRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="declarationDate">Declaration Date</label>
              <input type="date" id="declarationDate"  ref={declarationDateRef}/>
            </div>
            <div className="form-group">
              <label htmlFor="ownerCode">Owner Code</label>
              <input type="text" id="ownerCode" ref={ownerCodeRef} />
            </div>
            <div className="form-group">
              <label htmlFor="ownerName">Owner Name</label>
              <input type="text" id="ownerName"  ref={ownerNameRef}/>
            </div>
            <div className="form-group" style={{ gridColumn: "span 2" }}>
              <label htmlFor="printRemarks">Print Remarks</label>
              <textarea id="printRemarks" rows="3" ref={printRemarksRef}></textarea>
            </div>
          </div>
          <div className="form-actions">
            <button className='form-actions ' type="submit">Submit</button>
          </div>
        </div>
      </form>
  )
}

export default Form