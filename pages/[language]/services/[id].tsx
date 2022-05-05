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
import Footer from "../../../src/components/footer/Footer";
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
  GetItemsByCategoryID,
  GetItemsByServiceID,
} from "../../../src/functions/Items";
import { GetServices } from "../../../src/functions/Services";
import Indqure from "../../../src/components/forms/indqure";
import Contactus from "../../../src/components/forms/contactus";
import { castArray } from "lodash";
const getRouteName=(name:number)=>{
  switch(name)
  {
    case 1:{
      return "yachtboatcare"
    }
    case 2:{
      return "yachtboatmaintenance"
    }
    case 3:{
      return "yachtboatcharter"
    }

    default:{
      return ""
    }
  }
}
const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
  const services = useSelector((x: IReduxStore) => x.Services);

  const dispatch = useDispatch();
  const [_filters, _setfilters] = React.useState({
    categoryId: undefined,
    serviceId: undefined,
  });

  React.useEffect(() => {
    if (router.query?.dataqurey) {
      //@ts-ignore
      _setfilters({
        ..._filters,
        categoryId: undefined,
        serviceId: parseInt(
          router.query?.dataqurey
            ?.replaceAll("-", " ")
            ?.toLowerCase()
            ?.split(" ")
            ?.pop()
        ),
      });
    }
    //@ts-ignore
    dispatch(GetServices());
  }, [router.query]);
  React.useEffect(() => {
    if (_filters.categoryId != undefined) {
      //@ts-ignore
      dispatch(GetItemsByCategoryID(_filters.categoryId));
    } else if (_filters.serviceId != undefined) {
      //@ts-ignore
      dispatch(GetItemsByServiceID(_filters.serviceId));
    }
  }, [_filters]);
  return (
    <div>
      <div className=" ">
        <Navbar />
      </div>
      <div className="container">
        <section className="service-sec container mt-10">
          <Heading
            center
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"SERVICES"}
          />
        </section>
        <div className="d-flex">
          <img className="sdnfkdsf-sdsf" src="/bgmaincst2.jpg" />
        </div>
        <div className="kmcmsd-emk4e">
          <p>
            At Marinzon, Yacht/Boat services mean consistent, round-the-clock
            support, sharp-witted advice and genuine knowledge, from genuine
            individuals. As a leading-edge for all marine related services which
            cut its teeth in yacht/boat management instead of financier, we're
            the direct opposite of salesy types in suits. We're honest. We're
            straightforward. We're driven. We have many years of superyacht
            experience behind us. What's more, we're totally committed to life
            on the water. Whether we're taking care of your yacht/boat,
            assisting helping to streamline your operations or overseeing
            charters, yachts/boats will forever be a lifestyle for us, not just
            a job.{" "}
          </p>
        </div>
        <section className="service-sec container mt-5">
          <Heading
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"SERVICES WE OFFER"}
          />
          <div className="row m-0 top-loc-2">
            {services.map((x,i) => (
              <div className="mb-3 mx-1">
                <ServiceCard onClick={getRouteName(i+1)} bg="white" data={x} />
              </div>
            ))}
          </div>
        </section>
        <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"Why Choose Marinzon? "}
          />
          <p>
            Marinzon is a Dubai based company which you can trust on for all
            marine related services. From boat or yacht care to electrical &
            mechanical maintenance to rental services; Marinzon is your go-to
            place. Our aim is to provide top-notch services and customer
            satisfaction.{" "}
          </p>
          <ul>
            <li>
              <p>Fully trained &professional Staff</p>
            </li>
            <li>
              <p>We use top quality approve marine material</p>
            </li>
            <li>
              <p> Competent prices</p>
            </li>
            <li>
              <p> Fully adhere to safety measures </p>
            </li>
            <li>
              <p> We deal with care and love !</p>
            </li>
          </ul>
        </div>
        <Indqure/>
        <Contactus/>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
