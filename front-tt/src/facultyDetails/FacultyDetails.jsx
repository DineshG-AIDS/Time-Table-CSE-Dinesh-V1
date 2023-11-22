// FacultyDetails.js
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import DescriptionCircle from "../DescriptionCircle";
import des from "../des.svg";
import SearchBar from "../searchbar/SearchBar";
import SearchResultsList from "../searchResults/SearchResultsList";
import "./facultyDetails.css";

export default function FacultyDetails() {
  const [results, setResults] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [facSearc, setFacSearch] = useState();
  return (
    <div className="facultyDetails">
      <Navbar className="navv" />
      <div className="w-full flex items-center justify-center">
        <div className=" sm:mt-20 mt-24 sm:pl-20 sm:w-4/6 w-11/12 sm:mb-6mb-4 text-center">
          <img src={des} alt="fac" />
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-filter">
          <SearchBar
            setResults={setResults}
            setSelectedDepartment={setSelectedDepartment}
            setFacSearch={setFacSearch}
          />
          <SearchResultsList results={results} />
        </div>
      </div>
    </div>
  );
}
