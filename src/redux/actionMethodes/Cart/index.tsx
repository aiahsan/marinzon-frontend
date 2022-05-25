import { IEProduct, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setCartAM=(payload:IEProduct[])=>{
      return {type:types.SET_Carts,payload:payload}
}
export const addCartAM=(payload:IEProduct)=>{
       return {type:types.Add_Cart,payload:payload}
}
export const updateCartAM=(payload:IEProduct)=>{
    return {type:types.SET_Cart,payload:payload}
}
export const deleteCartAM=(payload:IEProduct)=>{
    return {type:types.Delete_Cart,payload:payload}
}

 