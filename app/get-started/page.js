"use client";

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Typography, Card } from "@material-tailwind/react";
import Footer from "../components/Footer";

const GetStarted = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Get Started Section */}
          <div className="flex-1 max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <Typography
              variant="h1"
              color="white"
              className="text-3xl font-bold mb-8 text-center"
            >
              Get Started
            </Typography>
            <div className="border-2 border-white rounded-lg p-6">
              <div className="space-y-8">
                <div className="flex items-center border-b border-gray-600 pb-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
                    <i className="fas fa-phone-alt text-2xl text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <Typography
                      variant="h2"
                      color="white"
                      className="text-xl font-bold mb-2"
                    >
                      Contact Us
                    </Typography>
                    <Typography variant="lead" color="gray" className="text-gray-300">
                      Reach out to us to discuss your project needs.
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-600 pb-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
                    <i className="fas fa-file-invoice text-2xl text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <Typography
                      variant="h2"
                      color="white"
                      className="text-xl font-bold mb-2"
                    >
                      Get a Quote
                    </Typography>
                    <Typography variant="lead" color="gray" className="text-gray-300">
                      We'll provide a personalized quote for your project.
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
                    <i className="fas fa-cogs text-2xl text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <Typography
                      variant="h2"
                      color="white"
                      className="text-xl font-bold mb-2"
                    >
                      Receive Services
                    </Typography>
                    <Typography variant="lead" color="gray" className="text-gray-300">
                      We'll deliver high-quality services tailored to your needs.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex-1 max-w-md mx-auto p-4 md:p-6 lg:p-12 bg-white rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Typography
                variant="h2"
                color="black"
                className="text-3xl font-bold mb-4"
              >
                Call us at <br></br> (+46 73 593 19 59) <br></br> to get started!
              </Typography>
              <Button color="black" variant="contained" className="mt-4">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Projects Section */}
      <div className="bg-black py-12 flex-1">
        <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-12">
          <Typography
            variant="h2"
            color="white"
            className="text-5xl font-bold mb-6 text-center"
          >
            Our Previous Projects
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Typography
                variant="h3"
                color="black"
                className="text-lg font-semibold mb-2"
              >
                Coming soon.
              </Typography>
              <Typography variant="lead" color="gray" className="text-gray-600">
                Description of the first project coming soon.
              </Typography>
            </Card>
            <Card className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Typography
                variant="h3"
                color="black"
                className="text-lg font-semibold mb-2"
              >
        Coming soon.
              </Typography>
              <Typography variant="lead" color="gray" className="text-gray-600">
                Description of the second project coming soon.
              </Typography>
            </Card>
            <Card className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <Typography
                variant="h3"
                color="black"
                className="text-lg font-semibold mb-2"
              >
                Coming soon.
              </Typography>
              <Typography variant="lead" color="gray" className="text-gray-600">
                Description of the third project coming soon.
              </Typography>
            </Card>
            {/* Add more project items here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GetStarted;
