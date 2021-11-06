import React from 'react'

const Trajet = ({trajet}) => {
    return (
       
             
            <tr>
            <td>{trajet.depart}</td>
            <td>{trajet.arrive}</td>
            <td>{trajet.date_dep}</td>
            <td> {trajet.nombredepassage}</td>
            <td>{trajet.prix}</td>
            <td>{trajet.modelvoiture}</td>
            <td>{trajet.couleurvoiture}</td>
            <td>{trajet.description}</td>
            </tr>
                   
    )
}

export default Trajet
