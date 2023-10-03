import React from "react";
import Select from "react-select";
import { useState } from "react";
// import { Link } from "react-router-dom";
import Read from "./Read.js";
const skill = [
  { value: "html", label: "html" },
  { value: "css", label: "css" },
  { value: "laravel", label: "laravel" },
  { value: "react", label: "react" },
];

function Form() {
  const [state, setState] = useState({
    name: "",
    lname: "",
    email: "",
    skill: "",
  });
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    console.log(e, "value");
  };

  const handleChange = (e) => {
    const value = e.preventDefault();
    setState({ ...state, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, state]);
  };
  console.log(data);
  return (
    <div>
      <form className="form-main">
        <div className="form">
          <h1 className="heading">Registration Form</h1>
          <label className="form-label" for="form3Example1">
            First name
          </label>
          <br />
          <input
            type="text"
            id="form3Example1"
            name="name"
            value={state.name}
            className="form-control"
            onChange={handleChange}
          />
          <br />

          <label className="form-label" for="form3Example2">
            Last name
          </label>
          <br />
          <input
            type="text"
            id="form3Example2"
            name="lname"
            value={state.lname}
            className="form-control"
            onChange={handleChange}
          />
          <br />
          <label className="form-label" for="form3Example3">
            Email address
          </label>
          <br />
          <input
            type="email"
            id="form3Example3"
            name="email"
            value={state.email}
            className="form-control"
            onChange={handleChange}
          />
          <br />
          <label className="form-label" for="form3Example3">
            Skill
          </label>
          <Select
            options={skill}
            defaultValue={skill[0]}
            className="select"
            placeholder="add skill"
            onChange={handleClick}
            isMulti
          ></Select>
          <br />

          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn btn-primary btn-block mb-4"
          >
            Sign up
          </button>

          <br />
        </div>
      </form>
      <Read />
    </div>
  );
}

export default Form;
