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

const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
  const services = useSelector((x: IReduxStore) => x.Services);
  const categoreis = useSelector((x: IReduxStore) => x.Categories);
  const ITEMS = useSelector((x: IReduxStore) => x.ServiceItem);
  const Cart = useSelector((x: IReduxStore) => x.Cart);

  const dispatch = useDispatch();
  const [_filters, _setfilters] = React.useState({
    categoryId: undefined,
    serviceId: undefined,
  });

 
  // React.useEffect(() => {
  //   if (_filters.categoryId != undefined) {
  //     //@ts-ignore
  //     dispatch(GetItemsByCategoryID(_filters.categoryId));
  //   } else if (_filters.serviceId != undefined) {
  //     //@ts-ignore
  //     dispatch(GetItemsByServiceID(_filters.serviceId));
  //   }
  // }, [_filters]);

  React.useEffect(() => {}, []);
  return (
    <div>
      <div className=" ">
        <Navbar />
      </div>
      <div className="container d-flex mt-2 justify-content-center flex-column align-items-center ">
        <div className="mnakvd-erre32e">
          <h4 className="mb-4">Your Shopping Cart</h4>
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
        {
          Cart.map(x=>{
             return <HomeSCard image={x.image} product={x} title={x.description} head={x.title} price={`${x.price} x ${x?.quantity} (${x.price*x?.quantity})`} />
          })
        }
        
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Home;
