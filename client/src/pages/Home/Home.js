import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrajetHome from '../../Components/TrajetHome';
import { getAllTrajets } from '../../JS/trajetslice/trajetSlice';
import './home.css';

const Home = () => {
    const [dep, setdep] = useState("")
    const [arrive, setarrive] = useState("")
    const [date_dep, setdate_dep] = useState("")



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTrajets());
    }, []);
    const trajetRedux = useSelector((state) => state.trajet.trajet);

    return (
        <div>
            <div className ="bg1" >
                <img width="1340" height="500" src='/bg1.png' />
            </div>
            <div className="bg2 tracking-in-contract-bck">
                <h1>Un vaste choix de trajets à petits prix</h1>
            </div>
            <div>
                <img src='section3.png'/>
            </div>
            <div className="titrechercher"><h3>Chercher votre trajet préféré :</h3></div>
            <div className="search">
                <input type="text" placeholder="Depart" onChange={(e)=>setdep(e.target.value)}/>
                <input type="text" placeholder="Arrivée" onChange={(e)=>setarrive(e.target.value)}/>
                <input type="date" onChange={(e)=>setdate_dep(e.target.value)}/>
            </div>
            <div>
                {trajetRedux? (trajetRedux.filter(el=>el?.depart.toLowerCase().includes(dep.toLowerCase())  && el?.arrive.toLowerCase().includes(arrive.toLowerCase())  && el.date_dep.includes(date_dep.toLowerCase())).map((el)=>(<TrajetHome trajet={el}/>))):(
                    <h1>Loading ....</h1>
                )}
            </div>
        </div>
    )
}

export default Home;
