import React from "react";
import Navbar from "../navbar/Navbar";
import admin from "./admin.svg";
import create from "./create.svg";
import view from "./view.svg";
import update from "./update.svg";
// import "./adminProfile.css";
import { useNavigate } from "react-router-dom";

export default function AdminProfile() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/addfaculties");
  };
  return (
    <div>
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className=" sm:mt-20 mt-28 sm:w-4/6 w-full sm:mb-6mb-4 text-center">
          <img src={admin} alt="fac" />
        </div>
      </div>
      <div className=" flex justify-center sm:flex-row flex-col">
        <div className="sm:w-1/2 sm:pl-2 pl-8">
          <img src={create} alt="create" />
          <button
            className="bg-white pl-10 pr-10 p-2 rounded-3xl font-bold"
            onClick={onClickHandler}
          >
            Create Table
          </button>
        </div>
        <div className="sm:w-1/2 sm:pl-2 pl-8">
          <img src={view} alt="view" />
          <button className="bg-white pl-10 pr-10 p-2 rounded-3xl font-bold">
            View Table
          </button>
        </div>
        <div className="sm:w-1/2 sm:pl-2 pl-8">
          <img src={update} alt="update" />
          <button className="bg-white pl-10 pr-10 p-2 rounded-3xl font-bold">
            Update Table
          </button>
        </div>
      </div>
    </div>
  );
}
