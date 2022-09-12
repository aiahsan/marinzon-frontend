import { ICategory, ILogin, IService } from '../../../interfaces/data/objects'
import {types} from '../../actionTypes'
export const setHomeAM=(payload:any)=>{
      return {type:types.SET_Home,payload:payload}
}
