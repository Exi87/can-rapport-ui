import React, { useState, useContext, useEffect } from "react";

import UrgenceContext from "../../context/urgence/urgenceContext";

//import Select from "react-select"

// const techCompanies = [
//   { label: "Apple", value: "M" },
//   { label: "Facebook", value: "F" }
// ];
const UrgenceForm = () => {
  const urgenceContext = useContext(UrgenceContext);
  const { addUrgence, updateUrgence, current } = urgenceContext;

  useEffect(() => {
    if (current !== null) {
      setUrgence(current);
    } else {
      setUrgence({
        dateUrgence: "",
        vacation: " ",
        heureUrgence: " ",
        numMobile: " ",
        pointFixe: " ",
        nomAppelant: " ",
        nomPatient: " ",
        telephone: " ",
        lieuxRecuperaion: " ",
        hopital: " ",
        sex: "",
        natureCas: " ",
        age: " ",

        autre:" ",
        commune: " ",
        Diagnostiques: " ",
        PremierSoins: " ",
        MilleageAller: " ",
        MilleageRetour: " ",
        listHopRefusantPatient: " ",
        commentaires: " "
      });
    }
  }, [urgenceContext, current]);

  const [urgence, setUrgence] = useState({
    dateUrgence: "",
    vacation: " ",
    heureUrgence: " ",
    numMobile: " ",
    pointFixe: " ",
    nomAppelant: " ",
    nomPatient: " ",
    telephone: " ",
    lieuxRecuperaion: " ",
    hopital: " ",
    sex: "",
    natureCas: " ",
    age: " ",
    commune: " ",
    Diagnostiques: " ",
    PremierSoins: " ",
    MilleageAller: " ",
    MilleageRetour: " ",
    listHopRefusantPatient: " ",
    commentaires: " ",
    autre:" "
  });

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
    age,
    commune,
    Diagnostiques,
    PremierSoins,
    MilleageAller,
    MilleageRetour,
    listHopRefusantPatient,
    commentaires,
    autre
  } = urgence;

  const onChange = e =>
    setUrgence({
      ...urgence,
      [e.target.name]: e.target.value
    });

  // const handleChange = sex => {
  //   setUrgence(sex );
  //   console.log(`Option selected:`, sex);
  // };

  // handleChange = (e) => {
  //   let value = Array.from(e.target.selectedOptions, option => option.value);
  // setUrgence({values: value});
  // }

  const onSubmit = e => {
    e.preventDefault();

    if (current === null) {
      addUrgence(urgence);
    } else {
      updateUrgence(urgence);
    }

    console.log("form submited!!");
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ?` Mise a jour 
        information equipe ambulanciere `: `Prise information equipe ambulanciere`}{" "}
      </h2>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="exampled">Date urgence</label>
          <input
            type="Date"
            id="exampled"
            className="form-control "
            name="dateUrgence"
            value={dateUrgence}
            onChange={onChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="exampledate">Heure urgence</label>
          <input
            type="time"
            id="exampledate"
            className="form-control "
            name="heureUrgence"
            value={heureUrgence}
            onChange={onChange}
          />
        </div>
        <h5>Vacation</h5>

        <div className="form-group col-md-6">
          <input
            type="checkbox"
            name="vacation"
            value="AM"
            checked={vacation === "AM"}
            onChange={onChange}
          />
          <label>AM : {""}</label>

          <input
            type="checkbox"
            name="vacation"
            value="PM"
            onChange={onChange}
          />
          <label>PM : {""}</label>
        </div>

       

        <div className="form-group col-md-6">
          <label htmlFor="example2">Numero mobile</label>
          <input
            type="text"
            id="example2"
            className="form-control"
            name="numMobile"
            value={numMobile}
            onChange={onChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="example3">Pt fixe</label>
          <input
            type="text"
            id="example3"
            className="form-control form-control-sm"
            name="pointFixe"
            value={pointFixe}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="example4">Nom Appelant</label>
          <input
            type="text"
            id="example4"
            className="form-control"
            name="nomAppelant"
            value={nomAppelant}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="example22">Nom Patient</label>
          <input
            type="text"
            id="example22"
            className="form-control"
            name="nomPatient"
            value={nomPatient}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="exampl">telephone</label>
          <input
            type="text"
            id="exampl"
            className="form-control"
            name="telephone"
            value={telephone}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="exam">Lieux rec</label>
          <input
            type="text"
            id="exam"
            className="form-control"
            name="lieuxRecuperaion"
            value={lieuxRecuperaion}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="exa">Commune</label>
          <input
            type="text"
            id="exa"
            className="form-control"
            name="commune"
            value={commune}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="exa11">Age</label>
          <input
            type="text"
            id="exa11"
            className="form-control"
            name="age"
            value={age}
            onChange={onChange}
          />
        </div> 
         <div className="form-group col-md-6">
          <label htmlFor="examp">Sex</label>
          <input
            type="text"
            id="examp"
            className="form-control"
            name="sex"
            value={sex}
            onChange={onChange}
          />
        </div> 



        <div className="form-group col-md-6">
          <label htmlFor="ex">hopital</label>
          <input
            type="text"
            id="ex"
            className="form-control"
            name="hopital"
            value={hopital}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="e">Nature Cas</label>
          <input
            type="text"
            id="e"
            className="form-control"
            name="natureCas"
            value={natureCas}
            onChange={onChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="eautre">Autre Cas</label>
          <input
            type="text"
            id="eautre"
            className="form-control"
            name="autre"
            value={autre}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="le17">Milleage Aller</label>
          <input
            type="text"
            id="le17"
            className="form-control"
            name="MilleageAller"
            value={MilleageAller}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="e17">Milleage Retour</label>
          <input
            type="text"
            id="e17"
            className="form-control"
            name="MilleageRetour"
            value={MilleageRetour}
            onChange={onChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="exampleDiag">Diagnostiques</label>
          <input
          type='text'
            id="exampleDiag"
            name="Diagnostiques"
            value={Diagnostiques}
            onChange={onChange}
            maxLength='255'
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="exampleSoins">Premier Soins</label>
          <input
          type='text'
            id="exampleSoins"
            name="PremierSoins"
            value={PremierSoins}
            onChange={onChange}
            maxLength='255'
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="exampleList">list Hop Refusant Patient</label>
          <input
          type='text'
            id="exampleList"
            name="listHopRefusantPatient"
            value={listHopRefusantPatient}
            onChange={onChange}
            maxLength='255'
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="exampleConn">commentaires</label>
          <input
          type='text'
            id="exampleConn"
            name="commentaires"
            value={commentaires}
            onChange={onChange}
            maxLength='255'
          />
        </div>
      </div>

      <div>
        <input
          type="submit"
          value={current ? "Modifier Urgence" : "Enregistre urgence"}
          className=" btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

UrgenceForm.defaultProps = {
  label: "Can Rapport",
  icon: "fas fa-id-card-alt"
};

export default UrgenceForm;
