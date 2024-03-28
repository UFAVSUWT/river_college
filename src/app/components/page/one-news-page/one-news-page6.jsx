import React from "react";
import { toggleClassName, toggleFontSize } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import gord from "../../../assets/img/newsimg/2.jpg";

const OneNewsPage6 = (link) => {
  return (
    <>
      <div
        style={{ fontSize: toggleFontSize(18) }}
        className={`one-news-page_container _container${toggleClassName(
          " ",
          "",
          "",
          ""
        )}`}
      >
        <h1>Анонс попечительского совета</h1>
        <div className="image-news">
          <Image src={gord} alt="Фото уплыло:(" width={"100%"} />
        </div>
        <div className="text-content">
          <p>
            18 апреля 2024 г. состоится очередное заседание Попечительского
            совета Уфимского филиала ФГБОУ ВО «ВГУВТ». Члены Попечительского
            совета рассмотрят актуальные вопросы, проблемы и перспективы
            Уфимского филиала: анализ финансирования и финансово-хозяйственной
            деятельности учебного заведения, оказание помощи партнерами;
            результаты организации практической подготовки и трудоустройства,
            целевого обучения; внедрение в образовательный процесс новой формы
            аттестации – демонстрационный экзамен; расширение перечня программ,
            реализуемых Центром дополнительного образования. Также в программе
            заседания подведение итогов выполнения решений Совета от 04.06.2021
            г. и резолюции практической конференции с работодателями от
            15.06.2023 г., актуализация состава Попечительского совета.
          </p>
          <p>
            Члены Попечительского совета примут участие в подведении итогов IV
            Отраслевого конкурса профессионального мастерства «Бельский
            судоводитель» и торжественном награждении лучших молодых
            специалистов судоходных компаний региона.
          </p>
        </div>
      </div>
    </>
  );
};
export default OneNewsPage6;
