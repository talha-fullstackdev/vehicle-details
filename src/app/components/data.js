 <div className="data-container">
          <header className="header">View VCC Details</header>
          <div>
            <p>VCC/Vehicle Details</p>
          </div>

          <div className="div_container">
            <div className="first-div">
              <div>
                <p>VCC No :</p>
                <p>{data.vccNo}</p>
              </div>
              <div>
                <p>VCC Generation Date :</p>
                <p>{new Date(data.vccDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p>Engine Number :</p>
                <p>{data.engineNumber}</p>
              </div>
              <div>
                <p>Vehicle Drive :</p>
                <p>{data.vehicleDrive}</p>
              </div>
              <div>
                <p>Engine Capacity :</p>
                <p>{data.engineCapacity}</p>
              </div>
              <div>
                <p>Passenger Capacity :</p>
                <p>{data.passengerCapacity}</p>
              </div>
              <div>
                <p>Vehicle Brand Name :</p>
                <p>{data.brandName}</p>
              </div>
              <div>
                <p>Vehicle Color :</p>
                <p>{data.vehicleColor}</p>
              </div>
              <div>
                <p>Declaration Number :</p>
                <p>{data.declarationNo}</p>
              </div>
              <div>
                <p>Owner Code :</p>
                <p>{data.ownerCode}</p>
              </div>
              <div>
                <p>Print Remarks :</p>
                <p>{data.printRemarks}</p>
              </div>

              {/* Second section */}
              <div>
                <div>
                  <p>VCC Status :</p>
                  <p>
                    {data.vccStatus === "Printed/Downloaded" ? (
                      <span className="red">{data.vccStatus}</span>
                    ) : (
                      data.vccStatus
                    )}
                  </p>
                </div>
                <div>
                  <p>Chassis No :</p>
                  <p>{data.chassisNo}</p>
                </div>
                <div>
                  <p>Year of Built :</p>
                  <p>{data.yearBuilt}</p>
                </div>
                <div>
                  <p>Country of Origin :</p>
                  <p>{data.origin}</p>
                </div>
                <div>
                  <p>Carriage Capacity :</p>
                  <p>{data.carriageCapacity}</p>
                </div>
                <div>
                  <p>Vehicle Model :</p>
                  <p>{data.vehicleModel}</p>
                </div>
                <div>
                  <p>Vehicle Type :</p>
                  <p>{data.vehicleType}</p>
                </div>
                <div>
                  <p>Specification Standard Name :</p>
                  <p>{data.specStandard}</p>
                </div>
                <div>
                  <p>Declaration Date :</p>
                  <p>{new Date(data.declarationDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p>Owner Name :</p>
                  <p>{data.ownerName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>