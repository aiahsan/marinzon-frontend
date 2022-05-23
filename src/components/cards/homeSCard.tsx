import React from 'react';
import Icons from '../icons';
export default ({icon,head,title}:{icon:string,head:string,title:string})=>{
    return <div className='nkacmsdoe-krr'>
            <div className='nkcsdamoe-awel'>
            <Icons name={icon}/>
            </div>
        <h5>{head}</h5>
        <p>{title}</p>
    </div>
}