import React, { useState } from "react";
import Link from "next/link";
import Socials from "@app/utils/socials";
import Image from "next/image";
import NavList from "./NavList";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full z-40 flex top-0 overflow-hidden flex-wrap items-center justify-between px-2 py-3 mb-10 bg-[#010211]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div
            className={
              navbarOpen
                ? "hidden"
                : `w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`
            }
          >
            <div className="hidden lg:block">
              <NavList />
            </div>
          </div>
          <Link
            href="/"
            className={
              navbarOpen
                ? "hidden"
                : " text-4xl txt-shadow font-extrabold leading-relaxed inline-block whitespace-nowrap mx-auto lg:m-0 "
            }
          >
            <Image
              src="/assets/Olamz_logo.png"
              className="rounded-3xl object-cover ml-12 lg:m-0 w-16 h-16 lg:w-20 lg:h-20"
              alt="Olamz logo"
              width={80}
              height={80}
            />
          </Link>
          <div
            className={
              "transition duration-1000 ease-in relative" +
              (navbarOpen ? " bg-[#000431] h-[100vh] w-full" : " hidden")
            }
            id="example-navbar-danger"
          >
            {navbarOpen && (
              <>
                <svg
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-6 h-6 font-bold absolute right-3 top-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <div className="flex items-center justify-center">
                  <NavList setNavbarOpen={setNavbarOpen} />
                </div>
                <div className="fixed left-0 bottom-5 w-full">
                  <div className="flex justify-center gap-6 items-center">
                    <Socials />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="hidden lg:flex lg:justify-end gap-6 items-center w-[300px]">
            <Socials />
          </div>
          <button
            className={
              navbarOpen
                ? "hidden"
                : "text-white hover:opacity-75 cursor-pointer text-xl tracking-tight leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            }
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Main Menu</span>
            {!navbarOpen && (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
