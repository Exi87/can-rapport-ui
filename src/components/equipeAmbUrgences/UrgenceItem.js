import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UrgenceContext from "../../context/urgence/urgenceContext";

const UrgenceItem = ({ urgence }) => {
  const urgenceContext = useContext(UrgenceContext);
  const { setCurrent, deleteUrgence, urgences } = urgenceContext;

  const {
    dateUrgence,
    vacation,
    heureUrgence,
    numMobile,
    pointFixe,
    nomAppelant,
    nomPatient,
    telephone,
    lieuxRecuperaion,
    hopital,
    sex,
    natureCas,
    autre,
    age,
    commune,
    Diagnostiques,
    PremierSoins,
    MilleageAller,
    MilleageRetour,
    listHopRefusantPatient,
    commentaires,
    _id
  } = urgence;

  const onDelete = () => {
    deleteUrgence(_id);
  };
  console.log(1 / urgences.length);
  //let res= urgences.map(urgence=><About key={urgence.id} urgence={urgence}/>)
  //   let today = new Date();

  //  dateUrgence=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {dateUrgence}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge" + (vacation === "AM" ? "badge-success" : "badge-primary")
          }
        >
          {vacation}
        </span>
      </h3>

      <ul className="list">
        {nomPatient && (
          <li>
            <span>Nom Patient: </span> <i className="">{nomPatient}</i>
          </li>
        )}

        {natureCas && (
          <li>
            <span>Nature du cas: </span> <i className="">{natureCas}</i>
          </li>
        )}
        {hopital && (
          <li>
            <span>Hop: </span> <i className="">{hopital}</i>
          </li>
        )}

        {autre && (
          <li>
            <span>Autres: </span> <i className="">{autre}</i>
          </li>
        )}
      </ul>

      <p>
        <button
          className="btn  btn-dark btn-sm"
          onClick={() => setCurrent(urgence)}
        >
          Modifier
        </button>
        <button className="btn  btn-danger btn-sm" onClick={onDelete}>
          Supprimer
        </button>

        <button className="btn  btn-primary btn-sm" style={{ margin: "5px" }}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/detail/${urgence._id}`}
          >
            Detail...
          </Link>
        </button>
      </p>
    </div>
  );
};

export default UrgenceItem;
// Date.prototype.myFormat = function(date) {
//   var month_names = [
//     "01",
//     "02",
//     "03",
//     "04",
//     "05",
//     "06",
//     "07",
//     "08",
//     "09",
//     "10",
//     "11",
//     "12"
//   ];
//   let d = new Date(date);
//   var day = d.getDate();
//   var month_index = d.getMonth();
//   var year = d.getFullYear();

//   return   year + "-" + (month_names[month_index] ) + "-" + day ;
// };
