import React from "react";
import Lchart from "./chartdemo";
import Header from "./header";
import Dash from "./dash";
import "./master.css";
import { useState } from "react";
const Main = () => {
  const [togglers, setToogler] = useState(-1);
  return (
    <>
      <div className="row mx-0">
        <div className="col-2 p-0">
          <Dash />
        </div>

        <div className="col-10 p-0" style={{ backgroundColor: "#171a1c" }}>
          <Header />
          <div style={{ maxHeight: "90vh", overflowY: "scroll " }}>
            <div className="p-3">
              <div className="w-100 bg-dark rounded-3 p-3">
                <h1 className="display-6 py-3 fw-light text-light"> Fundamentals for Crypto</h1>
                <p className="text-lead text-light">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                  to demonstrate the
                </p>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-10 pe-1">
                <div className="p-3 pe-0">
                  <div className="w-100 bg-dark rounded-3 p-2">
                    <Lchart cdata={togglers} />
                  </div>
                </div>
              </div>
              <div className="col-2 ps-1">
                <div className=" p-3 ps-0">
                  <div className="w-100 bg-dark rounded-3 p-2">
                    <p className="text-light opacity-75">Market Sectors</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={togglers == -1 ? true : false}
                        onChange={() => setToogler(-1)}
                      />
                      <label className="form-check-label text-light" for="flexSwitchCheckChecked">
                        All
                      </label>
                    </div>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={togglers == 0 ? true : false}
                        onChange={() => setToogler(0)}
                      />
                      <label className="form-check-label text-light" for="flexSwitchCheckChecked">
                        BitCoin
                      </label>
                    </div>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={togglers == 1 ? true : false}
                        onChange={() => setToogler(1)}
                      />
                      <label className="form-check-label text-light" for="flexSwitchCheckChecked">
                        Ethereum
                      </label>
                    </div>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={togglers == 2 ? true : false}
                        onChange={() => setToogler(2)}
                      />
                      <label className="form-check-label text-light" for="flexSwitchCheckChecked">
                        Ripple
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;