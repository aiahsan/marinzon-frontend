import { ICategory, IAddress, IItem, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setAddressAM=(payload:IAddress[])=>{
      return {type:types.SET_Addresss,payload:payload}
}
export const addAddressAM=(payload:IAddress)=>{
     return {type:types.Add_Address,payload:payload}
}
export const updateAddressAM=(payload:IAddress)=>{
    return {type:types.SET_Address,payload:payload}
}
export const deleteAddressAM=(payload:IAddress)=>{
     return {type:types.Delete_Address,payload:payload}
}

 