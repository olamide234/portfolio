import Socials from "@app/utils/socials";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[5rem]">
      <footer className="px-4 inline-flex flex-col items-center justify-around fixed border-[#474444] bg-[#010211] border-t-[1px] bottom-0 h-[60px] w-[100%]">
        <div className="flex justify-center gap-6 items-center lg:hidden">
          <Socials />
        </div>
        <p className="text-xs text-center">
          Copyright {new Date().getFullYear()} &copy;{" "}
          <a
            href="https://www.twitter.com/olamide_tofade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Olamz
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
