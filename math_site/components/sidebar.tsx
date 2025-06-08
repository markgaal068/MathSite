'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState({
    also: false,
    felso: false,
    kozep: false,
    egyetem: false,
  });

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 h-screen bg-[#121212] text-white p-6 fixed top-0 left-0 border-r border-neutral-800 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-10 tracking-tight text-[#33d4ff] mt-[10%]">
        MATEMATIKA
      </h1>

      <nav className="w-full space-y-6 text-base flex flex-col">
        <Link
          href="/"
          className={`block font-bold text-lg cursor-pointer ${isActive("/") ? "text-[#33d4ff]" : "hover:text-[#33d4ff]"
            }`}
        >
          Főoldal
        </Link>

        {/* Alsó tagozat */}
        <div className="w-full">
          <button
            onClick={() => setOpen({ ...open, also: !open.also })}
            className="w-full text-left font-bold text-lg hover:text-[#33d4ff] cursor-pointer"
          >
            Alsó tagozat
          </button>
          {open.also && (
            <div className="ml-6 mt-3 space-y-2">
              {[1, 2, 3, 4].map((evf) => {
                const path = `/also/evfolyam${evf}`;
                return (
                  <Link
                    key={evf}
                    href={path}
                    className={`block text-md font-semibold ${isActive(path)
                        ? "text-[#33d4ff]"
                        : "hover:text-[#33d4ff]"
                      }`}
                  >
                    {evf}. évfolyam
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Felső tagozat */}
        <div className="w-full">
          <button
            onClick={() => setOpen({ ...open, felso: !open.felso })}
            className="w-full text-left font-bold text-lg hover:text-[#33d4ff] cursor-pointer"
          >
            Felső tagozat
          </button>
          {open.felso && (
            <div className="ml-6 mt-3 space-y-2">
              {[5, 6, 7, 8].map((evf) => {
                const path = `/felso/evfolyam${evf}`;
                return (
                  <Link
                    key={evf}
                    href={path}
                    className={`block text-md font-semibold ${isActive(path)
                        ? "text-[#33d4ff]"
                        : "hover:text-[#33d4ff]"
                      }`}
                  >
                    {evf}. évfolyam
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Középiskola */}
        <div className="w-full">
          <button
            onClick={() => setOpen({ ...open, kozep: !open.kozep })}
            className="w-full text-left font-bold text-lg hover:text-[#33d4ff] cursor-pointer"
          >
            Középiskola
          </button>
          {open.kozep && (
            <div className="ml-6 mt-3 space-y-2">
              {[9, 10, 11, 12].map((evf) => {
                const path = `/kozepiskola/evfolyam${evf}`;
                return (
                  <Link
                    key={evf}
                    href={path}
                    className={`block text-md font-semibold ${isActive(path)
                        ? "text-[#33d4ff]"
                        : "hover:text-[#33d4ff]"
                      }`}
                  >
                    {evf}. évfolyam
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Egyetem */}
        <div className="w-full ">
          <button
            onClick={() => setOpen({ ...open, egyetem: !open.egyetem })}
            className="w-full text-left font-bold text-lg hover:text-[#33d4ff] cursor-pointer"
          >
            Egyetem
          </button>
          {open.egyetem && (
            <div className="ml-6 mt-3 space-y-2">
              {[1, 2, 3].map((fok) => {
                const path = `/egyetem/matek${fok}`;
                return (
                  <Link
                    key={fok}
                    href={path}
                    className={`block text-md font-semibold ${isActive(path)
                        ? "text-[#33d4ff]"
                        : "hover:text-[#33d4ff]"
                      }`}
                  >
                    Matek {fok}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Gaál Márk link */}
        <a
          href="https://www.gaalmark.hu"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-bold text-3xl mt-8 cursor-pointer text-center group"
        >
          <span className="text-white group-hover:text-[#33d4ff]">Gaál </span>
          <span className="text-[#33d4ff] group-hover:text-white">Márk</span>
        </a>

      </nav>
    </aside>
  );
}
