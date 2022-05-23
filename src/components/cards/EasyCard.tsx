import React from 'react';
const App = ({title,img,para}:{title:string,img:string,para:string})=>{
    return <div className='easy-card main-heading mx-2 mb-4'>
        <img src={img}/>
        <h3 >{title}</h3>
        <p>{para}</p>
    </div>
}
export default App