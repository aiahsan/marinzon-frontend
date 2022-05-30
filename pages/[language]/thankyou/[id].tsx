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
import  { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../../src/interfaces/data/reduxStore";
import {
  GetItemsByCategoryID,
  GetItemsByServiceID,
} from "../../../src/functions/Items";
import { GetServices } from "../../../src/functions/Services";
import Indqure from "../../../src/components/forms/indqure";
import Contactus from "../../../src/components/forms/contactus";
import { castArray } from "lodash";
import { BsCheckCircle } from "react-icons/bs";

const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
  const services = useSelector((x: IReduxStore) => x.Services);
  const [sObject,setsObject]=React.useState(undefined);

  const dispatch = useDispatch();

  React.useEffect(()=>{
     
  },[]);
  return (
    <div>
      <div className=" ">
        <Navbar />
      </div>
      <div className="container">
        <section className="service-sec container mt-10 d-flex justify-content-center align-items-center flex-column">
          <BsCheckCircle size={50} color="#0068FF"/>
          <Heading
            center
            title={"Order placed successfully"}
            subtitle={"Thank you for your purchase"}
          />
          <p>Your Order Number is: <strong>{router?.query?.orderNumber}</strong></p>
          <p>We'll email you an order confirmation with details and tracking info</p>
        <button className="njsa-an3edwaue3 btn">Continue Shopping</button>
        </section>
     
      
      
      </div>

      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
