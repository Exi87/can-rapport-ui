import React, { useReducer } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from "../../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

    //load user
    const loadUser = async () => {
      if(localStorage.token){
          setAuthToken(localStorage.token)
      }

      try {
          const res = await axios.get(`http://localhost:5050/api/auth`);

          dispatch({
              type: USER_LOADED,
              payload: res.data
          });

      } catch (err) {

          dispatch({
              type:AUTH_ERROR
             
          })

      }


  };

  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(`http://localhost:5050/api/users`, formData, config);
      console.log(res.data);

      dispatch({
        type: REGISTER_SUCCESS,

        //res.data is the token sent from the back end
        payload: res.data
      });

      loadUser()
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

 

  
  
  const login = async formData  => {
       

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post(`http://localhost:5050/api/auth`, formData, config);
        console.log(res.data);
    
        
        dispatch({
            type: LOGIN_SUCCESS,

            //res.data is the token sent from the back end
            payload: res.data,


        });

//loadUser() get all the user
        loadUser()
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        });
    }

};


  const logout = () => {
    dispatch({
        type:LOGOUT
    })
}
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        loading: state.loading,
        register,
        loadUser,
    login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
