import React, { useContext, useState } from "react";
import UrgenceContext from "../../context/urgence/urgenceContext";
const UrgenceFiltered = () => {
  const urgenceContext = useContext(UrgenceContext);

  const { filterUrgences, urgences, clearUrgences } = urgenceContext;

  const [text, setText] = useState('');

  //const { text} = filter
  const onChange = e => {
     
    setText(
    
     e.target.value
    );

    if ( e.target.value!== "") {
      filterUrgences( e.target.value);
    } else {
      clearUrgences();
    }
  };

  return (
    <form>
      <input
        type="date"
        name="text"
        placeholder="Filter Cas ou Nom Patient...."
        value={text}
        onChange={onChange}
      />

  
{/* 
      <input
        type="date"
        name="text1"
        placeholder="Filter date ...."
        value={text1}
        onChange={onChange}
      /> */}
    </form>
  );
};

export default UrgenceFiltered;
