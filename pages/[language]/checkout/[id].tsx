import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../../src/components/cards/CategoryCard";
import EasyCard from "../../../src/components/cards/EasyCard";
import ServiceCard from "../../../src/components/cards/ServiceCard";
import {MdCancel} from 'react-icons/md'
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {IoWalletSharp} from 'react-icons/io5'
import Navbar from "../../../src/components/header/Navbar2";
import Topbar from "../../../src/components/header/Topbar";
import Heading from "../../../src/components/headings/Heading";
import Footer from "../../../src/components/footer";
import styles from "../styles/Home.module.css";
import CategoryAccordian from "../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../src/components/cards/ProductCard";
import Searchbar from "../../../src/components/generic/Searchbar";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../../src/interfaces/data/reduxStore";
import {
  GetItems,
  GetItemsByCategoryID,
  GetItemsByServiceID,
} from "../../../src/functions/Items";
import { GetServices } from "../../../src/functions/Services";
import { GetCategory } from "../../../src/functions/Categories";
import { GoSearch } from "react-icons/go";
import EProductCard from "../../../src/components/cards/EProductCard";
import { GetEProduct } from "../../../src/functions/EProduct";
import { ImageUrl } from "../../../src/utiles/baseUrl";
import HomeSCard from "../../../src/components/cards/cartSCard";
import { GetSingleECoupon } from "../../../src/functions/ECoupons";
import { setECouponsAM } from "../../../src/redux/actionMethodes/ECoupons";

const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
  const services = useSelector((x: IReduxStore) => x.Services);
  const categoreis = useSelector((x: IReduxStore) => x.Categories);
  const ITEMS = useSelector((x: IReduxStore) => x.ServiceItem);
  const Cart = useSelector((x: IReduxStore) => x.Cart);
  const [_total,_setTotal]=React.useState(0);
  const Copupns=useSelector((x:IReduxStore)=>x.ECoupons);
  const [_coupen,_setCoupon]=React.useState("")
  const dispatch = useDispatch();
  const [_filters, _setfilters] = React.useState({
    categoryId: undefined,
    serviceId: undefined,
  });

  React.useEffect(()=>{
    let total=0;
    Cart.map(x=>{
      if(x.discountPer&&x.discountPer>0)
      {
        total+=((x?.price - (x?.price * x?.discountPer / 100))*x?.quantity);
      }
      else
      {
        total+=(((x?.price))*x?.quantity);
  
      }
  
    });
    _setTotal(total);
  },[Cart])

  React.useEffect(() => {}, []);
  return (
    <div>
      <div className=" ">
        <Navbar />
      </div>
      <div className="container d-flex mt-2 justify-content-center flex-column align-items-center ">
        <div className="mnakvd-erre32e">
          <h4 className="mb-4">Checkout</h4>
        </div>
        <div className="topSearchbar">
          <div className="w-100">
            <input type="text" placeholder="Search everything at Marinzon" />
          </div>
          <div className="icon-search-bx">
            <GoSearch color="white" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          
        <div className="w-95">
        <div className="w-100"> 
        {
          Cart.map(x=>{
             return <HomeSCard isCheckOut={true} image={x.image} product={x} title={x.description} head={x.title} price={`${x.price} x ${x?.quantity} (${x.price*x?.quantity})`} />
          })
        }
        
        </div>
        <div className="nkacmsdoe-krr nkacmsdoe-krr1 w-100 p-3">
          <h5>Shipping Address</h5>
          <h6>Plese select booking address</h6>
          <hr/>
        
          
       
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input type="radio"/>
              <h6 className="m-0 mx-2">Home</h6>
            </div>
            <div className="d-flex align-items-center">
            <h6>XYZ Address</h6>
            <p className="mx-2 hj-na3ed8b2e2e">Edit</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input type="radio"/>
              <h6 className="m-0 mx-2">Office</h6>
            </div>
            <div className="d-flex align-items-center">
            <h6>XYZ Address</h6>
            <p className="mx-2 hj-na3ed8b2e2e">Edit</p>
            </div>
          </div>
         
        
         
        </div>
        
        </div>
        <div className="w-100 max-aldsjmsae">
        <div className="nkacmsdoe-krr nkacmsdoe-krr1 w-100 p-3">
          <h5>Summary</h5>
          <h6>The total cost consist of the tax, insurence and the shipping charge</h6>
          <hr/>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>Shipping</h6>
             
            </div>
            <div>
            <h6>0-Aed</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>Tax</h6>
             
            </div>
            <div>
            <h6>0-Aed</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>Total Products</h6>
             
            </div>
            <div>
            <h6>{Cart.length}</h6>
            </div>
          </div>
           
         
          
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>Total Discount</h6>
             
            </div>
            <div>
            <h6>{
                Copupns.map(x=>  <h6>{x.totalDiscount}%</h6>)
            }</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>Total Price</h6>
             
            </div>
            <div>
            <h6>{
                _total
            }-AED</h6>
            </div>
          </div>
                  <div className="d-flex justify-content-between align-items-center">
              <h5>Applied Coupon</h5>
              </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {
                Copupns.map(x=>  <h6>  {x.couponCode}</h6>)
              }
            
             
            </div>
            <div>
            {
                Copupns.map(x=>  <h6>{x.totalDiscount}%</h6>)
            }
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            
            <div className="d-flex justify-content-between">
              <h6>Sub Total:</h6>
              <h6>
                {
                  Copupns.length>0?_total-(_total*Copupns[0].totalDiscount/100):_total
                }
                 -AED</h6>
             
            </div>
             
          </div>
          <div className="">
            <button className="njsa-an3edwaue3 btn mt-3 w-100">Place Order</button>
          </div>
        </div>
       
       
        <div className="nkacmsdoe-krr nkacmsdoe-krr1 w-100 p-3">
          <h5>Shipping Information</h5>
          <h6>The total cost consist of the tax, insurence and the shipping charge</h6>
          <hr/>
          
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <h6>
              <AiOutlineCodeSandbox size={80}/>

              </h6>
              <div className="akssdcasj-2nwjs">
                <h3>Shipping Box Information</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
              </div>
             
            </div>
             
          </div>
       
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex align-items-center">
              <h6>
              <IoWalletSharp size={70} />
              </h6>
              <div className="akssdcasj-2nwjs">
                <h3>Faulty products, money back guarantee</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
              </div>
             
            </div>
             
          </div>
        </div>
        </div>
        </div>
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Home;
