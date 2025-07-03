import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const cards = ({ title, body ,id, delid , display}) => {
    return (
        <div className="p-3 card">
            <div>
                <h5>{title}</h5>
                <p className="para">
                    {body}
                </p>
            </div>
            <div className="d-flex gap-3 ">
                <div className="d-flex justify-content align-items-center card-icon update px-2 py-1"
                  onClick={()=>{
                    display("block");
                  }}
                >
                    <GrDocumentUpdate className="icons update"/>Update
                </div>
               <div className="d-flex justify-content text-danger align-items-center card-icon delete px-2 py-1"
               onClick={()=>{
                delid(id);
               }}
               >
                <AiFillDelete className="icons delete "/>Delete
                </div> 
            </div>
        </div>
    );
}
export default cards;