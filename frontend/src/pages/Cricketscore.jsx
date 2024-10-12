import React from "react";
import { Link } from "react-router-dom";
const Cricketscore = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link to={"/odi"} className="ml-20 cursor-pointer hover:text-blue-500">
          Odi score
        </Link>
        <Link to={"/t-20"} className="ml-20 cursor-pointer hover:text-blue-500">
          t20i score
        </Link>
        <Link to={"/test"} className="ml-20 cursor-pointer hover:text-blue-500">
          test score
        </Link>
        <Link
          to={"/firstclass"}
          className="ml-20 cursor-pointer hover:text-blue-500"
        >
          firstclass score
        </Link>
      </div>
    </div>
  );
};

export default Cricketscore;
