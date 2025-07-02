import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const cards = ({ title, body }) => {
    return (
        <div className="p-3 card">
            <div>
                <h5>{title}</h5>
                <p className="para">
                    {body}
                </p>
            </div>
            <div className="d-flex gap-3 ">
                <div className="d-flex justify-content align-items-center card-icon px-2 py-1">
                    <GrDocumentUpdate className="icons update"/>Update
                </div>
               <div className="d-flex justify-content text-danger align-items-center card-icon px-2 py-1">
                <AiFillDelete className="icons delete "/>Delete
                </div> 
            </div>
        </div>
    );
}
export default cards;