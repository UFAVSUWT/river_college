import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as Vk } from "../../../assets/svg/vk.svg";
import { toggleClassName, toggleIconColor } from "../../../utils/disabled";
const Footer = observer(() => {
  return (
    <footer
      className={toggleClassName(
        "footer",
        "footer-white",
        "footer-black",
        "footer-contrast"
      )}
    >
      <div className="footer__container _container">
        <div className="footer__vguvt">
          <div className="">ВГУВТ 2022</div>
          <a href="https://vk.com/uf_vsuwt" target={"_blank"} rel="noreferrer">
            <Vk className="footer__vk" />
          </a>
          <ul style={{ color: "white" }}>
            <li>
              <a
                href="https://mintrans.gov.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
              >
                Министерство транспорта Российской Федерации
              </a>
            </li>
            <li>
              <a
                href="https://morflot.gov.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
              >
                Федеральное агентство морского и речного транспорта
              </a>
            </li>
            <li>
              <a
                href="https://www.pasp.ru/bolshoy_port_sankt-peterburg1"
                target="_blank"
                rel="noopener noreferrer"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
              >
                Морской порт «Большой порт Санкт-Петербург»
              </a>
            </li>
            <li>
              <a
                href="http://xn--80adbch2buek4ak3i.xn--p1ai/"
                target="_blank"
                rel="noopener noreferrer"
                className={toggleClassName(
                  "education__link",
                  "education__link-white",
                  "education__link-black",
                  "education__link-contrast"
                )}
              >
                Администрация Камского бассейна внутренних водных путей
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__logo">
          <NavLink to="">
            <object>
              <RiverUniversityLogo
                fill={toggleIconColor("#0C1C2B", "", "#000")}
              />
            </object>
          </NavLink>
        </div>

        <div className="footer__collegeInfo">
          <table>
            <tbody>
              <tr>
                <td>Наш адрес:</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2">450017,ул. Ахметова, 275,</td>
              </tr>
              <tr>
                <td colSpan="2">Уфа, Республика Башкортостан</td>
              </tr>
              <tr>
                <td> Контакты:</td>
                <td></td>
              </tr>
              <tr>
                <td>Тел./факс:</td>
                <td>8(347) 248-28-83</td>
              </tr>
              <tr>
                <td></td>
                <td>278-28-86</td>
              </tr>
              <tr>
                <td>e-mail:</td>
                <td>uf-vsuwt@uf-vsuwt.ru</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
});
export default Footer;
