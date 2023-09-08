import React from "react";
import { useParams } from "react-router";

const ScienceNews = () => {
  const params = useParams();
  console.log(params.id);
  return <div>{params.id}</div>;
};
export default ScienceNews;
