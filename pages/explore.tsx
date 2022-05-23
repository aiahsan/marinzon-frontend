import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../src/components/cards/CategoryCard";
import EasyCard from "../src/components/cards/EasyCard";
import ServiceCard from "../src/components/cards/ServiceCard";
import Navbar from "../src/components/header/Navbar";
import Topbar from "../src/components/header/Topbar";
import Heading from "../src/components/headings/Heading";
import Footer from "../src/components/footer";
import styles from "../styles/Home.module.css";
import CategoryAccordian from "../src/components/generic/CategoryAccordian";
import ProductCard from "../src/components/cards/ProductCard";
import Searchbar from "../src/components/generic/Searchbar";

const Home: NextPage = () => {
  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />
      </div>
    
      <section className="service-sec container mt-5">
        <Heading
          center
          title="Lorem Ipsum is simply dummy text "
          subtitle="Top Services"
        />
        <div className="row m-0 top-loc-2">
          <div className="mb-3 mx-1">
            <ServiceCard
              bg="#e6e6e6"
              title="Boat / Yacht care"
              img="service-2.png"
            />
          </div>
          <div className="mb-3 mx-1">
            <ServiceCard bg="#e6f0f6" title="Electrical" img="service-2.png" />
          </div>
          <div className="mb-3 mx-1">
            <ServiceCard bg="#f3f2f4" title="Mechanic" img="service-2.png" />
          </div>
        </div>
      </section>
      <div className="container d-flex mt-10 justify-content-center">
      <Searchbar/>
      </div>
      <div className="container  mb-5">
        <div className="row mt-5">
          <div className="col-md-3 mt-5 rd-brd">
            <CategoryAccordian />
          </div>
          <div className="col-md-9 mt-5 rd-brd">
            <ProductCard/>
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>    </div>
  );
};

export default Home;
