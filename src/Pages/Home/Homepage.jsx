import { useRef, useState } from "react";
import "./Homestyle.css";
import Aboutpage from "../Aboutpage";
import Modal from "../../Components/Modal";
import { useSelector, useDispatch } from 'react-redux'

const Homepage = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  const [data, setData] = useState(false);

  const [file, setFile] = useState("This a file from Homepage");

  const [fullname, setFullname] = useState("Temple Ajuzie");
  const [username, setUsername] = useState("@templeaj");
  const [bio, setBio] = useState(
    "Full stack Developer/Entrepreneur. 😎 Building scalable solutions with Node.js | React.js | Next.js | Mongo db | Tailwind css and more. #CodeTempo"
  );

  const Open = () => {
    setData(true);
    console.log("Modal open true");
  };

  const Close = () => {
    setData(false);
    console.log("Modal close true");
  };

  //use State
  const [item1, setItem1] = useState(0);

  //use Ref
  const item2 = useRef("peter");

  useRef(() => {
    item2.current = "Paula";
  }, [item2]);

  const happen = () => {
    item2.current = "change";
  };

  return (
    <div className="general">

      <h1>Count No: {count}</h1>

      <button onClick={() => {dispatch}}>Increase No</button>

      <button
        onClick={() => {
          Open();
        }}
      >
        Open Modal{" "}
      </button>

      <h4>{fullname}</h4>
      <h5>{username}</h5>
      <h6>{bio}</h6>

      
        <Modal
          sendFile={file}
          closeFile={Close}
          sendFullname={fullname}
          sendUsername={username}
          sendBio={bio}
          setFullname={setFullname}
        />
     

      <h1>{item1}</h1>
      <button onClick={() => setItem1(item1 + 1)}>Change Item 1</button>
      <h1>{item2.current}</h1>

      <button
        onClick={() => {
          happen();
        }}
      >
        Change Item 2
      </button>
    </div>
  );
};

export default Homepage;
