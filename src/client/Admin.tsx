import React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

const Admin: React.FC<IAdminProps> = (props) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const getChirp = async () => {
    let r = await fetch(`/api/chirps/${props.match.params.id}`);
    let chirp = await r.json();
    setText(chirp.content);
    setName(chirp.name);
  };

  useEffect(() => {
    getChirp();
  }, []);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch(`/api/chirps/${props.match.params.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        text: text,
      }),
    });
    props.history.replace('/')
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch(`/api/chirps/${props.match.params.id}`, {
      method: "DELETE",
    });
    props.history.replace('/')
  };

  return (
    <>
      <h3>Edit Chirp</h3>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Username
          </span>
        </div>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={`${name}`}
        />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Message</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            defaultValue={`${text}`}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
        </div>
        <div className="input-group mb-3 justify-content-between">
          <button
            onClick={handleUpdate}
            className="btn btn-primary btn-sm"
            id="submitBtn"
          >
            Submit
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-danger btn-sm"
            id="submitBtn"
          >
            Delete Chirp
          </button>
        </div>
      </div>
    </>
  );
};

interface IAdminProps extends RouteComponentProps<{ id: string }> {}

export default Admin;
