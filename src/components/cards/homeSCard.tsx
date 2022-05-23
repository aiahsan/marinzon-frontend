import React from 'react';
import Icons from '../icons';
export default ({icon,head,title,price}:{icon:string,head:string,title:string,price?:string})=>{
    return <div className='nkacmsdoe-krr'>
         {price?<div className='njmfsad-n3ed'>
            <img src='image 10.png'/>
         </div>:<div className='nkcsdamoe-awel'>
            <Icons name={icon}/>
            </div>}
            
        <h5>{head}</h5>
        <p>{title}</p>
        {
            price!=undefined?<div className='hjdkf-serjferf nckdsma-serma'>
                <h3>{price}-AED</h3>
                <button className='njsa-an3edwaue3 btn'>Buy Now</button>
            </div>:<div></div>
        }
    </div>
}