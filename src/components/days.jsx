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
        const res = Array(30)
          .fill()
          .map(() => today.subtract(1, "d").format("YYYY-MM-DD"));
         setdays(_.sortBy(res));
 
      }, []);

      return <div className='kncsdoaewk-ewkew'>
        <div className='jkdsfs-je'>
        {days.map((x,i)=> <div className="item d-flex flex-column align-items-center mx-3 flex-wrap my-2">
                            <p>{moment(x).format("ddd")}</p>
                            <button
                              onClick={() => {
                                 _setSdate(x);
                                 _setSdatecst(x);
                              }}
                              className={`${
                                x == _sDate ? "act" : ""
                              } ndsfnosp-erf`}
                            >
                              {moment(x).format("DD")}
                            </button>
                          </div>)}
      </div>
      
      </div>
    
  //   return     <OwlCarousel
  //   className='owl-theme banner-carousel'
  //   loop={false}
  //   margin={10}
  //   onClick={(e)=>e.preventDefault()}
  //   nav={true}
  //   dots={false}
  //   responsive={{
  //     0: {
  //       items: 5,
  //     },
  //     600: {
  //       items: 7,
  //     },
  //     1000: {
  //       items: 10,
  //     },
  //   }}
  // >


    
    
  // </OwlCarousel>
}