import React, { useState, useEffect } from 'react'
import AdminButton from './AdminButton';
import { Link, RouteComponentProps } from 'react-router-dom';

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
    }, []);

    return <div className="container">
    {chirps.map((chirp) => {
        return (
            <div key={chirp.chirpid} className="card">
                <div className="card-body">
                   <Link to="/mentions"><h5 className="card-title">{chirp.chirpName}</h5></Link> 
                    <p className="card-text">{chirp.content}</p>
                    <AdminButton id={chirp.chirpid} />
                </div>
            </div>
        )
    })}</div>;
};

interface IChirp {
    content: string;
    id: string
    chirpid: string
    chirpName: string
}

interface IMentionsPageProps extends RouteComponentProps<{id: string}> {};

export default MentionsPage;
