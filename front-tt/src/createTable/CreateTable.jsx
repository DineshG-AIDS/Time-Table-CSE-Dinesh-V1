import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import create from "../createTable.svg";
import "./createTable.css";
import warn from "../warn";
import { useClassContext } from "../ClassContext";

export default function CreateTable() {
  const classe = useClassContext();
  const [classSelected, setClassSelected] = useState("");
  const [subjects, setSubjects] = useState({});
  const [faculties, setFaculties] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [classes, setClasses] = useState([]);
  const [view, setView] = useState(false);
  const [backspace, setBackspace] = useState(false);
  useEffect(() => {
    // Fetch class names from the backend
    fetch("http://localhost:5000/classnames")
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => {
        console.error("Error fetching class names:", error);
      });
    const fetchData = async () => {
      try {
        if (classSelected) {
          console.log(`Selected class: ${classSelected}`);
          // Fetch class details including subjects, faculties, and timetable
          const response = await fetch("http://localhost:5000/classdetails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ className: classSelected }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log("Fetched class details:", data);
          console.log(data.subjects);

          // Assuming setSubjects and setTimetable are state setters
          setSubjects(data.subjects);
          setTimetable(data.timetable);
          setView(true);
        }
      } catch (error) {
        console.error("Error fetching class details:", error.message);
      }
    };

    fetchData(); // Call the async function
    console.log(`subjects ${subjects}`);
  }, [classSelected]);

  // useEffect(() => {
  //   console.log(subjects, faculties);
  // }, [subjects, faculties]);

  const handleClassChange = (event) => {
    setClassSelected(event.target.value);
    console.log(subjects);
  };

  const handleCellChange = (day, hour, e) => {
    console.log(day, hour);
    if (e.key === "Enter") {
      const cellContent = e.target.innerText; // Get the typed content in the cell
      console.log("Calling assign");

      fetch("http://localhost:5000/assign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          className: classSelected,
          day,
          hour,
          cellContent,
          backSpace: backspace, // Include the typed content in the request body
        }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Subject assigned successfully");
            setBackspace(false);
          } else {
            throw new Error("Failed to assign subject");
            setBackspace(false);
          }
        })
        .catch((error) => {
          console.error("E assigning subject:", error);
          warn("Faculty has already assigned!!");
        });
    }
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hours = [...Array(7).keys()]; // Generates an array from 0 to 6

  // Generate table cells and fill them with timetable data
  const cells = [];
  for (let day = 0; day < 6; day++) {
    for (let hour = 0; hour < 7; hour++) {
      const cellData = timetable.find(
        (cell) => cell.day === days[day] && cell.hour === (hour + 1).toString()
      );
      cells.push(
        <td
          key={`${day}-${hour}`}
          contentEditable={true}
          // onBlur={(e) => handleCellChange(days[day], hour + 1, e)}
          onKeyDown={(e) => handleKeyPress(e, days[day], hour + 1)}
        >
          {cellData ? cellData.subject : ""}
        </td>
      );
    }
  }
  //key press
  const handleKeyPress = (e, day, hour) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
      handleCellChange(day, hour, e); // Unfocus the cell after Enter is pressed
    }
    if (e.key === "Backspace") {
      setBackspace(true);
    }
  };
  return (
    <div className="scroll-container">
      <Navbar />
      <div className="">
        <div className="w-full flex items-center justify-center">
          <div className=" sm:mt-20 mt-32 sm:pl-32 sm:w-4/6 w-11/12 sm:mb-6mb-4 text-center">
            <img src={create} alt="fac" />
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <select
              className="w-32 bg-white rounded-2xl px-1 p-2 pl-2 py-2"
              value={classSelected}
              onChange={handleClassChange}
            >
              <option value="">Select a class</option>
              {classes.map((className, index) => (
                <option key={index} value={className}>
                  {className}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {view && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="wrap">
            <div className="dis">
              {Object.entries(subjects).map(([abbreviation, facultyName]) => (
                <div key={abbreviation} className="ele">
                  <span>
                    {facultyName} - {abbreviation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center ">
        <div className="table">
          <div className="sm:w-full">
            <div className="table-span">{classSelected}</div>
          </div>
          <div className="sm:w-full  ">
            <table className="">
              <thead>
                <tr>
                  <th className="sm:text-xl text-xs">Day/Period</th>
                  {hours.map((hour) => (
                    <th className="sm:text-xl text-xs" key={hour}>
                      Hour {hour + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className=" text-xs sm:text-2xl">
                {days.map((day, index) => (
                  <tr className="sm:text-xl text-xs" key={index}>
                    <th>{day}</th>
                    {cells.slice(index * 7, (index + 1) * 7)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className=" p-4 rounded-2xl flex justify-center">
            <div
              className=" bg-gray-500 sm:w-1/2 w-2/5  text-sm sm:pt-4 sm:pb-2 pt-2 pb-2 font-extrabold text-white rounded-3xl"
              style={{ width: "fitContent" }}
            >
              View More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
