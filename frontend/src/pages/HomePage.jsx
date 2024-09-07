import React from "react";
import { useAuthStore } from "../store/authStore";

import Nav from "../components/Nav";


const page = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <Nav/>
      <div className="text-3xl mt-3 p-5 font-mono">
        Hello {user.name}, Welcome to AthleteHub. We are under production at the
        moment, will update you soon.
      </div>
    </div>
  );
};

export default page;
