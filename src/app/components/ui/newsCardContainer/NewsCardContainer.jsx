import React from "react";
import CardOne from "../../common/newsCard/cardOne/CardOne";
import CardTwo from "../../common/newsCard/cardTwo/CardTwo";
import CardThree from "../../common/newsCard/cardThree/CardThree";
import CardFour from "../../common/newsCard/cardFour/CardFour";
import CardFive from "../../common/newsCard/cardFive/CardFive";
import CardSix from "../../common/newsCard/cardSix/CardSix";
import CardSeven from "../../common/newsCard/cardSeven/CardSeven";
import CardEight from "../../common/newsCard/cardEight/CardEight";

const NewsCardContainer = () => {
  return (
    <div className="newscards">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <CardSix />
      <CardSeven />
      <CardEight />
    </div>
  );
};
export default NewsCardContainer;
