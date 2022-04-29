import { ILogin } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const LogOutAction=()=>{
    return { type: types.logOut, payload: null }    
}
export const LoginAction=(payload:ILogin)=>{
    return {type:types.login,payload:payload}
}


export const setUserAM=(payload:ILogin[])=>{
    return {type:types.SET_Users,payload:payload}
}
export const addUserAM=(payload:ILogin)=>{
   return {type:types.Add_User,payload:payload}
}
export const updateUserAM=(payload:ILogin)=>{
  return {type:types.SET_User,payload:payload}
}
export const deleteUserAM=(payload:ILogin)=>{
  return {type:types.Delete_User,payload:payload}
}


export const changeLanguage=(payload:any)=>{
  return {type: types.language, payload: payload }
}