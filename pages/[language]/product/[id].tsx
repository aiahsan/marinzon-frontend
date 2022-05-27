import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../../src/components/cards/CategoryCard";
import EasyCard from "../../../src/components/cards/EasyCard";
import ServiceCard from "../../../src/components/cards/ServiceCard";
import Navbar from "../../../src/components/header/Navbar2";
import Topbar from "../../../src/components/header/Topbar";
import Heading from "../../../src/components/headings/Heading";
import Footer from "../../../src/components/footer";
import styles from "../../styles/Home.module.css";
import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { BsFillStarFill } from "react-icons/bs";
import { useIntl } from "react-intl";
import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { repository } from "../../../src/utiles/repository";
import { loadingAction } from "../../../src/redux/actionMethodes/loader";
import { ImageUrl } from "../../../src/utiles/baseUrl";
import { messageAction } from "../../../src/redux/actionMethodes/message";
import { setCurrentBookingAM } from "../../../src/redux/actionMethodes/Currentbooking";
import { IReduxStore } from "../../../src/interfaces/data/reduxStore";
import { bookingStatus } from "../../../src/utiles/constants";
import Heading1 from "../../../src/components/headings/Heading1";
import Link from "next/link";
import { addCartAM, deleteCartAM } from "../../../src/redux/actionMethodes/Cart";
const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();

  const { language } = router.query;
  const Language = useSelector((x) => x.Language);
  const dispatch = useDispatch();
  const [_currentService, _setcurrentService] = React.useState(undefined);
  const [_item, _setcurrentServiced] = React.useState(undefined);
  const User=useSelector((x:IReduxStore)=>x.User);
  const Carts=useSelector((x:IReduxStore)=>x.Cart);

   const [_selectedService, _setselectedService] = React.useState([]);
  React.useEffect(() => {
    if (router.query?.dataqurey) {
       
      //@ts-ignore
      _setcurrentService(
        parseInt(
          router.query?.dataqurey
            ?.replaceAll("-", " ")
            ?.toLowerCase()
            ?.split(" ")
            ?.pop()
        )
      );
    }
    //@ts-ignore
  }, [router.query]);
 
 
  React.useEffect(() => {
    if (_currentService != undefined) {
      try {
        (async () => {
          dispatch(loadingAction(true));
          const { data, status }: any = await repository
            .GetProductById("", _currentService)
            .then((x) => x);
          if (status == 200 && data?.success == true) {
            _setcurrentServiced(data?.data);
             dispatch(loadingAction(false));
          } else {
            dispatch(loadingAction(false));
            router.back();
          }
        })();
      } catch (e) {
        dispatch(loadingAction(false));
        router.back();
      }
    }
  }, [_currentService]);

  return (
    <div>
      <div className=" ">
         <Navbar />
      </div>

      <section className="container  mb-5 mt-10">
        <Heading1 center title={_item?.title} subtitle={_item?.description} />
      </section>

      <div className="kdsfmanc30qj2n wmb-5">
      <div className="dnfaks-asme">
        <div className="sajdnw-q2ejnjwd">
          <img src={ImageUrl+_item?.image}/>
        </div>
      <div className="hjkfdas-akwenaw  flex-c">
  <div className="svc-card ">
     <h6>Category : {_item?.eCategory?.title} </h6>
     <h6>Name : {_item?.title}</h6>
     <h6>Price : {_item?.price} - AED</h6>
     <h6>Discount : {_item?.discountPer} %</h6>
  </div>
   <div className="svc-card">
    <div>
      
      <p>
        {intl.formatMessage({ id: "ac35" })}:{" "}
        <strong style={{textDecoration:_item?.discountPer && _item?.discountPer>0?"line-through":"none"}}>
         {_item?.price} AED
        </strong>
        {
          _item?.discountPer?<strong>
          <sup>  {(parseInt(_item?.price)||0) *((100-(parseInt(_item?.discountPer)||0))/100)}-AED</sup>
          </strong>
:<></>  
        }
      </p>
      
  <button
        className="btn lgn-btn1 selected-btn"
         onClick={()=>{
            if(_item!=undefined)
          {

            //@ts-ignore
              if(Carts.map(x=>x.id).includes(_item.id))
              dispatch(deleteCartAM(_item))

              else
              {
                //@ts-ignore
                dispatch(addCartAM({..._item,  quantity:1}))
         
              }
            }
         }}
      >
       {Carts.map(x=>x.id).includes(_item?.id)?"Remove from":"Add To"} cart
      </button>
 
      <Link href={{
  pathname:
    Language != undefined
      ? "/" + Language + "/checkout"
      : "/en-AE/checkout",
 
}}>
    <button
        className="btn lgn-btn1 selected-btn"
         
      >
        Check Out
      </button>
</Link>
      
    
    </div>
  </div> 
</div>
        </div>
      </div>
      <div className="container">
        <div className="mt-5 faq">
          <h3>Product Description</h3>
          <div className="d-flex mt-4 jusify-content-between flex-c-sm">
            <div className="row">
              <div className="mt-2 col-md-6">
               
              </div>

              <div
      dangerouslySetInnerHTML={{__html: _item?.rDescription}}
    />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>    </div>
  );
};

export default Home;


{/* <div className="d-flex justify-content-between">
  <div className="d-flex">
    <div className="mr-">
      <BsFillStarFill color="#f5b913" />
    </div>
    <div className="mx-1">
      <BsFillStarFill color="#f5b913" />
    </div>
    <div className="mx-1">
      <BsFillStarFill color="#f5b913" />
    </div>
    <div className="mx-1">
      <BsFillStarFill color="#f5b913" />
    </div>
    <div className="mx-1">
      <BsFillStarFill color="white" />
    </div>
  </div>
  <div></div>
</div> */}