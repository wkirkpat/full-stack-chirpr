import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

const AddChirp: React.FC<IAddProps> = (props) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch("/api/chirps", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        text: text,
      }),
    });

    //This checks to see if there is a mention in the chirp, then adds the mention to the table if there is
    if (text.includes("@")) {
      let newText = text.split("@");
      let mention = newText[1].split(" ")[0];

      fetch("/api/mentions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mention: mention,
        }),
      });
    }

    props.history.push("/");
  };

  return (
    <>
      <h3 className="ml-5">Add a Chirp</h3>
      <div className="input-group mb-3 container">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Username
          </span>
        </div>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <div className="input-group my-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Message</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={(event) => setText(event.target.value)}
          ></textarea>
        </div>
        <div className="input-group mb-3">
          <button
            onClick={handleClick}
            className="btn btn-primary btn-sm"
            id="submitBtn"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

interface IAddProps extends RouteComponentProps {}

export default AddChirp;
