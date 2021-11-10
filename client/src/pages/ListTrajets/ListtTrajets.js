import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Trajet from '../../Components/Trajet/Trajet'
import { getAllTrajets } from '../../JS/trajetslice/trajetSlice';
import './listtrajets.css'

const ListtTrajets = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getAllTrajets());
    }, [])
    const userRedux = useSelector((state) => state.user.user);
    const trajetRedux = useSelector((state) => state.trajet.trajet);

    return (
        <div className="listtrajets">
          {trajetRedux? (trajetRedux.filter(el=>el.createdBy === userRedux?._id).map((el)=>(<Trajet trajet={el}/>))):(
            <h1>Loading ....</h1>
          )}
        </div>
    )
}

export default ListtTrajets;
