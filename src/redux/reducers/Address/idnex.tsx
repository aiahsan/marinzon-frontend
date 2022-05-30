import { ICategory, IAddress, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const AddressReducer = (
  state: IAddress[] = [],
  action: {
    payload: null | IAddress | IAddress[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IAddress;
  let index = state.findIndex((x: IAddress) => x?.id == payLoad?.id);

  if (action.type === types.SET_Addresss) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_Address) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_Address) {
    console.log(payLoad,"pppp")
    console.log(state,"pppp")
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_Address) {
       //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
