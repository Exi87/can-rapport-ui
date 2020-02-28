import React, { useContext, useEffect } from "react";
import Urgences from "../equipeAmbUrgences/Urgence";

import UrgenceForm from "../equipeAmbUrgences/UrgenceForm";
import UrgenceFiltered from "../equipeAmbUrgences/UrgenceFiltered";
import AuthContext from "../../context/auth/authContext";
import UrgenceContext from "../../context/urgence/urgenceContext";
const Home = () => {
  const authContext = useContext(AuthContext);

  const urgenceContext = useContext(UrgenceContext);

  const { urgences, filtered, dateUrgence } = urgenceContext;

  const urgenceEffectuee = arr => {
    var new_array = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hopital !== " Inconnu") {
        new_array.push(arr[i]);
      }
    }
    return new_array;
  };

  useEffect(() => {
    authContext.loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <UrgenceForm />
      </div>

      <div>
        <h4 className="text-primary">#Urgences: {urgences.length}</h4>

        <span className="text-primary">
          #Urgences effectuees: {urgenceEffectuee(urgences).length}
          {/* // #AVP:{" "} {countAvp(filtered).length} */}
        </span>

        <UrgenceFiltered />

        <Urgences />
      </div>
    </div>
  );
};

export default Home;
