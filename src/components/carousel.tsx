import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Icons from '../components/icons'
import router from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

const GetBox=({id}:{id:number})=>{
  const { language } = router.query;
  //@ts-ignore
  const Language = useSelector((x) => x.Language);
  
switch(id)
{
  case 1:{
    return <div className="dsafimkds-rekm">
    <h5>Yacht Boat Care</h5>
    <p>
    Team Marinzon is always by your side and ready to go extra mile for your Yacht and boat! Your yacht and boat are perhaps the greatest...
    </p>
    <div className="jnaskdf-sjmerer">
    <img src="/image 7.png"/>
    </div>
    <div className="nckdsma-serma"><Link  href={{pathname:Language != undefined ? "/"+Language + "/services/yachtboatcare" : "/en-AE/services/yachtboatcare"}}><a className="lgn-btn">Explore More</a></Link></div>
    
  </div>
  }
  case 2:{
    return <div className="dsafimkds-rekm">
    <h5>Yacht Boat Charter</h5>
    <p>
    Marinzon offers you to charter a yacht or boat that enables you to discover the world where everything is possible and within your reach. </p>
    <div className="jnaskdf-sjmerer">
    <img src="/image 8.png"/>
    </div>
     <div className="nckdsma-serma"><Link  href={{pathname:Language != undefined ? "/"+Language + "/services/yachtboatcharter" : "/en-AE/services/yachtboatcharter"}}><a className="lgn-btn">Explore More</a></Link></div>

     
  </div>
  }
  case 3:{
    return <div className="dsafimkds-rekm">
    <h5>Yacht / Boat Maintenance</h5>
    <p>
    The demands of owning a yacht/boat are both challenging and time consuming. Marinzon as a full marine services provider company... </p>
    <div className="jnaskdf-sjmerer">
    <img src="/image 9.png"/>
    </div>
    <div className="nckdsma-serma"><Link  href={{pathname:Language != undefined ? "/"+Language + "/services/yachtboatmaintenance" : "/en-AE/services/yachtboatmaintenance"}}><a className="lgn-btn">Explore More</a></Link></div>
    
  </div>
  }
  default :{
    return <></>
  }
}
}
export default ()=>{
  const [_id,_setid]=React.useState(1);
  
  return <div className="jkdsf0-3les">
  <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
    <div >
      <img src="/Group 85.png" alt="image1" />
    </div>
    <div  >
      <img src="/Group 85.png" alt="image2" />
    </div>
    <div >
      <img src="/Group 85.png" alt="image3" />
    </div>
  </Carousel>

  <div className="lkdsmvaos0erl">
    <div className="asdcks-e3ms">
        <div className="mdsoa-e3l3e  kjsdad-dsfrerfes" onClick={()=>{
      _setid(1)
    }}>
             <img src={_id==1?"/av1.png":"/v1.png"}/>
        </div>
  
        <div className="mdsoa-e3l3e kjsdad-dsfrerfes" onClick={()=>{
      _setid(2)
    }}>
             <img src={_id==2?"/av2.png":"/v2.png"}/>
        </div>
  
        <div className="mdsoa-e3l3e kjsdad-dsfrerfes" onClick={()=>{
      _setid(3)
    }}>
             <img src={_id==3?"/av3.png":"/v3.png"}/>
        </div>
  
    </div>
    <GetBox id={_id}/>
  </div>
  
</div>
}