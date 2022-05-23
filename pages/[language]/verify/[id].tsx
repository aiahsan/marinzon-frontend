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
 import { useIntl } from "react-intl";
import router,{useRouter} from "next/router";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
  const intl = useIntl();
  const { language } = router.query;
  const Language=useSelector(x=>x.Language);
  return (
    <div>
      <div className=" ">
         <Navbar />
      </div>
    <div className="mt-250">
    <div className="signupscreen1 mt-10">
        <section className="container-2">
          <div className="images-2">
            <img src="assets\images\gallery-2-removebg-preview.png" alt="" />
          </div>
          <div className="create">
            <div className="create-1">
              <h3>              {intl.formatMessage({ id: "ac84" })}
</h3>
              <p>
              {intl.formatMessage({ id: "ac85" })}
              </p>
            </div>

            <div>
              <label className="name">{intl.formatMessage({ id: "ac86" })}</label> <br />
              <input className="mob-1" type="text" />
              <br />
            </div>

            <button
              className="btn btn-warning w-100 my-4"
              style={{ color: "white" }}
              onClick={()=>{
                language!=undefined? router.push("/"+Language+'/address'):router.push('/en-AE/address')
 
             }}
            >
              {intl.formatMessage({ id: "ac87" })}
            </button>
            <p>
            {intl.formatMessage({ id: "ac88" })}
              <span id="blue"> {intl.formatMessage({ id: "ac89" })}</span>
            </p>
            <p className="text-center">
              <span id="blue">{intl.formatMessage({ id: "ac90" })}</span>
            </p>
          </div>
        </section>
      </div>
    </div>

    <div className="container">
        <Footer />
      </div>    </div>
  );
};

export default Home;
