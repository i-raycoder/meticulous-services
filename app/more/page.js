"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import Footer from "../components/Footer";

function Hero() {
  return (
    <div className="flex flex-col h-screen bg-black justify-between">
      <div className="!flex h-[55vh] w-full items-center bg-black justify-between px-10 relative">
       
        <div className="container mx-auto mt-28">
          <div className="grid grid-cols-12 text-center lg:text-left">
            <Card className="col-span-full rounded-xl border border-white bg-black/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
              <Typography
                variant="h1"
                color="white"
                className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
              >
                We provider better, without breaking the bank.
              </Typography>
              <Typography variant="lead" className="mb-10 mt-6 !text-white">
                Meticulous Services offers top-notch product delivery and home
                cleaning solutions. We ensure prompt and reliable delivery for
                your packages and provide thorough, professional cleaning for a
                pristine home. Our team is dedicated to exceptional service and
                meticulous attention to detail, making your life easier with our
                efficient and high-quality solutions. Experience seamless service
                with Meticulous Services—where precision meets excellence.
              </Typography>
              <div className="mb-8 flex justify-center gap-4 lg:justify-start">
                <Button color="white" variant="outlined">
                  <a href="/get-started">
                  Get a Quote
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;