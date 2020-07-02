import React, { useState, useEffect } from "react";
import AdminButton from "./AdminButton";
import { Link, RouteComponentProps } from "react-router-dom";

const MentionsPage: React.FC<IMentionsPageProps> = (props) => {
  const [chirps, setChirps] = useState<IChirp[]>([]);

  //The fetch request returns an array with 2 items, the first item is the array of chirps we want, the second item we don't want. That's why we set
  //chirps equal to the first index of the array
  const getChirps = async () => {
    try {
      let r = await fetch(`/api/mentions/${props.match.params.id}`);
      let chirps = await r.json();
      setChirps(chirps[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChirps();
  }, [props.match.params.id]);

  return (
    <div className="container">
      {chirps.map((chirp) => {
        return (
          <div key={chirp.chirpid} className="card mb-3">
            <div className="card-header container-fluid">
              <div className="row justify-content-between">
                <Link to={`/mentions/${chirp.chirpName}`}>
                  <h5 className="m-2">{chirp.chirpName}</h5>
                </Link>
                <AdminButton id={chirp.chirpid} />
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{chirp.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface IChirp {
  content: string;
  id: string;
  chirpid: string;
  chirpName: string;
}

interface IMentionsPageProps extends RouteComponentProps<{ id: string }> {}

export default MentionsPage;
