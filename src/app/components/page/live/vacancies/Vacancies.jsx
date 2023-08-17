import React, { useEffect, useState } from "react";
import axios from "axios";
const Vacancies = () => {
  const [appState, setAppState] = useState();

  useEffect(() => {
    const apiUrl = "https://api.hh.ru/vacancies?employer_id=5263412";
    /*  const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"; */
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

  console.log(appState);

  return (
    <section>
      <h1>
        Ищете работу? Мы вас ждем! Обращайтесь в приемную 8 (347) 215-14-00
      </h1>
      {/*    <div>{vacants && vacants.map((v) => console.log(v))}</div> */}
    </section>
  );
};
export default Vacancies;
