import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  let { id } = useParams();
  return <div>User ID: {id}</div>;
};

export default DetailsPage;
