import React, { useEffect, useState } from "react";
import './addTrajet.css';
import { useForm, useStep } from "react-hooks-helper";
import Depart from '../../Components/stepForm/Depart';
import Arrive from '../../Components/stepForm/Arrive';
import Date_dep from '../../Components/stepForm/Date_dep';
import Nbrpassager from '../../Components/stepForm/Nbrpassager';
import Prixpass from '../../Components/stepForm/Prixpass';
import Voiture from '../../Components/stepForm/Voiture';
import CouleurVoiture from '../../Components/stepForm/CouleurVoiture';
import Description from '../../Components/stepForm/Description';
import Submit from "../../Components/stepForm/Submit";
import { useDispatch, useSelector } from 'react-redux'




const AddTrajet = () => {
  // const user = useSelector((state) => state.user.user);
  
const steps = [
  { id: "Depart" },
  { id: "Arrive" },
  { id: "Date_dep" },
  { id: "Nbrpassager" },
  { id: "Prixpass" },
  { id: "Voiture" },
  { id: "CouleurVoiture" },
  { id: "Description" },
  { id: "Submit" },
];

  const [Data, setData] = useState({
    depart: "",
    arrive: "",
    date_dep: "",
    nombredepassage: "",
    prix: "",
    modelvoiture: "",
    couleurvoiture: "",
    description: "",
    createdBy:''
  })

  // useEffect(() => {
  //  setData({...Data,createdBy:user?._id})
  // }, [])

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { Data, setData, navigation };

  switch (step.id) {
    case "Depart":
      return <Depart {...props} />;
    case "Arrive":
      return <Arrive {...props} />;
    case "Date_dep":
      return <Date_dep {...props} />;
    case "Nbrpassager":
      return <Nbrpassager {...props} />;
    case "Prixpass":
      return <Prixpass {...props} />;
    case "Voiture":
      return <Voiture {...props} />;
    case "CouleurVoiture":
      return <CouleurVoiture {...props} />;
    case "Description":
      return <Description {...props}  />;
    case "Submit":
      return <Submit  {...props} />;
      
  }
    return(
        <div>
           <h1>Multi step form</h1>
        </div>
    )

}

export default AddTrajet;
