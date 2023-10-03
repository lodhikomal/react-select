import React from "react";

function Create({ data }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Skill</th>
          </tr>
        </thead>
        {data?.map((item) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.skill}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Create;
