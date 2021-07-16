import React, {useState, useEffect} from "react"
import NavBar from "./NavBar";
import Stages from "./Stages";
import HelpIcon from "./HelpIcon";
import VerifyModal from "./VerifyModal";

const Documents = ({ setAuth }) => {
    const [fileData, setFileData] = useState();
    const [userId, setUserId] = useState("");

    const getProfile = async () => {
          try {
            const res = await fetch("http://localhost:5000/dashboard/", {
              method: "GET",
              headers: { jwt_token: localStorage.token }
          });
            const parseData = await res.json();
            setUserId(parseData.user_id);
          } catch (err) {
            console.error(err.message);
          }
    };
 
    useEffect(() => {
      getProfile();
    }, []);

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //const temp = JSON.stringify(userId);
        // handle file data from the stat before sending
        // sets "data" to the same data type that multer uses
        const data = new FormData();
        data.append('upload', fileData) // fileData comes from stat which comes from submit handler

        fetch("http://localhost:5000/dashboard/documents", {
            method:"POST",
            body: data,
            headers: {user_id: JSON.stringify(userId)},
        })
        .then((result) => {
            console.log("File Sent Successful");
        })
        .catch((err) => {
            console.log(err.message);
        });
        setFileData(null);
    };

    return(
        <div>
            <VerifyModal/>
            <NavBar setAuth={setAuth}/>
            <Stages/>
            <div class="welcomeDoc">
                <h2>Steps to Complete</h2>
            </div>
            <div className="steps">
                <p className="text-left">Verify Identity</p>
                <button type="button" class="btn btn-primary btn-right" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Start
                </button>
            </div>
            <hr size="4" width="75%" color="black"/>

            <br/>
            <div class="welcomeDoc">
                <h2>Document Upload</h2>
            </div>
            <form class="input-group mb-3" onSubmit={onSubmitHandler}>
            <input 
                type="file" 
                class="form-control" 
                id="inputGroupFile01"  
                onChange={fileChangeHandler}
            />
            <button type="submit" className="subDocument">
                Upload File
            </button>
            </form>
            <HelpIcon/>
        </div>
    )
}

export default Documents;