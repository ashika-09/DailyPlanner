import React from "react";

const Update = ({display}) => {
    return <div className="p-5 d-flex justify-center align-items-start flex-column update">
        <h3>Update task</h3>
        <input
            type="text" className="task-inputs my-4 w-100 p-3"
        />
        <textarea className="task-inputs w-100 p-3" />
        <div>
            <button className="btn btn-dark my-4">Update</button>
            <button className="btn btn-danger my-4 mx-3" onClick={()=>display("none")}>Close</button>
        </div>
    </div>;
};

export default Update;
