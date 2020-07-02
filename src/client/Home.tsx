import * as React from "react";
import { useState, useEffect } from "react";
import AdminButton from "./AdminButton";
import { Link } from "react-router-dom";

const Home: React.FC<IHomeProps> = (props) => {
  const [chirps, setChirps] = useState<IChirp[]>([]);

  const getChirps = async () => {
    try {
      let r = await fetch("/api/chirps");
      let chirps = await r.json();
      console.log(chirps);
      setChirps(chirps);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChirps();
  }, []);

  return (
    <div className="container">
      {chirps.map((chirp) => {
        return (
          <div key={chirp.id} className="card mb-3">
            <div className="card-header container-fluid">
              <div className="row justify-content-between">
                <Link to={`/mentions/${chirp.name}`}>
                  <h5 className="m-2">{chirp.name}</h5>
                </Link>
                <AdminButton id={chirp.id} />
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

interface IHomeProps {}

interface IChirp {
  name: string;
  content: string;
  id: string;
}

export default Home;
