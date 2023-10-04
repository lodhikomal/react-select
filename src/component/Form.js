import React from "react";
import Select from "react-select";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Form() {
  const skill = [
    { value: "html", label: "html" },
    { value: "css", label: "css" },
    { value: "laravel", label: "laravel" },
    { value: "react", label: "react" },
  ];
  const [state, setState] = useState({
    name: "",
    lname: "",
    email: "",
    skill: "",
  });
  const [inputArr, setInputArr] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState();

  const handleClick = (e) => {
    const newSkill = skill.find(skill.value === e.target.value);
    setState(newSkill);
    console.log(newSkill, "item");
  };
  const handleChange1 = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };

  const handleChange = (e) => {
    // e.preventDefault();
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // setState(state, newState);
  };
  console.log(state);
  // let { name, lname, email } = state
  const handleSubmit = (e) => {
    // alert(JSON.stringify(state));
    e.preventDefault();
    setInputArr([...inputArr, { ...state, skill: selectedOptions }]);
    setSelectedOptions([]);
    setState({ name: "", lname: "", email: "", skill: "" });
  };
  const handleDelete = (e) => {
    const del = [...inputArr];
    del.splice(e, 1);
    setInputArr(del);
  };
  const handleUpdate = (item, index) => {
    setState({ ...item });
    setSelectedOptions(item.skill);
    console.log(item);
    setIsEdit(true);
    setIndex(index);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setInputArr((prev) => [
      ...prev.slice(0, index),
      {
        ...prev[index],
        ...state,
        skill: selectedOptions,
      },
      ...prev.slice(index + 1),
    ]);
    setIsEdit(false), setState({ name: "", lname: "", email: "", skill: "" });
    setSelectedOptions([]);
  };
  console.log(inputArr, "selectedOptions");
  return (
    <div className="container">
      <form className="form-main" onSubmit={!isEdit ? handleSubmit : handleAdd}>
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
            onChange={handleChange1}
            value={selectedOptions}
            isMulti
          ></Select>
          <br />

          <button type="submit" className="btn">
            {!isEdit ? "signup" : "update"}
          </button>

          <br />
        </div>
      </form>
      <table border="1" cellPadding="6" cellSpacing="5" className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>last name</th>
            <th>email</th>
            <th>Skill</th>
            <th colSpan="2"> Action</th>
          </tr>
          {/* <tr> */}
          {inputArr.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>

                <td>
                  {item.skill.map((a) => {
                    return <span>{a.value}</span>;
                  })}
                </td>
                <td>
                  <button
                    type="button "
                    onClick={() => handleUpdate(item, index)}
                  >
                    Edit
                  </button>
                  <button type="button" onClick={handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
