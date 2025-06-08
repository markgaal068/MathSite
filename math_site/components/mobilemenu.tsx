"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sections, setSections] = useState({
    also: false,
    felso: false,
    kozep: false,
    egyetem: false,
  });

  const isActive = (path: string) => pathname === path;

  const toggleSection = (section: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="lg:hidden fixed top-4 left-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        className="p-2 bg-[#33d4ff] text-black rounded-full shadow-lg"
      >
        {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Háttér overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menü doboz */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-14 left-0 bg-[#121212] text-white p-6 rounded-lg w-[90vw] max-w-xs shadow-2xl border border-[#33d4ff] z-50"
            >
              <nav className="space-y-4 text-base">
                <Link
                  href="/"
                  className={`block font-bold text-lg ${
                    isActive("/") ? "text-[#33d4ff]" : "hover:text-[#33d4ff]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Főoldal
                </Link>

                {/* Alsó tagozat */}
                <div>
                  <button
                    onClick={() => toggleSection("also")}
                    className="font-bold w-full text-left hover:text-[#33d4ff]"
                  >
                    Alsó tagozat
                  </button>
                  <AnimatePresence>
                    {sections.also && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 space-y-2 overflow-hidden"
                      >
                        {[1, 2, 3, 4].map((evf) => {
                          const path = `/alsotagozat/evfolyam${evf}`;
                          return (
                            <Link
                              key={evf}
                              href={path}
                              className={`block font-medium text-sm ${
                                isActive(path) ? "text-[#33d4ff]" : "hover:text-[#33d4ff]"
                              }`}
                              onClick={() => setOpen(false)}
                            >
                              {evf}. évfolyam
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Felső tagozat */}
                <div>
                  <button
                    onClick={() => toggleSection("felso")}
                    className="font-bold w-full text-left hover:text-[#33d4ff]"
                  >
                    Felső tagozat
                  </button>
                  <AnimatePresence>
                    {sections.felso && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 space-y-2 overflow-hidden"
                      >
                        {[5, 6, 7, 8].map((evf) => {
                          const path = `/felsotagozat/evfolyam${evf}`;
                          return (
                            <Link
                              key={evf}
                              href={path}
                              className={`block font-medium text-sm ${
                                isActive(path) ? "text-[#33d4ff]" : "hover:text-[#33d4ff]"
                              }`}
                              onClick={() => setOpen(false)}
                            >
                              {evf}. évfolyam
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Középiskola */}
                <div>
                  <button
                    onClick={() => toggleSection("kozep")}
                    className="font-bold w-full text-left hover:text-[#33d4ff]"
                  >
                    Középiskola
                  </button>
                  <AnimatePresence>
                    {sections.kozep && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 space-y-2 overflow-hidden"
                      >
                        {[9, 10, 11, 12].map((evf) => {
                          const path = `/kozepiskola/evfolyam${evf}`;
                          return (
                            <Link
                              key={evf}
                              href={path}
                              className={`block font-medium text-sm ${
                                isActive(path) ? "text-[#33d4ff]" : "hover:text-[#33d4ff]"
                              }`}
                              onClick={() => setOpen(false)}
                            >
                              {evf}. évfolyam
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Egyetem */}
                <div>
                  <button
                    onClick={() => toggleSection("egyetem")}
                    className="font-bold w-full text-left hover:text-[#33d4ff]"
                  >
                    Egyetem
                  </button>
                  <AnimatePresence>
                    {sections.egyetem && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-4 mt-2 space-y-2 overflow-hidden"
                      >
                        {[0, 1, 2, 3].map((fok) => {
                          const path = `/egyetem/matek${fok}`;
                          return (
                            <Link
                              key={fok}
                              href={path}
                              className={`block font-medium text-sm ${
                                isActive(path) ? "text-[#33d4ff]" : "hover:text-[#33d4ff]"
                              }`}
                              onClick={() => setOpen(false)}
                            >
                              Matek {fok}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Gaál Márk */}
                <a
                  href="https://www.gaalmark.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-2xl font-bold mt-6 group"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-white group-hover:text-[#33d4ff]">Gaál </span>
                  <span className="text-[#33d4ff] group-hover:text-white">Márk</span>
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
