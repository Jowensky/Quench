import React from "react";
import "./style.css";
import overHeadPlant from "./images/overHeadPlant.png";
export function Body(props) {
  return (
    <div>
      <ul>
        <li>Opt.
          <ul>
            <li>
              <span onClick={() => props.color('green')} className="dot color1"></span>
              <span onClick={() => props.color('grey')} className="dot color2"></span>
              <span onClick={() => props.color('yellow')} className="dot color3"></span>
              <span onClick={() => props.color('pink')} className="dot color4"></span>
            </li>
            <li onClick={() => props.logOut()}>LogOut</li>
          </ul>
        </li>
      </ul>
      <button id="logOut" onClick={() => props.logOut()}></button>
      <center className="header">Quench</center>
      <h4
        className="text-white px-5 mx-5"
        dangerouslySetInnerHTML={{ __html: props.true }}
      />
      <center>{props.status}</center>
      <img src={overHeadPlant} className="plant" alt="plant" />
    </div>
  );
}

export function Container(props) {
  return <div onDoubleClick={() => props.write()} className="container-fluid">{props.children}</div>;
}