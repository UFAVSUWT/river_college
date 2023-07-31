/*  <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Главная</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeToReactRouter = `/${pathnames
              .slice(0, index + 1)
              .join("/")}`;
            let routeTo = routeToReactRouter;
            switch (routeToReactRouter) {
            сведения об образовательной организации 
              case "/sveden":
                return (routeTo = null);
              case "/sveden/common":
                return (routeTo = "/ Основные сведения");
              case "/sveden/struct":
                return (routeTo = "/ Структура и органы управления");
              case "/sveden/document":
                return (routeTo = "/ Документы");
              case "/sveden/education":
                return (routeTo = "/ Образование");
              case "/sveden/eduStandarts":
                return (routeTo = "/ Образовательные стандарты и требования");
              case "/sveden/employees":
                return (routeTo = "/ Руководство");
              case "/sveden/objects":
                return (routeTo = "/ Материально-техническое обеспечение");
              case "/sveden/grants":
                return (routeTo = "/ Меры поддержки обучающихся");
              case "/sveden/paid__edu":
                return (routeTo = "/ Платные образовательные услуги");
              case "/sveden/budget":
                return (routeTo = "/ Финансово-хозяйственная деятельность");
              case "/sveden/vacant":
                return (routeTo = "/ Вакантных мест для приема (перевода)");
              case "/sveden/ovz":
                return (routeTo = "/ Доступная среда");
              case "/sveden/inter":
                return (routeTo = " / Международное сотрудничество");
               Жизнь ВГУВТ 
              case "/live":
                return (routeTo = null);
              case "/live/studentsLive":
                return (routeTo = "/ Студенческая жизнь");
              case "/live/rest":
                return (routeTo = "/ Отдых");
              case "/live/sport":
                return (routeTo = "/ Спорт");
              case "/live/photoGallery":
                return (routeTo = "/ Фотогаллерея");
              case "/live/teachers":
                return (routeTo = "/ Преподаватели");
              case "/live/ourPride":
                return (routeTo = "/ Наша гордость");
              case "/live/science":
                return (routeTo = "/ Наука");
              case "/live/vacancies":
                return (routeTo = "/ Вакансии");
               Главная страница
              case "/home":
                return (routeTo = null);
              case "/home/aboutBranch":
                return (routeTo = "/ О филиале");
              case "/home/historicalReference":
                return (routeTo = "/ Историческая справка");
              case "/home/univercityNews":
                return (routeTo = "/ Новости");
              case "/home/univercityEvents":
                return (routeTo = "/ План мероприятий");
               Образование
              /Практическая подготовка
              case "/learning":
                return (routeTo = null);
              case "/learning/practice":
                return (routeTo = "/ Отдел практической подготовки");
              case "/learning/practice/reviews":
                return (routeTo = "/ Курсанты и выпускники филиала о практике");
              case "/learning/practice/shedule":
                return (routeTo = "/ График практикие");
              case "/learning/practice/utc":
                return (routeTo = "/ Учебно-тренажерный центр");
              Служба трудоустройства
              case "/learning/employmentService":
                return (routeTo = "/ О службе трудоустройства выпускников");
              case "/learning/employmentService/faq":
                return (routeTo = "/ Вопросы и ответы");
              case "/learning/employmentService/partners":
                return (routeTo = "/ Социальные партнеры филиала");
              case "/learning/employmentService/news":
                return (routeTo = "/ Новости трудоустройства 2023 года");
              case "/learning/employmentService/jobFair":
                return (routeTo = "/ Ярмарки вакансий");
              case "/learning/employmentService/vacanciesFrom":
                return (routeTo = "/ Вакансии от работодателей");
              case "/learning/employmentService/feedback":
                return (routeTo = "/ Обратная связь");
              case "/learning/employmentService/links":
                return (routeTo = "/ Полезные ссылки");
               Абитуриенту
              case "/enrollee":
                return (routeTo = null);
              case "/enrollee/messageFromDirector":
                return (routeTo = "/ Обращение директора");
              case "/enrollee/reception":
                return (routeTo = "/ Приемная кампания 2023");
              case "/enrollee/submissionDoc":
                return (routeTo = "/ Подача документов");
              case "/enrollee/monitoring":
                return (routeTo = "/ Мониторинг подачи документов");
              case "/enrollee/monitoring/listsOfPersonsWhoAppliedForAdmission":
                return (routeTo =
                  "/ Списки лиц, подавших заявление на поступление");
              case "/enrollee/monitoring/competitionLists":
                return (routeTo = "/ Конкурсные списки");
              case "/enrollee/monitoring/draftOrdersForEnrollment":
                return (routeTo = "/ Проекты приказов на зачисление");
              case "/enrollee/monitoring/enlistedOrders":
                return (routeTo = "/ Приказы зачисленных");
              case "/enrollee/applicantsInfo":
                return (routeTo = "/ Как стать нашим курсантом");
              case "/enrollee/open-day":
                return (routeTo = "/ Дни открытых дверей");
              ЦДО
              Центр конвенционной подготовки и дополнительного образования
              case "/training":
                return (routeTo = null);
              case "/training/aboutCdo":
                return (routeTo =
                  "/ Центр конвенционной подготовки и дополнительного образования");
              case "/training/advancedTraining":
                return (routeTo = "/ Программы повышения квалификации");
              case "/training/distanceLearning":
                return (routeTo = "/ Cистемa дистанционного обучения");

              default:
                routeTo = null;
                break;
            }
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item value="large" key={index}>
                {capatilize(name)}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item value="large" key={index}>
                <Link value="large" to={`${routeTo}`}>
                  {capatilize(name)}
                </Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>  */