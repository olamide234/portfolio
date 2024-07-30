import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FcHome, FcAbout, FcBriefcase } from "react-icons/fc";

export default function NavList({
  setNavbarOpen,
}: {
  setNavbarOpen?: (val: boolean) => void;
}) {
  const router = useRouter();
  return (
    <ul className="flex flex-col lg:flex-row list-none my-[50%] md:my-[20%] lg:m-0 pt-20 lg:p-0 h-full lg:h-fit">
      <li className="nav-item">
        <Link
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4"
        >
          <div
            onClick={() => setNavbarOpen?.(false)}
            className={`text-[13px] px-3 py-2 flex items-center hover:opacity-75 ${
              router.route === "/" && "underline"
            }`}
          >
            <span className="place-self-start text-[20px]">
              <FcHome />
            </span>
            Home
          </div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href="/projects"
          className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4"
        >
          <div
            onClick={() => setNavbarOpen?.(false)}
            className={`text-[13px] px-3 py-2 flex items-center hover:opacity-75 ${
              router.route === "/projects" && "underline"
            }`}
          >
            <span className="place-self-start text-[20px]">
              <FcBriefcase />
            </span>
            Projects
          </div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4"
        >
          <div
            onClick={() => setNavbarOpen?.(false)}
            className={`text-[13px] px-3 py-2 flex items-center hover:opacity-75 ${
              router.route === "/about" && "underline"
            }`}
          >
            <span className="place-self-start text-[20px]">
              <FcAbout />
            </span>
            About Me
          </div>
        </Link>
      </li>
      {/* <li className="nav-item">
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-grey-200 hover:text-white mr-4"
          >
            <div
              onClick={() => setNavbarOpen(false)}
              className={`text-[13px] px-3 py-2 flex items-center hover:opacity-75 ${
                router.route === "/contact" && "underline"
              }`}
            >
              <span className="place-self-start text-[20px]">
                <FcContacts />
              </span>
              Contact
            </div>
          </Link>
        </li> */}
    </ul>
  );
}
