import React from 'react'
import moment from 'moment'
import _ from 'lodash'
import dynamic from 'next/dynamic';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
dynamic(() => import('react-owl-carousel'), { ssr: false });
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default ({ _setSdatecst})=>{
    const [days, setdays] = React.useState([]);
    const [_sDate,_setSdate] = React.useState(undefined);

    React.useEffect(() => {
        const today = moment();
        const items = [];
  new Array(24).fill().forEach((acc, index) => {
    items.push((moment( {hour: index} ).format('h:mm A'))+"-"+(moment({ hour: index, minute: 30 }).format('h:mm A')).toString());
    items.push(moment({ hour: index, minute: 30 }).format('h:mm A')+"-"+(moment({ hour: index, minute: 30 }).format('h:mm A')).toString());
  })
         setdays(items);
 
      }, []);
    return     <OwlCarousel
    className='owl-theme banner-carousel'
    loop={false}
    margin={10}
    onClick={(e)=>e.preventDefault()}
    nav={false}
    dots={false}
    responsive={{
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    }}
  >

  {days.map((x,i)=> <div className="item d-flex flex-column align-items-center mx-3 flex-wrap my-2">
                         <button
                          onClick={() => {
                             _setSdate(x);
                             _setSdatecst(x);
                          }}
                          className={`${
                            x == _sDate ? "act" : ""
                          } nkasdfods-eamdew sndjkawd-ewjdiaw`}
                        >
                          { x}
                        </button>
                      </div>)}

    
    
  </OwlCarousel>
}