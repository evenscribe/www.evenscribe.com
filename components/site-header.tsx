"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
  { title: "Features", path: "#" },
  { title: "Integrations", path: "#" },
  { title: "Customers", path: "#" },
  { title: "Pricing", path: "#" },
];

export function SiteHeader() {
  const [state, setState] = useState(false);
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!(target instanceof Element) || !target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () =>
  (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="/">
        <img
          src="/hourglass.png"
          className="rounded-full"
          width={50}
          height={50}
          alt="FarmUI logo"
        />
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white"
          onClick={() => setState(!state)}
        >
          {state ? (
            <XIcon />
          ) : (
            <HamburgerMenuIcon />
          )}
        </button>
      </div>
    </div>
  )

  return (
    <header>
      <div className={`hidden`}>
        <Brand />
      </div>
      <nav
        className={`pb-5 md:text-sm `}
      >
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <Brand />
          <div
            className={`flex-1 text-white/90 flex-col md:flex-row items-center mt-8 md:mt-0 md:flex md:static md:backdrop-blur-none rounded-sm w-[80%] backdrop-blur-lg ${state ? 'flex absolute top-[10] left-[50%] translate-x-[-50%] z-10 p-5 mx-auto' : 'hidden'}`}
          >
            <ul className="mx-auto w-full flex flex-col md:flex-row justify-center items-center space-y-6 md:space-x-6 md:space-y-0 rounded-sm md:rounded-full dark:bg-zinc-800/10  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] px-6 py-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:text-zinc-200 dark:ring-white/10 md:w-fit ">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-white/70 hover:text-white">
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
              <a
                href="#"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-full md:w-fit rounded-full md:inline-flex "
              >
                Sign in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
