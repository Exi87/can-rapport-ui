import React, { useContext, useEffect } from "react";

import UrgenceContext from "../../context/urgence/urgenceContext";
import AuthContext from "../../context/auth/authContext";
import { useParams } from "react-router-dom";

const UrgenceOfDetail = props => {
  const urgenceContext = useContext(UrgenceContext);
  const authContext = useContext(AuthContext);

 
  const { getUrgenceById, urgenceDetail, urgences } = urgenceContext;

  useEffect(() => {
   
    getUrgenceById(props.match.params.id);
  }, []);


 


  return (
    <div className="card bg-light">
      {/* <h1>Detail---{urgenceDetail.age}</h1> */}
  {/* <h1>{squareList(urgences).length}</h1> */}

      <h3 className="text-primary text-left">
        {new Date().myFormat(urgenceDetail.dateUrgence)}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge" +
            (urgenceDetail.vacation === "AM"
              ? "badge-success"
              : "badge-primary")
          }
        >
          {urgenceDetail.vacation}
        </span>
      </h3>
      <span style={{ marginRight: "10px" }}>{urgenceDetail.heureUrgence}</span>

      <ul className="list">
        {urgenceDetail.numMobile && (
          <li>
            <span>#Mobile: </span>
            <i className="">{urgenceDetail.numMobile}</i>
          </li>
        )}
        {urgenceDetail.pointFixe && (
          <li>
            <span>pt fixe: </span> <i className="">{urgenceDetail.pointFixe}</i>
          </li>
        )}

        {urgenceDetail.nomPatient && (
          <li>
            <span>Nom Patient: </span>{" "}
            <i className="">{urgenceDetail.nomPatient}</i>
          </li>
        )}

        {urgenceDetail.telephone && (
          <li>
            <span>Tel: </span>{" "}
            <i className="fas fa-phone">{urgenceDetail.telephone}</i>
          </li>
        )}

        {urgenceDetail.natureCas && (
          <li>
            <span>Nature du cas: </span>{" "}
            <i className="">{urgenceDetail.natureCas}</i>
          </li>
        )}

        {urgenceDetail.lieuxRecuperaion && (
          <li>
            <span>Lieux Recup: </span>{" "}
            <i className="">{urgenceDetail.lieuxRecuperaion}</i>
          </li>
        )}

        {urgenceDetail.sex && (
          <li>
            <span>Sex: </span> <i className="">{urgenceDetail.sex}</i>
          </li>
        )}

        {urgenceDetail.hopital && (
          <li>
            <span>Hopital: </span> <i className="">{urgenceDetail.hopital}</i>
          </li>
        )}
        {urgenceDetail.nomAppelant && (
          <li>
            <span>Nom Appelant: </span>{" "}
            <i className="">{urgenceDetail.nomAppelant}</i>
          </li>
        )}
        {urgenceDetail.commune && (
          <li>
            <span>Commune: </span> <i className="">{urgenceDetail.commune}</i>
          </li>
        )}

        {urgenceDetail.age && (
          <li>
            <span>Age: </span> <i className="">{urgenceDetail.age}</i>
          </li>
        )}
        {urgenceDetail.autre && (
          <li>
            <span>Autre Cas: </span> <i className="">{urgenceDetail.autre}</i>
          </li>
        )}
        {urgenceDetail.Diagnostiques && (
          <li>
            <span>Diagnostiques: </span>{" "}
            <i className="">{urgenceDetail.Diagnostiques}</i>
          </li>
        )}
        {urgenceDetail.PremierSoins && (
          <li>
            <span>Premier Soins: </span>{" "}
            <i className="">{urgenceDetail.PremierSoins}</i>
          </li>
        )}
        {urgenceDetail.MilleageAller && (
          <li>
            <span>MilleageAller: </span>{" "}
            <i className="">{urgenceDetail.MilleageAller}</i>
          </li>
        )}
        {urgenceDetail.MilleageRetour && (
          <li>
            <span>MilleageRetour: </span>{" "}
            <i className="">{urgenceDetail.MilleageRetour}</i>
          </li>
        )}

        {urgenceDetail.listHopRefusantPatient && (
          <li>
            <span>List des hop refusant le patient: </span>{" "}
            <i className="">{urgenceDetail.listHopRefusantPatient}</i>
          </li>
        )}

        {urgenceDetail.commentaires && (
          <li>
            <span>Commentaires: </span>{" "}
            <i className="">{urgenceDetail.commentaires}</i>
          </li>
        )}
      </ul>
    </div>
  );
};

export default UrgenceOfDetail;
Date.prototype.myFormat = function(date) {
    var month_names = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    let d = new Date(date);
    var day = d.getDate();
    var month_index = d.getMonth();
    var year = d.getFullYear();
  
    return "" + year + "/" + month_names[month_index] + "/" + (day +1 ) ;
  };