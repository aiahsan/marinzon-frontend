import React from 'react';
const App=({title,subtitle,center,size}:{title:string,subtitle:string,center?:boolean,size?:string})=>{
    return <div className={`main-heading-1 ${center?"text-center":""}`}>
        <h5  >{title}</h5>
        <div className='profile__info m-0 p-0'>
            <div className='na-dnw2enwqw'>        <h1 className={`${size?size:""}`}>{subtitle}</h1>
</div>
        </div>
    </div>
}
export default App