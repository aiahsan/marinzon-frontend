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

const Home: NextPage = () => {
  const intl = useIntl();
  const router = useRouter();
  const services = useSelector((x: IReduxStore) => x.Services);

  const dispatch = useDispatch();

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
            subtitle={"ABOUT COMPANY"}
          />
        </section>
        <div className="d-flex">
          <img className="sdnfkdsf-sdsf" src="/bgmaincst2.jpg" />
          <div className="kmcmsd-emk4e mx-5">
            <p>
              Marinzon is the leading-edge for all marine related services
              including yacht and boat maintenance, cleaning and rentals under
              one banner with a highly professional and well-equipped team of
              over 100 employees in the heart of UAE, DUBAI.
            </p>
            <p>
              We are exemplified as market pioneers in this field with our
              expert methodology, business sharpness, progressed specialized and
              mechanical work process and in particular an innovative and open
              attitude. Having been in the marine business for over many years,
              the mastery and experience we acquire and show is top notch. The
              professional team members at Marinzon are exceptional to convey
              the mind-boggling requests of every client with an individual
              touch.
            </p>
            <p>
              Professional Staff, experience, and top-notch customer care is
              what distinguishes us and make us specialists in taking care of
              any client with a marine related service.{" "}
            </p>
          </div>
        </div>

        <section className="service-sec container mt-5">
          <Heading
            center
            title={intl.formatMessage({ id: "ar9" })}
            subtitle={"WHY CHOOSE US?"}
          />
          <div className="kmcmsd-emk4e  ">
            <p className="text-center">
              Team Marinzon is your go-to place for all marine services. The
              reasons for choosing us as your most reliable partner are many.
            </p>
          </div>
        </section>

        <section className="service-sec container mt-5">
          <div className=" w-100">
            <div className="d-flex justify-content-between  ">
              <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              <div className="mx-5 kmcmsd-emk4e">
                <Heading
                  title={"Marinzon"}
                  subtitle={"HOUSE OF PROFESSIONALS"}
                />
                <p>
                  A cautious protocol is followed while picking our staff who
                  will deal with your yachts. We only recruit high potential
                  up-and-comers who have demonstrated history in conveying top
                  of the line results. Our in-house team involves specialists
                  who are accomplished in mechanical & electrical support, fix
                  or enumerating works, professionals who cater clients with the
                  best options for boat or yacht rentals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-sec container mt-5">
          <div className=" w-100">
            <div className="d-flex justify-content-between  ">
              <div className="mx-5 kmcmsd-emk4e">
                <Heading
                  title={"Marinzon"}
                  subtitle={"CONSTANT SURVELLIENCE"}
                />
                <p>
                  We offer consistent surveillance to guarantee that the best of
                  subtleties is dealt with. Our management group includes
                  foreign industry specialists with joined 50+ years information
                  in the yachting and hospitality industry.
                </p>
              </div>

              <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
            </div>
          </div>
        </section>

        <section className="service-sec container mt-5">
          <div className=" w-100">
            <div className="d-flex justify-content-between  ">
              <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              <div className="mx-5 kmcmsd-emk4e">
                <Heading
                  title={"Marinzon"}
                  subtitle={"ONE STOP FOR MARINE SERIVCES"}
                />
                <p>
                  Our crew includes Marine Engineers, Electricians, Mechanics,
                  Plumbers, A/C Mechanics, Welders, Surveyors, Fiberglass
                  Specialists, Painters, Customer Care and Supervisors.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-sec container mt-5">
          <div className=" w-100">
            <div className="d-flex justify-content-between  ">
              <div className="mx-5 kmcmsd-emk4e">
                <Heading
                  title={"Marinzon"}
                  subtitle={"24/7 CUSTOMER SERVICE"}
                />
                <p>
                  Our customer service department can likewise assist you with
                  any connected worries or questions that you might need to
                  guarantee a smooth journey or tips to keep up with the
                  maintenance of your yachts or rentals.
                </p>
              </div>

              <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
            </div>
          </div>
        </section>
        <section className="service-sec container mt-5">
          <div className=" w-100">
            <div className="d-flex justify-content-between  ">
              <img className="sdnfkdsf-sdsf1" src="/bgmaincst2.jpg" />
              <div className="mx-5 kmcmsd-emk4e">
                <Heading title={"Marinzon"} subtitle={"GOING THE EXTRA MILE"} />
                <p>
                  Team Marinzon consistently looks forward towards the
                  advancements and indulges in innovative progressions to
                  complete each work. This for sure keeps us in front of some
                  other player on the lookout.{" "}
                </p>
                <p>
                  Simply trust your yacht is in protected and reliable hands!
                </p>
                <p>
                  Our group is completely insured and covered with admittance to
                  all marinas in the UAE.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-5 kmcmsd-emk4e">
          <Heading
            title={"Marinzon Office"}
            subtitle={"WHERE YOU’LL FIND US "}
          />

          <div className="d-flex justify-content-between align-items-center">
          <div className="knacvds-je w-50">
          <ul style={{ listStyle: "none"}}>
            <li>
              <p>Headquarter Marinzon Dubai</p>
            </li>
            <li>
              <p>
                The heart of United Arab Emirates and the home to us, Dubai is
                the place where the story of Marinzon started.
              </p>
            </li>
            <li>
              <a href="">
                <p>CONTACT US</p>{" "}
              </a>
            </li>
          </ul>
          </div>
          <div className="w-50">
            <div className="row">
              <div className="col-md-6 mb-4">
                {" "}
                <img className="w-100 br-d" src="/bgmaincst2.jpg" />
              </div>
              <div className="col-md-6 mb-4">
                {" "}
                <img className="w-100 br-d" src="/bgmaincst2.jpg" />
              </div>
              <div className="col-md-6 mb-4">
                {" "}
                <img className="w-100 br-d" src="/bgmaincst2.jpg" />
              </div>
              <div className="col-md-6 mb-4">
                {" "}
                <img className="w-100 br-d" src="/bgmaincst2.jpg" />
              </div>
            
            </div>
          </div>
          </div>
        </div>
        <Indqure />
        <Contactus />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
