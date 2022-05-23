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
      <div className="aflex">
        <Navbar />
      </div>
      <div className="container">
        <section className="service-sec container mt-10">
          <Heading
            center
            title={""}
            subtitle={"YACHT/BOAT MAINTENANCE"}
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
            The demands of owning a yacht/boat are both challenging and time consuming.
Marinzon as a full marine services provider company has a wealth of experience
and offers owners a full management support service for yachts from
(20m to over 100m). Our service covers the full range of yacht management
operations from financial reporting to the supervision of yard time,
to electrical and mechanical maintenance to ensuring our clients greater safety,
enjoyment and peace of mind.

            </p>
              </div>
          </div>
         </div>
       <div className="mt-5">
       <Heading
            title={""}
            subtitle={"ELECTRICAL MAINTENANCE"}
          />
       </div>
     

     <div className="sndl0we-ok">




       
     <div className="row">
       <section className="col-md-6 service-sec container mt-5 ">
         <div className=" w-100">
          <div className="aflex">
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          <Heading
            title={"Marinzon"}
            subtitle={"LIGHTS"}
          />

          </div>
           </div>
         
        </section>
        <section className="service-sec container mt-5 col-md-6 ">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"AIR CONDITIONING"}
          />
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
          <Heading
            title={"Marinzon"}
            subtitle={"FRESH WATER PUMP"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="col-md-6 service-sec container mt-5">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"GPS/SONAR AND VHF"}
          />
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
            subtitle={"BATTERY REPLACEMENT"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="col-md-6 service-sec container mt-5">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"SEA CHEST"}
          />
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
            subtitle={"ANCHORAGE WINCH"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="col-md-6 service-sec container mt-5">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"TOILET REPAIRS"}
          />
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          </div>
           </div>
         
        </section></div>
       <div className="row">
        <section className="col-md-6 service-sec container mt-5">
         <div className="w-100">
          <div className="aflex">
         
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
          <Heading
            title={"Marinzon"}
            subtitle={"CUSTOM JOB (HOURLY BASED) "}
          />
          </div>
           </div>
           
        </section>
       
        <section className="col-md-6 service-sec container mt-5">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"Pest Control"}
          />
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          </div>
           </div>
         
        </section></div>
       <div className="row">   
        <section className="col-md-6 service-sec container mt-5">
         <div className="w-100">
          <div className="aflex">
         
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
          <Heading
            title={"Marinzon"}
            subtitle={"Sanitizing and Disinfection"}
          />
          </div>
           </div>
           
        </section>
       </div>
     </div>
      
       
      <div className="sndl0we-ok">
       <div className="mt-5">
       <Heading
            title={""}
            subtitle={"MECHANICAL MAINTENANCE"}
          />
       </div>
     
       <div className="row">
       <section className="col-md-6 service-sec container mt-5 ">
         <div className=" w-100">
          <div className="aflex">
          <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />

          <Heading
            title={"Marinzon"}
            subtitle={"ENGINE MAINTENANCE"}
          />

          </div>
           </div>
         
        </section>
        <section className="service-sec container mt-5 col-md-6 ">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"ENGINE REGULAR SERVICE"}
          />
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
          <Heading
            title={"Marinzon"}
            subtitle={"ENGINE OVERHAULING "}
          />
          </div>
           </div>
           
        </section>
       
        <section className="col-md-6 service-sec container mt-5">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"HYDRAULICS RELATED SERVICES"}
          />
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
            subtitle={"STEERING WHEEL"}
          />
          </div>
           </div>
           
        </section>
       
        <section className="col-md-6 service-sec container mt-5">
         <div className=" w-100">
          <div className="aflex">
          <Heading
            title={"Marinzon"}
            subtitle={"BOAT TRAILER MAINTENANCE"}
          />
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
            subtitle={"ANCHORAGE WINCH"}
          />
          </div>
           </div>
           
        </section>
      
       </div>
      </div>
        <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"Why Choose Marinzon for Maintenance?:"}
          />
          <p>Anyone can have a yacht/boat management company and any management company can promise to streamline operation. But it’s a uniquely Marinzon type of wizardry that makes our management world-class. Combining deep experience, cutting-edge technology, a unique approach to crew culture and a superhuman level of efficiency: we uplift Yacht/Boat Management into Yacht/Boat mastery.</p>
          <ul>
            <li>
              <p>  	We bring an entire community of experts at your fingertips.</p>
            </li>
            <li>
              <p>  	We offer tailor made solutions.</p>
            </li>
            <li>
              <p> 	We offer hassle-free enjoyment of your yacht</p>
            </li>
            
          
          </ul>
        </div>
         <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={"YOUR YACHT/BOAT NEED MAINTENANCE?"}
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
