import React, { useEffect, useState } from "react";
import './addTrajet.css';
import { useForm, useStep } from "react-hooks-helper";
import Depart from '../../Components/stepForm/Depart';
import Arrive from '../../Components/stepForm/Arrive';
import Date_dep from '../../Components/stepForm/Date_dep';
import Nbrpassager from '../../Components/stepForm/Nbrpassager';
import Prixpass from '../../Components/stepForm/Prixpass';
import Voiture from '../../Components/stepForm/Voiture';


const defaultData = {
  depart: "",
  arrive: "",
  date_dep: "",
  nombredepassage: "",
  prix: "",
  description: "",
  modelvoiture: "",
  couleurvoiture: "",
  createdBy:""
};

const steps = [
  { id: "Depart" },
  { id: "Arrive" },
  { id: "Date_dep" },
  { id: "Nbrpassager" },
  { id: "Prixpass" },
  { id: "Voiture" },
];
const AddTrajet = () => {


  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

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
  }
    return(
        <div>
           <h1>Multi step form</h1>
        </div>
    )

}

export default AddTrajet;
