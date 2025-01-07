"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-gray py-5 md:py-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
        <article className="flex flex-col gap-5 md:gap-10 md:col-span-3">
          <h2 className="text-4xl md:text-6xl">
            When ancient wisdom meets technology.
          </h2>
          <div className="w-full aspect-square overflow-hidden bg-rose-100">
            <Image
              src="/images/about-1.jpg"
              alt="Woman doing yoga wearing a black blouse in a serene setting"
              width={1080}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </article>
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 md:gap-10 md:order-first">
          <div className="flex flex-col gap-5 md:gap-10 justify-between md:justify-normal items-start">
            <p>Online yoga classes for everyone, everywhere.</p>
            <Link href="/classes" className="btn">
              Book a class
            </Link>
          </div>
          <div className="w-full aspect-square overflow-hidden md:mt-auto">
            <Image
              src="/images/about-2.jpg"
              alt="Sun"
              width={1080}
              height={1080}
              className="w-full h-full object-top object-cover"
            />
          </div>
        </article>
        <article className="flex flex-col gap-5 md:gap-10 md:col-span-full">
          <h3 className="text-2xl md:text-4xl">
            Hello, I&apos;m Zahra. I offer online yoga classes for people with
            any level of experience. I will develop a personalised program for
            you that takes into account your unique situation and preferences.
          </h3>
          <div className="w-full aspect-video overflow-hidden">
            <Image
              src="/images/about-3.jpg"
              alt="Woman practicing yoga near the ocean with a serene backdrop"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
