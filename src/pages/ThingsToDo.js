import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./ThingsToDo.css";
import dam from "../images/dam.jpg";
import samchuk from "../images/samchuk.jpg";
import wat from "../images/wat.jpg";
import watpa from "../images/watpa.jpg";
import chaopor from "../images/chaopor.jpg";

const ThingsToDo = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="container todo">
          <h1>Things to Do</h1>
          <p>
            If you have some free time, here are some fun activities to do
            around the city:
          </p>
          <nav id="navbar-example2" className="navbar bg-body-tertiary mb-4">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading1">
                  DanChang
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading2">
                  Samchuk
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scrollspyHeading3">
                  Mueang
                </a>
              </li>
            </ul>
          </nav>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            className="scrollspy-example p-3"
            tabIndex="0"
          >
            <h4 id="scrollspyHeading1">DanChang</h4>
            <div className="card" style={{ width: "18rem" }}>
              <img src={dam} className="card-img-top" alt="dam"></img>
              <div className="card-body">
                <p className="card-text">
                  <Link
                    to="https://maps.app.goo.gl/PjC55aXmCVDAZ9Wc9"
                    className="stay-link"
                  >
                    Krasiao Dam{" "}
                  </Link>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={wat} className="card-img-top" alt="dam"></img>
              <div className="card-body">
                <p className="card-text">
                  <Link
                    to="https://maps.app.goo.gl/udWZitHWvwUNGvNu9"
                    className="stay-link"
                  >
                    Wat Tham Khao Prathun{" "}
                  </Link>
                </p>
              </div>
            </div>
            <h4 id="scrollspyHeading2">Samchuk</h4>
            <div className="card" style={{ width: "18rem" }}>
              <img src={samchuk} className="card-img-top" alt="dam"></img>
              <div className="card-body">
                <p className="card-text">
                  <Link
                    to="https://maps.app.goo.gl/E6dKaKq8hdCbeK6AA"
                    className="stay-link"
                  >
                    SamChuk Old Market{" "}
                  </Link>
                </p>
              </div>
            </div>
            <h4 id="scrollspyHeading3">Mueang District</h4>
            <div className="card" style={{ width: "18rem" }}>
              <img src={watpa} className="card-img-top" alt="dam"></img>
              <div className="card-body">
                <p className="card-text">
                  <Link
                    to="https://maps.app.goo.gl/uD87dZyQk5D2Ujns8"
                    className="stay-link"
                  >
                    Wat Tham Khao Prathun{" "}
                  </Link>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={chaopor} className="card-img-top" alt="dam"></img>
              <div className="card-body">
                <p className="card-text">
                  <Link
                    to="https://maps.app.goo.gl/PrsZYfEPsvXHQmHr7"
                    className="stay-link"
                  >
                    Chao Por Lak Muang Suphan Shrine
                    {" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
