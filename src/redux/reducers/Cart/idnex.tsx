import { IEProduct, ICategory, ILogin, IService } from "../../../interfaces/data/objects";
import { types } from "../../actionTypes";
//@ts-ignore
import update from "react-addons-update";

export const CartReducer = (
  state: IEProduct[] = [],
  action: {
    payload: null | IEProduct | IEProduct[];
    type: string;
  }
) => {
  let payLoad = action?.payload as IEProduct;
  let index = state.findIndex((x: IEProduct) => x?.id == payLoad?.id);

  if (action.type === types.SET_Carts) {
      return Array.isArray(action.payload) ? [...action.payload] : [];
  } else if (action.type === types.Add_Cart) {
    let oldData = [...state];
    return [action.payload, ...oldData];
  } else if (action.type === types.SET_Cart) {
    if (index >= 0) {
      state[index] = payLoad;
      return [...state];
    }
  } else if (action.type === types.Delete_Cart) {
    //@ts-ignore
    return [...state.filter((x) => x.id != action.payload.id)];
  }

  return state;
};
