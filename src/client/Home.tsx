import * as React from "react";
import { useState, useEffect } from "react";
import AdminButton from "./AdminButton";

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

    return <div className="container">
        {chirps.map((chirp) => {
            return (
                <div key={chirp.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{chirp.name}</h5>
                        <p className="card-text">{chirp.content}</p>
                        <AdminButton id={chirp.id} />
                    </div>
                </div>
            )
        })}</div>;
};

interface IHomeProps { }

interface IChirp {
    name: string;
    content: string;
    id: string
}

export default Home;
