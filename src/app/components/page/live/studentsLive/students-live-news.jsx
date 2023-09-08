import React from "react";
import { useParams } from "react-router";

const StudentsLiveNews = () => {
  const params = useParams();
  console.log(params.id);
  return <div>{params.id}</div>;
};
export default StudentsLiveNews;
