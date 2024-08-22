// components/AboutMe.js
import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <section class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div class="relative w-72 h-96 mb-6">
            <Image
              src="/owner.png" // Replace with the path to your profile image
              alt="Muhammad Salman"
              layout="fill"
              objectFit="cover"
              class="rounded-full"
            />
          </div>
          {/* Name */}
          <h2 class="text-3xl font-extrabold text-white mb-4">Muhammad Salman</h2>
          {/* About Text */}
          <p class="text-lg text-white mb-4">
          I am a seasoned business professional in Sweden with years of expertise in accounting and finance, now overseeing a multi-service business. My background involves managing financial matters and ensuring the smooth operation of business functions. I excel in strategic decision-making and optimizing operational processes to drive growth and success in the competitive business landscape of Sweden.</p>
        </div>
      </div>
    </section>
  );
}
