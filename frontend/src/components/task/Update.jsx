import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Update = ({display , update}) => {

    

    const [Inputs, setInputs]= useState({title: "", body: ""});
    const change=(e)=>{
        const {name , value }=e.target;
        setInputs({ ...Inputs, [name] : value});
    }
    
    const submit = async()=>{
        console.log(update.id);
        await axios.put(`http://localhost:1000/api/v1/updateTask/${update._id}`,Inputs)
        .then((response)=>{
           toast.success("Your Task is Updated",{ autoClose: 2000});
        });
        display("none");
    }
     useEffect(()=>{
     setInputs({
        title: update.title, body: update.body 
     });
    },[update])
   
   return <div className="p-5 d-flex justify-center align-items-start flex-column update">
        <h3>Update task</h3>
        <input
            type="text" className="task-inputs my-4 w-100 p-3" value={Inputs.title}
               onChange={change} name="title"

        />
        <textarea className="task-inputs w-100 p-3" value={Inputs.body}
            onChange={change} name="body"
        />
        <div>
            <button className="btn btn-dark my-4" onClick={submit}>Update</button>
            <button className="btn btn-danger my-4 mx-3" onClick={()=>display("none")}>Close</button>
        </div>
    </div>;
};

export default Update;
