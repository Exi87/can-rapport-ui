import {
  ADD_URGENCES,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_URGENCE,
  USER_LOADED,
  AUTH_ERROR,
  FILTER_URGENCES,
  CLEAR_FILTER,
  URGENCE_ERROR,
  GET_URGENCES,
  URGENCE_ID,
  ERROR_ID,
  GET_CONTACTS,
  DELETE_URGENCE,
  DELETE_ERROR,
  CLEAR_URGENCES
} from "../../types";

export default (state, action) => {
  switch (action.type) {

    case GET_URGENCES:
      return {
          ...state,
          urgences: action.payload
      };


      case URGENCE_ID:
        return{
          ...state,
          urgenceDetail:action.payload
        }

    case ADD_URGENCES:
      return {
        ...state,
        urgences: [...state.urgences, action.payload]
      };

      
      case UPDATE_URGENCE:
        return {
            ...state,
            urgences: state.urgences.map(urgence =>
              urgence._id === action.payload._id ? action.payload : urgence)


        };

        

        case DELETE_URGENCE:
            return {

                ...state,
                urgences: state.urgences.filter( urgence =>urgence._id !== action.payload

                )
            };

    case CLEAR_URGENCES:
      return {
        ...state,
        contacts: null,
        filtered: null,
        current: null,
        error: null
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case FILTER_URGENCES:
      return {
        ...state,
        filtered: state.urgences.filter(urgence => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return urgence.dateUrgence.match(regex) 
        })
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };

    case URGENCE_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};


