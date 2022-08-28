import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <form className="form">
          <span>
            <input
              type="text"
              placeholder="Enter a city"
              className="city-input"
            />{" "}
          </span>
          <span>
            <input type="submit" value="Search" className="btnA" />{" "}
          </span>
          <span>
            <input type="submit" value="📍" className="btnB" />{" "}
          </span>{" "}
        </form>
        <div className="row">
          <div className="col">
            <img
              className="images"
              src="https://polite-concha-eed5d8.netlify.app/images/cloudy.svg"
            />
          </div>
          <div className="col">
            <ul className="display">
              <li className="status">Sunny</li>
              <li>
                {" "}
                <span className="todaytem">20 </span>
                <span className="degree">°C |°F </span>
              </li>
              <li>
                {" "}
                ▴<span className="todaytemH">23° </span> ▾
                <span className="todaytemL"> 18°</span>
              </li>
            </ul>
          </div>{" "}
          <div className="col">
            <ul>
              <li className="displayCity">Hong Kong</li>
              <li className="displayTD">5 March 2022 23:16</li>
            </ul>
          </div>
          <div className="row">
            <div className="col">
              Sun
              <ul>
                <li>
                  <img
                    src="https://polite-concha-eed5d8.netlify.app/images/rainy.svg"
                    className="dayImages"
                  />
                </li>
                <li>
                  ▴<span className="forcastTemH">19</span>° ▾
                  <span className="forcastTemL">18</span>°
                </li>
              </ul>
            </div>
            <div className="col">
              Mon
              <ul>
                <li>
                  <li>
                    <img
                      src="https://polite-concha-eed5d8.netlify.app/images/rainy.svg"
                      className="dayImages"
                    />
                  </li>
                </li>
                <li>▴20° ▾17°</li>
              </ul>
            </div>
            <div className="col">
              Tue
              <ul>
                <li>
                  <li>
                    <img
                      src="https://polite-concha-eed5d8.netlify.app/images/rainy.svg"
                      className="dayImages"
                    />
                  </li>
                </li>
                <li>▴18° ▾15°</li>
              </ul>
            </div>
            <div className="col">
              Wed
              <ul>
                <li>
                  <li>
                    <img
                      src="https://polite-concha-eed5d8.netlify.app/images/rainy.svg"
                      className="dayImages"
                    />
                  </li>
                </li>
                <li>▴19° ▾16°</li>
              </ul>
            </div>
            <div className="col">
              Thu
              <ul>
                <li>
                  <li>
                    <img
                      src="https://polite-concha-eed5d8.netlify.app/images/rainy.svg"
                      className="dayImages"
                    />
                  </li>
                </li>
                <li>▴21° ▾17°</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
