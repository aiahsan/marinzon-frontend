import React from 'react';
export default ({icon,description,title,isCenter})=>{
    return <div className={`img-home-card ${isCenter?"center-brd":""}`}>
        {icon()}
        <h5>
            {title}
        </h5>
        <p>
            {description}
        </p>
    </div>
}