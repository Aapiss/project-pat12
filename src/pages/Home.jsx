import React from "react";
import Header from "../components/tailus/Header";
import Hero from "../components/home/Hero";
import ListProduct from "../components/home/ListProduct";
import WhyChoose from "../components/home/WhyChoose";
import SupportPayment from "../components/home/SupportPayments";
import CTA from "../components/home/Cta";
import Footer from "../components/tailus/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="m-5 overflow-x-hidden">
        <Hero />
        <ListProduct />
        <WhyChoose />
        <SupportPayment />
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default Home;