import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../src/components/cards/CategoryCard";
import EasyCard from "../src/components/cards/EasyCard";
import ServiceCard from "../src/components/cards/ServiceCard";
import Navbar from "../src/components/header/Navbar";
import Topbar from "../src/components/header/Topbar";
import Heading from "../src/components/headings/Heading";
import Footer from "../src/components/footer/Footer";
import styles from "../styles/Home.module.css";
import CategoryAccordian from "../src/components/generic/CategoryAccordian";
import ProductCard from "../src/components/cards/ProductCard";
import Searchbar from "../src/components/generic/Searchbar";
import { BsFillStarFill } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div>
      <div className=" ">
        <Topbar />
        <Navbar />
      </div>

      <section className="container mt-5 mb-5">
        <Heading
          center
          title="Black Luxury Yacht with Jacuzzi"
          subtitle="Underwater Hull Cleaning"
        />
      </section>
       
      <div className="container  mb-5">
        <div
          className="item-overlay"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgb(145 145 145 / 38%), rgb(171 171 171 / 10%)), url('bg5.jpg');`,
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="mr-">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="#f5b913" />
              </div>
              <div className="mx-1">
                <BsFillStarFill color="white" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="d-flex justify-content-between flex-c">
            <div className="svc-card ">
              <div>
                <p>Service Type</p>
                <div>
                  <button className="btn btn-info">Service 1</button>
                  <button className="btn btn-info">Service 1</button>
                  <button className="btn btn-info">Service 1</button>
                  <button className="btn btn-info">Service 1</button>
                </div>
              </div>
              <div>
                <p>Service Duration in Minutes</p>
                <div>
                  <button className="btn btn-info">120</button>
                  <button className="btn btn-info">60</button>
                  <button className="btn btn-info">90</button>
                </div>
              </div>
              <div>
                <p>Service Location</p>
                <div>
                  <button className="btn btn-info">Service 1</button>
                </div>
              </div>
            </div>
            <div className="svc-card">
              <div>
                <p>
                  Price: <strong>AED 150.00</strong>
                </p>
                <button className="btn btn-primary">Book an Appointment</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 faq" >
          <h3>Frequently Asked Questions</h3>
          <div className="d-flex mt-4 jusify-content-between flex-c-sm">
            <div className="">
                <div className="mt-2">
                <h5>What does this service include?</h5>
              <ul>
                <li>A full setup of sanitized massage bed</li>
                <li>Quality aromatherapy oils for the massage</li>
                <li>Provides Towels and relaxing soft music</li>
                <li>Scented candles</li>
                <li>Service is exclusively for women's only</li>
              </ul>
                </div>
                <div className="mt-5">
                <h5>Our trusted service providers use these brands:</h5>
              <ul>
                <li>Novell</li>
                <li>Orial</li>
                <li>Nashi</li>
              </ul>

                </div>
                <div className="mt-5">
                <h5>Any important information that the provider needs to know?</h5>
                <p>For any important info related to your service such as skin sensitivities, allergies, or any related issue, please reach out to provider through Contact Provider button on your order page.
</p>
              
                </div>
            </div>
            <div className=" ">
            <div className="mt-2">
                <h5>What is an Aromatherapy Spa treatment?
</h5>
              <p>An aromatherapy massage uses essential oils. Popular scents include peppermint, lavender, lemon, bergamot, and rose to name a few. Aromatherapy can help you relax and it may help with sleep, too.
</p>
                </div>
                <div className="mt-5">
                <h5>What is an Aromatherapy Spa treatment?
</h5>
              <p>An aromatherapy massage uses essential oils. Popular scents include peppermint, lavender, lemon, bergamot, and rose to name a few. Aromatherapy can help you relax and it may help with sleep, too.
</p>
                </div>
                <div className="mt-5">
                <h5>What is an Aromatherapy Spa treatment?
</h5>
              <p>An aromatherapy massage uses essential oils. Popular scents include peppermint, lavender, lemon, bergamot, and rose to name a few. Aromatherapy can help you relax and it may help with sleep, too.
</p>
                </div>
                <div className="mt-5">
                <h5>What is an Aromatherapy Spa treatment?
</h5>
              <p>An aromatherapy massage uses essential oils. Popular scents include peppermint, lavender, lemon, bergamot, and rose to name a few. Aromatherapy can help you relax and it may help with sleep, too.
</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
