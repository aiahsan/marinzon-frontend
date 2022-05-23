import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../../../src/components/cards/CategoryCard";
import EasyCard from "../../../../src/components/cards/EasyCard";
import ServiceCard from "../../../../src/components/cards/ServiceCard";
import Navbar from "../../../../src/components/header/Navbar2";
import Topbar from "../../../../src/components/header/Topbar";
import Heading from "../../../../src/components/headings/Heading";
import Footer from "../../../../src/components/footer";
import styles from "../styles/Home.module.css";
import CategoryAccordian from "../../../../src/components/generic/CategoryAccordian";
import ProductCard from "../../../../src/components/cards/ProductCard";
import Searchbar from "../../../../src/components/generic/Searchbar";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { IReduxStore } from "../../../../src/interfaces/data/reduxStore";
import {
  GetItemsByCategoryID,
  GetItemsByServiceID,
} from "../../../../src/functions/Items";
import { GetServices } from "../../../../src/functions/Services";
import Indqure from "../../../../src/components/forms/indqure";
import Contactus from "../../../../src/components/forms/contactus";

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
      <div className="aflex">
        <Navbar />
      </div>
      <div className="container">
        <section className="service-sec container mt-10">
          <Heading
            center
            title={""}
            subtitle={"YACHT/BOAT CHARTER"}
          />
        </section>
        <div className="d-flex">
          <img className="sdnfkdsf-sdsf" src="/bgmaincst2.jpg" />
        </div>
        <div className="kmcmsd-emk4e mt-5">
          <div className="row">
            <div className="col-md-3">
              {" "}
              <img className="w-100 br-d" src="/bgmaincst2.jpg" />
            </div>
            <div className="col-md-9">
              <p>
                Indulge in an experience like no other, tailored to you and only
                you.
              </p>
              <p>
                Marinzon offers you to charter a yacht or boat that enables you
                to discover the world where everything is possible and within
                your reach.
              </p>
            </div>
            <p>
              You can only experience your first yacht charter one time so make
              it unforgettable. Explore the extraordinary with us by getting an
              incredible offer on all type of yachts serving your demands!
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Heading title={""} subtitle={"YACHT/BOAT FOR CHARTER "} />
        </div>
        <div className="sndl0we-ok">
        <div className="row">
          <section className="col-md-6 service-sec container mt-5 ">
            <div className=" w-100">
              <div className="aflex">
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

                <Heading title={"Marinzon"} subtitle={"YACHT RENTAL"} />
              </div>
            </div>
          </section>
          <section className="service-sec container mt-5 col-md-6 ">
            <div className=" w-100">
              <div className="aflex">
                <Heading title={"Marinzon"} subtitle={"JETSKI RENTAL"} />
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col-md-6  service-sec container mt-5">
            <div className="w-100">
              <div className="aflex">
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
                <Heading title={"Marinzon"} subtitle={"KITE RENTAL"} />
              </div>
            </div>
          </section>

          <section className="col-md-6 service-sec container mt-5">
            <div className=" w-100">
              <div className="aflex">
                <Heading title={"Marinzon"} subtitle={"SMALL BOAT RENTAL"} />
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              </div>
            </div>
          </section>
        </div>  
        <div className="row">
          <section className="col-md-6 service-sec container mt-5">
            <div className="w-100">
              <div className="aflex">
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
                <Heading title={"Marinzon"} subtitle={"KAYAK"} />
              </div>
            </div>
          </section>

          <section className="col-md-6 service-sec container mt-5">
            <div className=" w-100">
              <div className="aflex">
                <Heading title={"Marinzon"} subtitle={"SHARK RENTAL"} />
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col-md-6 service-sec container mt-5">
            <div className="w-100">
              <div className="aflex">
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
                <Heading title={"Marinzon"} subtitle={"BANANA BOAT"} />
              </div>
            </div>
          </section>

          <section className="col-md-6 service-sec container mt-5">
            <div className=" w-100">
              <div className="aflex">
                <Heading title={"Marinzon"} subtitle={"RTA ABRA"} />
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col-md-6 service-sec container mt-5">
            <div className="w-100">
              <div className="aflex">
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
                <Heading
                  title={"Marinzon"}
                  subtitle={"RTA FAIRY TRANSPORTATION "}
                />
              </div>
            </div>
          </section>

          <section className="col-md-6 service-sec container mt-5">
            <div className=" w-100">
              <div className="aflex">
                <Heading title={"Marinzon"} subtitle={"SPEAD BOATS"} />
                <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              </div>
            </div>
          </section>
        </div>
    </div>
        <div className="mt-5">
          <Heading
            title={""}
            subtitle={"SPECIAL OFFER YACHT/BOAT FOR CHARTER"}
          />
          <p>
            Not only team Marinzon deals in rental but also offers an incredible
            trip opportunity for tourists as well as special designed trip
            packages for you, your family or for your corporate events which
            makes you an incredible host to an unforgettable event.
          </p>
          <ul>
            <li>
              <p> Fishing Trips</p>
            </li>

            <li>
              <p> SIteseeing</p>
            </li>

            <li>
              <p> Fly Board</p>
            </li>

            <li>
              <p> Donut</p>
            </li>

            <li>
              <p> Parasailing</p>
            </li>

            <li>
              <p> Diving</p>
            </li>

            <li>
              <p> Cruise (Dinner and lunch)& much more</p>
            </li>
          </ul>
        </div>

        <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"Why Choose Marinzon for Charter?"}
          />
          <ul>
            <li>
              <p>You get privileged access to world’s finest charter yachts</p>
            </li>
            <li>
              <p> A wealth of knowledge to enhance your experience</p>
            </li>
            <li>
              <p> Personalised services that go above and beyond</p>
            </li>
          </ul>
        </div>
        <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={"Looking for a yacht to charter?"}
            subtitle={"CALL US NOW!"}
          />

          <ul>
            <li>
              <p> +91-000000000</p>
            </li>
          </ul>
          <p> Always going the extra mile for you!</p>
        </div>
        <Contactus />
      </div>

      <div className="container">
        <Footer />
      </div>    </div>
  );
};

export default Home;
