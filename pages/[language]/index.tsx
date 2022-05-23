import type { NextPage } from "next";
import React from "react";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../../src/components/cards/CategoryCard";
import EasyCard from "../../src/components/cards/EasyCard";
import ServiceCard from "../../src/components/cards/ServiceCard";
import Navbar from "../../src/components/header/Navbar2";
import Navbar1 from "../../src/components/header/Navbar";
import Topbar from "../../src/components/header/Topbar";
import Heading from "../../src/components/headings/Heading";
 import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import HomeCard from "../../src/components/cards/homeCard";
import styles from "../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GetServices } from "../../src/functions/Services";
import { IReduxStore } from "../../src/interfaces/data/reduxStore";
import { GiCalendar, GiSailboat } from "react-icons/gi";
import { ImHappy } from "react-icons/im";
import { getRouteName } from "./services/[id]";
import Carousel from "../../src/components/carousel";
import HomeSCard from "../../src/components/cards/homeSCard";
import Footer from '../../src/components/footer'
const Home: NextPage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const services = useSelector((x: IReduxStore) => x.Services);
  React.useEffect(() => {
    //@ts-ignore
    dispatch(GetServices());
  }, []);

  React.useEffect(() => {}, [services]);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
}, [])

const handleScroll = () => {
  const offset = window.scrollY;

  if (offset > 454) {
    //@ts-ignore
    document.querySelector("#nav-main-cst").className =
    "mb-3 navbar navbar-expand-xl navbar-light fixed-top m-0 b-0";
  }
  else {
    //@ts-ignore
    document.querySelector("#nav-main-cst").className =
    "mb-3 navbar navbar-expand-xl navbar-light fixed-top ";
  }
}
  return (
    <div>
      <div className=" ">
        <Navbar />
      </div>
      <Carousel />

        <div className="container">
        <div className=" mnakvd-erre32e">
          <h4>Marinzon has got your home covered for up to AED 1000!</h4>
          <div className="d-flex justify-content-between flex-wrap">
            <HomeSCard
              icon="b1"
              head="
              Furniture Cleaning"
              title="Get your sofa, curtain, carpet and mattress professionally cleaned at home."
            />
            <HomeSCard
              icon="b1"
              head="Pest Control"
              title="
              Clear your home of unwanted pests in Dubai.
              "
            />
            <HomeSCard
              icon="b1"
              head="Handyman & Maintenance"
              title="Get a professional and verified handyman service in Dubai."
            />
            <HomeSCard
              icon="b1"
              head="AC Cleaning"
              title="We provide your home with the clean air it deserve"
            />
          </div>
        </div>
         <div className="sadnks-wewm mnakvd-erre32e">
          <div className="nkdksa-wkejme mx-4">
            <img src="/Group 86.png" />{" "}
          </div>
          <div className="knasdks-jdnwd">
            <h4>So many reason to love Marinzon!</h4>
            <h6>Let’s be sure we are a good fit for you</h6>
            <div>
              <div className="kksadj-waoekjowa">
                <h3>Trusted Cleaners</h3>
                <p>
                  Professional, well-trained, reliable cleaners that have been
                  thoroughly screened before being hired!
                </p>
              </div>
              <div className="kksadj-waoekjowa">
                <h3>No Hidden Cost</h3>
                <p>
                  You must have a verifiable income source (Employed or Self
                  Employed)
                </p>
              </div>
              <div className="kksadj-waoekjowa">
                <h3>Same Day Availability</h3>
                <p>
                  Booking takes less than 60 seconds! And you can schedule for
                  as early as today
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sadnks-wewm mnakvd-erre32e njdsf-nasew3">
          <div className="knasdks-jdnwd nsdi0jew-2w2">
            <h4>Buy or Rent Choose Your favourite Boat</h4>
            <div>
              <h6>
                Owning a superyacht is the freedom to explore the world on your
                terms without limits. With 45 years of experience sourcing the
                best yachts at the best prices, YPI’s team of worldwide brokers
                are experts in finding the right yacht for every client.
              </h6>
            </div>
            <button className="btn btn-main-th">Explore More</button>
          </div>
          <div className="nkdksa-wkejme mx-4">
            <img src="/Group 87.png" />{" "}
          </div>
        </div>
        <div className="jkjsnca-anejww23">
          <div className="text-center">
            <h4>
              Book a reliable home cleaning service in UAE within 60 seconds
            </h4>
            <h6>
              There are better ways for you to spend your time, so we made it
              easy for you. Book your house cleaning in 60 seconds, and our
              professionals will take care of the rest.
            </h6>
          </div>
          <div className="d-flex justify-content-between nmdamcs-anwjdsa flex-wrap">
            <EasyCard
              img="b1.svg"
              title={intl.formatMessage({ id: "al17" })}
              para={intl.formatMessage({ id: "al18" })}
            />
            <EasyCard
              img="b2.svg"
              title={intl.formatMessage({ id: "al17" })}
              para={intl.formatMessage({ id: "al18" })}
            />
            <EasyCard
              img="b3.svg"
              title={intl.formatMessage({ id: "al17" })}
              para={intl.formatMessage({ id: "al18" })}
            />
          </div>
        </div>
        <div className="sadnks-wewm mnakvd-erre32e">
         <div className="njandfsa-nadwe"> 
           <div className=" ">
            <h4>Get the Booking Service App now!</h4>
            <div>
              <h6>
              Book and manage your appointments with a few taps, view your professional’s profile and ratings, see real-time location of your professional and much more.


              </h6>
            </div>
            <button className="btn btn-main-th">Download</button>
          </div>
          <div className="ncsldap-je2">
          <img src="/download-app-banner.png"/>

          </div>
          </div>
           
        </div> 
        <Footer/>

      </div> 



    </div>
  );
};

export default Home;
