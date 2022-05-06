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
import Footer from "../../../../src/components/footer/Footer";
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
      <div className=" ">
        <Navbar />
      </div>
      <div className="container">
        <section className="service-sec container mt-10">
          <Heading
            center
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"YACHT/BOAT CARE"}
          />
        </section>
        <div className="d-flex">
          <img className="sdnfkdsf-sdsf" src="/bgmaincst2.jpg" />
        </div>
        <div className="kmcmsd-emk4e mt-5">
          <div className="row">
            <div className="col-md-3">            <img className="w-100 br-d" src="/bgmaincst2.jpg" />
</div>
            <div className="col-md-9">
            <p>
            Team Marinzon is always by your side and ready to go extra mile
for your Yacht and boat! Your yacht and boat are perhaps the
greatest investment you made, and which expects to be minded
to keep up with its magnificence. Whenever you plan a weekend getaway
from your busy schedule or plan an extravagant party for your friends and family
on your beautiful cruise; you will not be able to add another assignment to your
hectic schedule.  Let team Marinzon take care of all the pressure when time
is short and you need everything amazing on your yacht.

            </p>
            <p>Your yacht, our expert cleaning team makes one powerful brand.</p>
            </div>
          </div>
          <p>Marinzon is known for its world-class services in UAE for the marine industry. We utilize extraordinary cleaning materials; specialists and all our practices has been utilized and endorsed in the marine industry.</p>
        </div>
        
        <div className="sndl0we-ok">
        <section className="service-sec container mt-5">
         <div className=" w-100">
          <div className="d-flex justify-content-between  ">
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          <Heading
            title={"Marinzon"}
            subtitle={"Thorough Yacht/Boat wash"}
          />

          </div>
           </div>
         
        </section>
        <section className="service-sec container mt-5">
         <div className=" w-100">
          <div className="d-flex justify-content-between  ">
          <Heading
            title={"Marinzon"}
            subtitle={"Underwater hull cleaning"}
          />
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          </div>
           </div>
         
        </section>
       
        <section className="service-sec container mt-5">
         <div className="w-100">
          <div className="d-flex justify-content-between  ">
         
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
          <Heading
            title={"Marinzon"}
            subtitle={"Vinyl Polish"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="service-sec container mt-5">
         <div className=" w-100">
          <div className="d-flex justify-content-between  ">
          <Heading
            title={"Marinzon"}
            subtitle={"Rust Removing"}
          />
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          </div>
           </div>
         
        </section>
       
        <section className="service-sec container mt-5">
         <div className="w-100">
          <div className="d-flex justify-content-between  ">
         
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
          <Heading
            title={"Marinzon"}
            subtitle={"Deep Clean"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="service-sec container mt-5">
         <div className=" w-100">
          <div className="d-flex justify-content-between  ">
          <Heading
            title={"Marinzon"}
            subtitle={"Carpet/Interior Cleaning"}
          />
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          </div>
           </div>
         
        </section>
       
        <section className="service-sec container mt-5">
         <div className="w-100">
          <div className="d-flex justify-content-between  ">
         
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
          <Heading
            title={"Marinzon"}
            subtitle={"Polishing and waxing"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="service-sec container mt-5">
         <div className=" w-100">
          <div className="d-flex justify-content-between  ">
          <Heading
            title={"Marinzon"}
            subtitle={"Bilge room cleaning"}
          />
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          </div>
           </div>
         
        </section>
       
        <section className="service-sec container mt-5">
         <div className="w-100">
          <div className="d-flex justify-content-between  ">
         
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
          <Heading
            title={"Marinzon"}
            subtitle={"Engine Room clean"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="service-sec container mt-5">
         <div className=" w-100">
          <div className="d-flex justify-content-between  ">
          <Heading
            title={"Marinzon"}
            subtitle={"Pest Control"}
          />
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          </div>
           </div>
         
        </section>
       
        <section className="service-sec container mt-5">
         <div className="w-100">
          <div className="d-flex justify-content-between  ">
         
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
          <Heading
            title={"Marinzon"}
            subtitle={"Sanitizing and Disinfection"}
          />
          </div>
           </div>
           
        </section>
        </div>
       
        <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"Why Choose Marinzon for your Yacht/Boat care:"}
          />
          
          <ul>
            <li>
              <p> We provide premium quality cleaning services at affordable prices.</p>
            </li>
            <li>
              <p> We use top-quality marine approved material to minizine the risks and maximize your yacht or boat life.</p>
            </li>
            <li>
              <p> We offer a dedicated team with qualified skills and guarantee a glass-like finish to our end results. </p>
            </li>
            
          
          </ul>
        </div>
         <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={"Planning a Getaway or a Cruise Party?"}
            subtitle={"Call our cleaning experts now!"}
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

      <Footer />
    </div>
  );
};

export default Home;
