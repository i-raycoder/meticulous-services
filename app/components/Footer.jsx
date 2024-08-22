"use client";
import React from "react";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (

        <>
        {/* Footer Section */}
      <footer className="w-full py-[20px] bg-[#2a2929] text-white text-center">
      <div class="container mx-auto text-center pb-5">
        <div class="space-x-4">
          <a href="#" class="hover:text-yellow-500 transition duration-300"
            >Facebook<i class="fab fa-facebook-f"></i
          ></a>
          <a href="#" class="hover:text-yellow-500 transition duration-300"
            >Twitter<i class="fab fa-twitter"></i
          ></a>
          <a href="#" class="hover:text-yellow-500 transition duration-300"
            >Instagram<i class="fab fa-instagram"></i
          ></a>
          <a href="#" class="hover:text-yellow-500 transition duration-300"
            >linkedin<i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>
        <p>&copy; 2024 Meticulous Services. All Rights Reserved.</p>
      </footer>
        </>
)
}

export default Footer