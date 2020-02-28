import React, { useReducer } from "react";

import axios from "axios";

import UrgenceContext from "./urgenceContext";
import urgenceReducer from "./ugenceReducer";
import {
  ADD_URGENCES,
  URGENCE_ERROR,
  UPDATE_URGENCE,
  DELETE_URGENCE,
  DELETE_ERROR,
  CLEAR_CURRENT,
  SET_CURRENT,
  FILTER_URGENCES,
  CLEAR_FILTER,
  GET_URGENCES,
  URGENCE_ID,
  ERROR_ID,
  CLEAR_URGENCES
} from "../../types";

//INTIAL STATE

const UrgenceState = props => {
  const initialState = {
    urgences: [],

    current: null,
    filtered: null,
    urgenceDetail: {}
  };

  //state allow us to access anything in our state
  //dispatch allow us to dispatch to our reducer

  
  // var months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ];

  const [state, dispatch] = useReducer(urgenceReducer, initialState);

  
  

  const getUrgence = async () => {

  
    
    try {
      const res = await axios.get(`http://localhost:5050/api/urgence/`);
     
      dispatch({
        type: GET_URGENCES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CLEAR_URGENCES,
        payload: err.response.data.msg
      });
    }
  };

  const getUrgenceById = async id => {
    try {
      const res = await axios.get(`http://localhost:5050/api/urgence/${id}`);
    
      dispatch({ type: URGENCE_ID, payload: res.data });
    } catch (err) {
      dispatch({
        type: ERROR_ID,
        payload: err.response.msg
      });
    }
  };

  //Add contact

  const addUrgence = async urgence => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(`http://localhost:5050/api/urgence`, urgence, config);
      dispatch({
        type: ADD_URGENCES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: URGENCE_ERROR,
        payload: err.response.msg
      });
    }
  };

  const updateUrgence = async urgence => {
    //dipatch action to the reducer
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `http://localhost:5050/api/urgence/${urgence._id}`,
        urgence,
        config
      );
      //dipatch action to the reducer
      dispatch({ type: UPDATE_URGENCE, payload: res.data });
    } catch (err) {
      dispatch({
        type: URGENCE_ERROR,
        payload: err.response.msg
      });
    }
  };

  const deleteUrgence = async id => {
    try {
      await axios.delete(`http://localhost:5050/api/urgence/${id}`);

      dispatch({ type: DELETE_URGENCE, payload: id });
    } catch (err) {
      dispatch({
        type: DELETE_ERROR,
        payload: err.response.msg
      });
    }
    //dipatch action to the reducer
  };

  //set Current in order to be able to updateor delete

  const setCurrent = urgence => {
    dispatch({
      type: SET_CURRENT,
      payload: urgence
    });
  };
  //clear current

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  //filter urgence
  const filterUrgences = text => {
    dispatch({
      type: FILTER_URGENCES,
      payload: text
    });
  };

  const clearUrgences = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };

  return (
    <UrgenceContext.Provider
      value={{
        urgences: state.urgences,

        current: state.current,
        filtered: state.filtered,
        urgenceDetail: state.urgenceDetail,

        addUrgence,
        getUrgence,
        getUrgenceById,
        setCurrent,
        clearCurrent,
        filterUrgences,
        updateUrgence,
        deleteUrgence,
        clearUrgences
      }}
    >
      {props.children}
    </UrgenceContext.Provider>
  );
};

export default UrgenceState;
