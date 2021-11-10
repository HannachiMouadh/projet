import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTrajet } from '../../JS/trajetslice/trajetSlice';
import EditTrajet from '../EditTrajet';
import './Trajet.css'

const Trajet = ({trajet}) => {
    const dispatch = useDispatch();
    return (
            <div className="trajett">
                <div className="trajet">
                    <h4>Depart :{trajet.depart}</h4>
                    <h4>Arrivée :{trajet.arrive}</h4>
                    <h5>Date de depart :{trajet.date_dep}</h5>
                    <h5>Nombre de places:{trajet.nombredepassage}</h5>
                    <h5>prix par place en (DT) :{trajet.prix}</h5>
                    <h5>Model de voiture :{trajet.modelvoiture}</h5>
                    <h5>Couleur de voiture :{trajet.couleurvoiture}</h5>
                    <h5>Description :{trajet.description}</h5>
                </div>
                <EditTrajet tj={trajet} />
                <button onClick={() => {dispatch(deleteTrajet(trajet._id));window.location.reload()}}  className="btn btn-danger">Supprimer</button>
            </div>
                   
    )
}

export default Trajet;
