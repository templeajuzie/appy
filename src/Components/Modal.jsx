import { useState } from "react";
import "./Modalstyle.css";

const Modal = ({
  sendFile,
  closeFile,
  sendFullname,
  sendUsername,
  sendBio,
  setFullname,
}) => {
  const [newFname, setNewfname] = useState(sendFullname);

  const changeFname = () => {
    setNewfname(newFname);
    setFullname(newFname);
    closeFile();
    console.log(newFname);
  };

  return (
    <div className="modal">
      {sendFile}

      <button
        onClick={() => {
          closeFile();
        }}
      >
        Close modal
      </button>

      <h4>{sendFullname}</h4>
      <h6>{sendUsername}</h6>
      <span>{sendBio}</span>

      <input
        type="text"
        placeholder="Enter Fullname"
        value={newFname}
        onChange={(e) => {
          setNewfname(e.target.value);
        }}
      />

      <button onClick={() => changeFname()}>Change fullname</button>
    </div>
  );
};

export default Modal;
