import React from 'react'
import "./TrajetHome.css"
const TrajetHome = ({trajet}) => {
    return (
        <div className="trajet-card">
        {/* <div>
            <h4>Depart :{trajet.depart}</h4>
            <h4>Arrivée :{trajet.arrive}</h4>
        </div>
        <div>
            <h5>Date de depart :{trajet.date_dep}</h5>
            <h5>Nombre de places:{trajet.nombredepassage}</h5>
            <h5>prix par place en (DT) :{trajet.prix}</h5>
            <h5>Model de voiture :{trajet.modelvoiture}</h5>
            <h5>Couleur de voiture :{trajet.couleurvoiture}</h5>
            <h5>Description :{trajet.description}</h5>
        </div> */}


    <div className="image"><i class="fas fa-map-marker-alt"></i></div>   
    <div className="trajet-body">
        <div className="trajet-row"><i class="fas fa-map-marked-alt"></i><span>Depart :</span>{trajet.depart} </div>
      
        <div className="trajet-row"><i class="fas fa-map-marked-alt"></i><span> Arrive :</span>  {trajet.depart} </div>
        <div className="trajet-row"><i class="fas fa-calendar-week"></i><span> Date :</span>{trajet.date_dep} </div>
      
        </div>  
        <div className="trajet-body">
        <div className="trajet-row"><i class="far fa-money-bill-alt"></i><span>Price :</span>{trajet.prix}DT </div>
      
        <div className="trajet-row"><i class="fas fa-chair"></i><span> Nombre places :</span>  {trajet.nombredepassage} </div>
        <div className="trajet-row"><i class="fas fa-calendar-week"></i><span> Date :</span>{trajet.date_dep} </div>
      
        </div>  
        
    <div className="trajet-action">
        <button>Reserve</button>
        </div>   
    </div>
    )
}

export default TrajetHome
