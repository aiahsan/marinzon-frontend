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
import styles from "../styles/Home.module.css";
import CategoryAccordian from "../../../src/components/generic/CategoryAccordianMb";
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
import { GetEProduct, GetProductsByCategoryID } from "../../../src/functions/EProduct";
import { GetECategory } from "../../../src/functions/ECategories";

const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
   const categoreis = useSelector((x: IReduxStore) => x.ECategories);
  const ITEMS = useSelector((x: IReduxStore) => x.ServiceItem);

  const dispatch = useDispatch();
  const [_filters, _setfilters] = React.useState({
    categoryId: undefined,
    serviceId: undefined,
  });

  React.useEffect(() => {
    if (router.query?.dataqurey) {
      let idGet=parseInt(
        router.query?.dataqurey
          ?.replaceAll("-", " ")
          ?.toLowerCase()
          ?.split(" ")
          ?.pop()
      );
      dispatch(GetProductsByCategoryID(idGet));

      //@ts-ignore
      _setfilters({
        ..._filters,
        categoryId: idGet,
        serviceId:undefined ,
      });
    }
    else
    {
      dispatch(GetEProduct());

    }
     
   
  }, [router.query]);
  React.useEffect(()=>{
     if(categoreis.length<=0)
    {
       dispatch(GetECategory())

    }

  },[ITEMS])
  // React.useEffect(() => {
  //   if (_filters.categoryId != undefined) {
  //     //@ts-ignore
  //     dispatch(GetItemsByCategoryID(_filters.categoryId));
  //   } else if (_filters.serviceId != undefined) {
  //     //@ts-ignore
  //     dispatch(GetItemsByServiceID(_filters.serviceId));
  //   }
  // }, [_filters]);

  React.useEffect(()=>{
  },[])
  return (
    <div>
      <div className=" ">
         <Navbar />
      </div>
      
      <div className="container d-flex mt-5 justify-content-center flex-column align-items-center ">
      <div className="mnakvd-erre32e">
          <h4 className="mb-4">Marinzon E-Commerce</h4>
        </div>
      <div className="topSearchbar">
                    <div className="w-100">
                      <input
                        type="text"
                        placeholder="Search everything at Marinzon"
                      />
                    </div>
                    <div className="icon-search-bx">
                      <GoSearch color="white" />
                    </div>
                  </div> 
      </div>
      <div className="container mnakvd-erre32e mt-5">
       
      </div>
      {/* <section className="service-sec container mt-5">
        <Heading
          center
          title={intl.formatMessage({ id: "ar9" })}
          subtitle={intl.formatMessage({ id: "ar10" })}
        />
        <div className="row m-0 top-loc-2">
          {services.map((x) => (
            <div className="mb-3 mx-1">
              <ServiceCard bg="white" data={x} />
            </div>
          ))}
        </div>
      </section> */}

     
      <div className="container  mb-5">
        <div className="row mt-5">
          <div className="col-md-3 mt-5 rd-brd">
            <CategoryAccordian _filters={_filters} _setfilters={_setfilters} />
          </div>
          <div className="col-md-9 mt-5 rd-brd">
            <EProductCard />
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>    </div>
  );
};

export default Home;
