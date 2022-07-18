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
    Team Marinzon is always by your side and ready to go extra mile for your Yacht and boat! Your yacht and boat are perhaps the greatest investment you made, and which expects to be minded to keep up with its magnificence. Let team Marinzon take care of all the pressure when time is short and you need everything amazing on your yacht.     </p>
    {/* <p>Your yacht, our expert cleaning team makes one powerful brand. Equip yourself with the world-class services in UAE for your yacht by contacting Marinzon who utilize extraordinary cleaning materials; specialists and the practices that has been endorsed greatly in the marine industry.
</p> */}
{/* <p>Learn more about our Yacht/Boat care services by clicking the explore button now!</p> */}
    <div className="jnaskdf-sjmerer">
    {/* <img src="/image 7.png"/> */}
    </div>
    {/* <div className="nckdsma-serma"><Link  href={{pathname:Language != undefined ? "/"+Language + "/services/yachtboatcare" : "/en-AE/services/yachtboatcare"}}><a className="lgn-btn">Explore More</a></Link></div> */}
    
  </div>
  }
  case 2:{
    return <div className="dsafimkds-rekm">
    <h5>Yacht Rental:</h5>
    {/* <p>
    Discover the world where everything is possible and within your reach with Marinzon</p> */}
    <p>You can only experience your first yacht charter one time so make it unforgettable. Explore the extraordinary with us by getting an incredible offer on all type of yachts serving your demands! From booking a luxury yacht to rent to planning incredible trips, Marinzon offers an opportunity for tourists with special trip packages for you, your family or for your corporate events which makes you an incredible host to an unforgettable event.
</p>
{/* <p>Get in touch with us to book your favorite yacht or plan a trip with us to make it memorable!</p> */}
    <div className="jnaskdf-sjmerer">
    {/* <img src="/image 8.png"/> */}
    </div>
     {/* <div className="nckdsma-serma"><Link  href={{pathname:Language != undefined ? "/"+Language + "/services/yachtboatcharter" : "/en-AE/services/yachtboatcharter"}}><a className="lgn-btn">Explore More</a></Link></div> */}

     
  </div>
  }
  case 3:{
    return <div className="dsafimkds-rekm">
    <h5>Store:</h5>
    <p>
    We offer a one-stop online store for everything related to marine services. Discover the world's largest selection of yacht or boat equipment from the world's most renowned brands at Marinzon. We are dedicated to provide our customers with the top-notch equipment and customer service possible.  Our knowledgeable customer service and fast delivery have made us popular among our consumers.
</p>
{/* <p>Gaining the confidence of over 10k customers we are already delivering all over UAE.  So, what are you waiting for?</p> */}
    <div className="jnaskdf-sjmerer">
    {/* <img src="/image 9.png"/> */}
    </div>
    {/* <div className="nckdsma-serma"><Link  href={{pathname:Language != undefined ? "/"+Language + "/services/yachtboatmaintenance" : "/en-AE/services/yachtboatmaintenance"}}><a className="lgn-btn">Explore More</a></Link></div> */}
    
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
  
        {  <div className="mdsoa-e3l3e kjsdad-dsfrerfes" onClick={()=>{
      _setid(3)
    }}>
             <img src={_id==3?"/av3.png":"/v3.png"}/>
        </div>
    }
    </div>
    <GetBox id={_id}/>
  </div>
  
</div>
}