import React from "react";

const Footer = () => {
  return (
    <div className="mt-[5rem]">
      <footer className="px-4 d-flex justify-between fixed border-[#474444] bg-[#010211] border-t-[1px] bottom-0 h-[60px] w-[100%] items-center inline-flex">
        <p className="text-xs">
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
        <p className="text-xs ml-20">
          Attributed to {" "}
          <a
            href="https://www.twitter.com/dami_code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            DamiCode
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
