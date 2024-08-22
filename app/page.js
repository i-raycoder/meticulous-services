"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutMe from "./components/About-Me";

export default function Home() {

  return (
    <>
    <Header />
      <Body />
      <Footer />
    </>
  );
}
