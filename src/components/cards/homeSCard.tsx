import React from 'react';
import { ImageUrl } from '../../utiles/baseUrl';
import Icons from '../icons';
import {useDispatch, useSelector} from 'react-redux'
import { addCartAM, deleteCartAM } from '../../redux/actionMethodes/Cart';
import { IEProduct } from '../../interfaces/data/objects';
export default ({icon,head,title,price,image,product,onClick}:{icon:string,head:string,title:string,price?:string,image?:string,product?:IEProduct,onClick?:any})=>{
    const Carts= useSelector(x=>x.Cart).map(x=>x.id);
    const dispatch=useDispatch();
     return <div onClick={onClick} className='nkacmsdoe-krr'>
         {price && product?<div className='njmfsad-n3ed'>
            <img src={product.image?ImageUrl+product.image:'/image 10.png'}/>
         </div>:<div className='nkcsdamoe-awel'>
            <img src={icon} style={{width:32,height:32}}/>
            </div>}
            
        <h5>{head}</h5>
        <p>{title}</p>
        {
            price!=undefined?<div className='hjdkf-serjferf nckdsma-serma'>
                <h3>{price}-AED</h3>
                <button className='njsa-an3edwaue3 btn' onClick={(e)=>{
                        e.preventDefault();
                    if(product!=undefined)
                    {
                        if(Carts.includes(product.id))
                        dispatch(deleteCartAM(product))

                        else
                         dispatch(addCartAM({...product,  quantity:1}))
                    }

                }}>{Carts.includes(product?.id)?"Remove from":"Add To"} Cart</button>
            </div>:<div></div>
        }
    </div>
}