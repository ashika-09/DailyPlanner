import React, { useState } from "react";
import "./task.css";
import Cards from "./cards";

const Task = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, SetArray] = useState([]);
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = () => {
    SetArray([...Array, Inputs]);
    setInputs({ title: "", body: "" });
  };
  return (
    <div className="task">
      <div className="main-task container d-flex justify-content-center align-items-center flex-column my-4">
        <div className="d-flex flex-column task-input-div w-50 p-1">
          <input type="text"
            placeholder="Tile"
            className="my-2 p-2 task-input"
            onClick={show}
            name="title"
            value={Inputs.title}
            onChange={change}
          />
          <textarea
            id="textarea"
            type="text"
            placeholder="Body"
            name="body"
            value={Inputs.body}
            onChange={change}
            className=" p-2 task-input" />

        </div>
        <div className="w-50 d-flex justify-content-end m-3">
          <button className="home-btn px-4 py-2" onClick={submit}>Add Task</button>
        </div>
      </div>
      <div task-body>
        <div className="container-fluid">
          <div className="row">
            {Array && Array.map((item, index) => (
              <div className="col-lg-3 mx-5 my-2 col-10">
                <Cards title={item.title} body={item.body}/>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>


  );
}
export default Task;