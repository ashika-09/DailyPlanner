import React, { useEffect, useState } from "react";
import "./task.css";
import Cards from "./cards";
import { ToastContainer, toast } from 'react-toastify';
import Update from "./Update";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import axios from "axios";
import { useSelector } from "react-redux";

let id = sessionStorage.getItem("id");
let toupdatearray=[];
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

  const submit = async () => {
    if (!Inputs.title.trim() || !Inputs.body.trim()) {
      toast.error("Please fill in both Title and Body.",{ autoClose: 2000});
      return;
    } else {
      if (id) {
        await axios.post("http://localhost:1000/api/v1/addTask", { title: Inputs.title, body: Inputs.body, id: id }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log("API error:", error);
        });

        setInputs({ title: "", body: "" });
        toast.success("Your Task is Added",{ autoClose: 2000});

      } else {
        SetArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your Task is Added",{ autoClose: 2000});
        toast.error("Your Task is Not Saved Yet, Please Sign Up First",{ autoClose: 2000});
      }

    }
  };
  const dis = (value) => {
    console.log(value);
    document.getElementById("task-update").style.display = value;
  }

   const update=(value)=>{
    toupdatearray=Array[value];
  }
  const del = async (cardid) => {
    if(id){
       await axios.delete(`http://localhost:1000/api/v1/deleteTask/${cardid}`, {
      data:{ id: id },
  })
    .then(()=>{
    toast.success("Your Task is Deleted",{ autoClose: 2000});
   
    })

    }else{
      toast.error("Please signup Firse",{ autoClose: 2000});
   
    }
   
    
  }

  useEffect(()=>{
    if(id){
      const fetch= async ()=>{
      await axios.get(`http://localhost:1000/api/v1/gettask/${id}`)
      .then((response)=>{
          SetArray(response.data.list);
      });
    };
    fetch();
    }else{
      toast.error("Please signup Firse",{ autoClose: 2000});
    }
    
  }, [submit]);
  return (
    <>
      <div className="task">
        <ToastContainer />
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
                <div className="col-lg-3 mx-5 my-2 col-10" key={index}>
                  <Cards title={item.title}
                    body={item.body}
                    id={item._id}
                    delid={del}
                    display={dis}
                    updateid={index} 
                    tobeupdate={update}
                    />
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
      <div className="task-update" id="task-update">
        <div className="container"></div>
        <Update display={dis} update={toupdatearray}/>

      </div>
    </>
  );
}
export default Task;