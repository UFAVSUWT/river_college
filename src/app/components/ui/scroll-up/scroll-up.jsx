import React, { useEffect, useState } from "react";
const ScrollUp = () => {
  // Кнопка, которая появляется, когда прокручиваешь страницу ниже одного экрана. Поднимает в самый верх
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-up ${scrollY > 400 ? "" : "scroll-up_hide"}`}
      onClick={handlerScrollUp}
    ></div>
  );
};

export default ScrollUp;
