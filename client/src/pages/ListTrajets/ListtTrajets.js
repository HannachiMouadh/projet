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
            <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>Depart</th>
                    <th>Arrivée </th>
                    <th>Date de depart</th>
                    <th>Nombre de places</th>
                    <th>Prix par place en (DT)</th>
                    <th>Model de voiture</th>
                    <th>Couleur de voiture</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
            {trajetRedux?.filter(el=>el.createdBy === userRedux?._id).map((el)=>(<Trajet trajet={el}/>))}
            </tbody>
            <tfoot>
                  <tr>
                    <th>Depart</th>
                    <th>Arrivée </th>
                    <th>Date de depart</th>
                    <th>Nombre de places</th>
                    <th>Prix par place en (DT)</th>
                    <th>Model de voiture</th>
                    <th>Couleur de voiture</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                  </tfoot>
                </table>
        </div>
    )
}

export default ListtTrajets
