import React from "react";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { ReactComponent as OP106 } from "../../../assets/img/schedule/106OP.svg";
import OP106png from "../../../assets/img/schedule/106OP.png";
import { ReactComponent as EM132 } from "../../../assets/img/schedule/132EM.svg";
import EM132png from "../../../assets/img/schedule/132EM.png";
import { ReactComponent as EM133 } from "../../../assets/img/schedule/133EM.svg";
import EM133png from "../../../assets/img/schedule/133EM.png";
import { ReactComponent as SM136 } from "../../../assets/img/schedule/136SM.svg";
import SM136png from "../../../assets/img/schedule/136SM.png";
import { ReactComponent as SM137 } from "../../../assets/img/schedule/137SM.svg";
import SM137png from "../../../assets/img/schedule/137SM.png";
import { ReactComponent as SV156 } from "../../../assets/img/schedule/156SV.svg";
import SV156png from "../../../assets/img/schedule/156SV.png";
import { ReactComponent as SV157 } from "../../../assets/img/schedule/157SV.svg";
import SV157png from "../../../assets/img/schedule/157SV.png";
import { ReactComponent as OP204 } from "../../../assets/img/schedule/204OP.svg";
import OP204png from "../../../assets/img/schedule/204OP.png";
import { ReactComponent as EM230 } from "../../../assets/img/schedule/230EM.svg";
import EM230png from "../../../assets/img/schedule/230EM.png";
import { ReactComponent as EM231 } from "../../../assets/img/schedule/231EM.svg";
import EM231png from "../../../assets/img/schedule/231EM.png";
import { ReactComponent as SM234 } from "../../../assets/img/schedule/234SM.svg";
import SM234png from "../../../assets/img/schedule/234SM.png";
import { ReactComponent as SM235 } from "../../../assets/img/schedule/235SM.svg";
import SM235png from "../../../assets/img/schedule/235SM.png";
import { ReactComponent as SV253 } from "../../../assets/img/schedule/253SV.svg";
import SV253PNG from "../../../assets/img/schedule/253SV.png";

import { ReactComponent as SV254 } from "../../../assets/img/schedule/254SV.svg";
import SV254png from "../../../assets/img/schedule/254SV.png";
import { ReactComponent as OP303 } from "../../../assets/img/schedule/303OP.svg";
import OP303PNG from "../../../assets/img/schedule/303OP.png";

import { ReactComponent as SV350 } from "../../../assets/img/schedule/350SV.svg";
import SV350png from "../../../assets/img/schedule/350SV.png";
import { ReactComponent as SV351 } from "../../../assets/img/schedule/351SV.svg";
import SV351PNG from "../../../assets/img/schedule/351SV.png";
import { ReactComponent as SV355 } from "../../../assets/img/schedule/355SV.svg";
import SV355PNG from "../../../assets/img/schedule/355SV.png";
const Schedule = () => {
  const navigate = useNavigate();
  return (
    <main className="schedule__container">
      <div className="schedule__wrapper">
        <dib className="schedule__wrapper-btn-container">
          <Button onClick={() => navigate(-1)}>Назад</Button>
          <NavLink to="/">
            <Button>На главную</Button>
          </NavLink>
        </dib>
        {/* <Calendar /> */}
        <ul>
          <li>
            <a href={OP106png} target="_blank" rel="noopener noreferrer">
              <OP106 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={EM132png} target="_blank" rel="noopener noreferrer">
              <EM132 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={EM133png} target="_blank" rel="noopener noreferrer">
              <EM133 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SM136png} target="_blank" rel="noopener noreferrer">
              <SM136 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SM137png} target="_blank" rel="noopener noreferrer">
              <SM137 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SV156png} target="_blank" rel="noopener noreferrer">
              <SV156 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SV157png} target="_blank" rel="noopener noreferrer">
              <SV157 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={OP204png} target="_blank" rel="noopener noreferrer">
              <OP204 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={EM230png} target="_blank" rel="noopener noreferrer">
              <EM230 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={EM231png} target="_blank" rel="noopener noreferrer">
              <EM231 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SM234png} target="_blank" rel="noopener noreferrer">
              <SM234 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SM235png} target="_blank" rel="noopener noreferrer">
              <SM235 width={"200px"} height={"120px"} />
            </a>
          </li>

          {/* fdfdsdfsfffffffffffffffffffffffffff */}

          <li>
            <a href={SV253PNG} target="_blank" rel="noopener noreferrer">
              <SV253 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SV254png} target="_blank" rel="noopener noreferrer">
              <SV254 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={OP303PNG} target="_blank" rel="noopener noreferrer">
              <OP303 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SV350png} target="_blank" rel="noopener noreferrer">
              <SV350 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SV351PNG} target="_blank" rel="noopener noreferrer">
              <SV351 width={"200px"} height={"120px"} />
            </a>
          </li>
          <li>
            <a href={SV355PNG} target="_blank" rel="noopener noreferrer">
              <SV355 width={"200px"} height={"120px"} />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Schedule;
