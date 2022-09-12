import { ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
 
export const HomeReducer = (
  state=null,
  action: {
    payload: null | any ;
    type: string;
  }
) => {
    
  if (action.type === types.SET_Home) {
      if(action.payload)
      {

        return {...action.payload};
      }
      
  } 

  return state;
};
