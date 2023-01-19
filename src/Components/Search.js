import React from "react";
import "../studentsList";
import { STUDENTS } from "../studentsList";
import { useState, useEffect } from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search() {
  const [myArrayName, setmyArrayName] = useState([]);
  const [myArrayDate, setmyArrayDate] = useState([]);
  const [myInputName, setmyInputName] = useState("");
  const [myInputDate, setmyInputDate] = useState("");
  // The array that will be displayed in the residence list
  const [myArrayList, setmyArrayList] = useState([]);

  let residentArray = [];
  let residentName;

  let residentArrayDate = [];
  let residentDate;


  const handleClick = () => {
    for (let i = 0; i < STUDENTS.length; i++) {
      residentName = STUDENTS[i].name;
      residentArray.push(residentName.toLowerCase());

      residentDate = STUDENTS[i].validityDate;
      residentArrayDate.push(residentDate);
    }

    setmyArrayName(residentArray);
    setmyArrayDate(residentArrayDate);

    // console.log(myArrayDate);
    // console.log(myArrayName);

    console.log(myInputName);
    console.log(myInputDate);


    if (myArrayName.indexOf(myInputName.toLowerCase()) === -1) {
      // console.log("name not valid");
    } else {
      if (checkValidity(myInputDate, myArrayDate[myArrayName.indexOf(myInputName.toLowerCase())])) {
        // console.log("date is valid");

        setmyArrayList([...myArrayList, myInputName]);
        console.log(myArrayList);
      } else {
        // console.log("date not valid");
      }
      // console.log("name is valid");
    }

    setmyInputName("");
    setmyInputDate("");

  };

  useEffect(() => {
    handleClick();
  }, []);


  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            value={myInputName}
            onChange={(e) => {
              setmyInputName(e.target.value);
            }}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            value={myInputDate}
            onChange={(e) => {
              setmyInputDate(e.target.value);
            }}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={() => handleClick()}
      >
        Add
      </button>

      <h1>Check</h1>
      {myArrayList.map((name, index) => (
        <ul key={index}>
          <li>{name}</li>
        </ul>
      ))}
    </div>
  );
}
export default Search;
