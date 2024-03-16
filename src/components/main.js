import React from "react";
import Lchart from "./chartdemo";
import Header from "./header";
import Dash from "./dash";
import "./master.css";
import coindata from "./mockdata.json";
import { useState } from "react";
const Main = () => {
  const [togglers, setToogler] = useState([]);
  const [chartType, setChartType] = useState("line");
  return (
    <>
      <div className="row mx-0">
        <div className="col-2 p-0">
          <Dash />
        </div>

        <div className="col-10 p-0" style={{ backgroundColor: "#101014" }}>
          <Header />
          <div style={{ maxHeight: "90vh", overflowY: "scroll " }}>
            <div className="p-3">
              <div className="w-100 rounded-3 p-3" style={{ backgroundColor: "#1b1b1e" }}>
                <h1 className="display-6 py-3 fw-light text-light"> Fundamentals for Crypto</h1>
                <p className="text-lead text-light">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
              </div>
            </div>
            <div className="px-3">
              <div className="row mx-0 p-3 ps-0 pe-0 rounded" style={{ backgroundColor: "#1b1b1e" }}>
                <div className="col-9 d-flex">
                  <div className="w-100   p-2">
                    <div className="togglers w-100 ">
                      <div className="cToggles d-flex border border-1 border-light rounded-pill p-2" style={{ width: "max-content" }}>
                        <button className={`rounded-pill btn ${chartType == "line" ? "btn-light" : "btn-dark"}`} onClick={() => setChartType("line")}>
                          <i className="fa fa-line-chart rounded-circle"></i>
                        </button>
                        <button className={`rounded-pill btn ${chartType == "bar" ? "btn-light" : "btn-dark"}`} onClick={() => setChartType("bar")}>
                          <i className="fa fa-bar-chart"></i>
                        </button>

                        <button className={`rounded-pill btn ${chartType == "radar" ? "btn-light" : "btn-dark"}`} onClick={() => setChartType("radar")}>
                          <i className="fa fa-codepen"></i>
                        </button>
                      </div>
                    </div>

                    <Lchart cdata={togglers} cType={chartType} />
                  </div>
                  <div className="h-100 opacity-25" style={{ background: "rgb(183, 183, 185)" }}>
                    <div className="vr"></div>
                  </div>
                </div>
                <div className="col-3 ps-1">
                  <div className=" p-3 ps-0">
                    <div className="w-100 rounded-3 p-2" style={{ backgroundColor: "#1b1b1e" }}>
                      <p className="text-light opacity-75">Market Sectors</p>
                      <div className="listDash">
                        <div className="form-check form-switch mb-3 ">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={togglers.length == 0 ? true : false} onChange={() => setToogler([])} />
                          <label className="form-check-label text-light" for="flexSwitchCheckChecked">
                            All
                          </label>
                        </div>
                        {coindata.map((ini, i) => {
                          return (
                            <div className="form-check form-switch mb-3 ">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked={togglers.includes(i) ? true : false}
                                onChange={() => {
                                  togglers.includes(i)
                                    ? setToogler(() => {
                                        const updatedTogglers = [...togglers];
                                        updatedTogglers.splice(togglers.indexOf(i), 1);
                                        return updatedTogglers;
                                      })
                                    : setToogler([...togglers, i]);
                                }}
                              />
                              <label className="form-check-label text-light text-truncate w-100" for="flexSwitchCheckChecked">
                                {ini.currency}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(togglers)}
    </>
  );
};

export default Main;
