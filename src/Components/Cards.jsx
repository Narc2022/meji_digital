import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {data.length &&
        data.map((user, key) => (
          <div className="flex-auto w-50" key={key}>
            <Link to={`/user/${user.id}`}>details</Link>
          </div>
        ))}
    </div>
  );
};

export default Cards;
