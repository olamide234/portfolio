/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react";
import Image from "next/image";
import Button from "../components/Button";
import Skills from "../utils/skills";
import Seo from "../components/SEO";

const HomePage = () => {
  return (
    <Fragment>
      <Seo />
      <div className="flex justify-center">
        <div className="flex mx-[10%] justify-center pt-10 mt-16">
          <div className="text-center lg:text-left my-5 max-w-[630px]">
            <h1 className="text-2xl md:text-5xl bolder-text font-extrabold">
              Hi<span className="inline-block mx-1 animate-wave">👋</span>,{" "}
              {/* <span className="ml-1">I'm Olamide</span> */}
            </h1>
            <p className="max-w-[450px] xl:max-w-[100%] text-justify leading-loose text-sm md:text-lg font-bold my-10">
              I'm a software engineer with 4 years of experience, I am a skilled
              and innovative professional dedicated to creating exceptional user
              experiences. Passionate about blending creativity with technical
              expertise, I have a deep understanding of frontend technologies
              and a proven track record of delivering visually stunning and
              highly functional web applications.
              <br />
              As a front-end developer, I am intentional about staying at the
              forefront of emerging trends and best practices in the industry. I
              constantly seek opportunities to expand my skill set, experiment
              with new technologies, and integrate cutting-edge tools into my
              workflow, for best results.
            </p>
            <div className="text-center lg:text-left">
              <div className="mt-[3.5rem] mb-[2rem]">
                <a
                  href={process.env.NEXT_PUBLIC_CV}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button btnText="RESUME" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bottom-0 hidden lg:block mt-40 xl:m-0">
          <Image
            className="w-[700px] h-[600px] object-cover"
            src="/assets/work_setup.jpg"
            alt="laptop setup background"
            width={700}
            height={600}
          />
          <div className="absolute left-[50%] top-[35%] xl:top-[50%] text-white">
            <div className="text-6xl leading-tight mb-4">
              OLAMIDE
              <br /> TOFADE
            </div>
            <div>SOFTWARE ENGINEER</div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto max-w-2xl">
        <Skills />
      </div>
    </Fragment>
  );
};

export default HomePage;
