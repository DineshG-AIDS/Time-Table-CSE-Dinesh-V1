// SearchBar.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export default function SearchBar({
  setResults,
  setSelectedDepartment,
  normalSearch,
  setFacSearch = () => {},
}) {
  const [input, setInput] = useState("");
  const [department, setDepartment] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:5000/faculty")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value) &&
            (!department || user.department === department)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setFacSearch(true);
  };

  const handleDepartmentChange = (value) => {
    setDepartment(value);
    setSelectedDepartment(value);
    fetchData(input);
  };

  return (
    <div>
      {!normalSearch ? (
        <div className="input-wrapper bg-white w-full flex items-center pl-10 pr-10 p-4 rounded-3xl mt-10">
          <FaSearch id="search-icon" className="sm:w-10 w-4" />
          <input
            className="sm:w-full w-44 pl-2 "
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <select
            className=" pl-8"
            value={department}
            onChange={(e) => handleDepartmentChange(e.target.value)}
          >
            <option value="">All Departments</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="AI&DS">AI&DS</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="CCE">CCE</option>
            <option value="CSBS">CSBS</option>
            <option value="AIML">AIML</option>
            <option value="Mech">Mechanical</option>
          </select>
        </div>
      ) : (
        <div className="w-10">
          <input
            className="w-10"
            placeholder="Faculty Name Search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
