"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

import axios from "axios";

const Stats = () => {
  const match = {
    teamA: {
      name: "Team A",
      score: "210/5",
      overs: "18.3",
    },
    teamB: {
      name: "Team B",
      score: "180/7",
      overs: "20",
    },
    status: "In Progress",
    result: "",
  };

  return (
    <>
      <Link
        to={"/Cricketscore"}
        className="ml-20 cursor-pointer hover:text-blue-500"
      >
        cricket score
      </Link>
      <Link
        to={"/footballscore"}
        className="ml-20 cursor-pointer hover:text-blue-500"
      >
        Football Score
      </Link>
    </>
  );
};

export default Stats;
