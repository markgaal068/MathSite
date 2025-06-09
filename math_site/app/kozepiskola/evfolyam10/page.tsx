"use client";
import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

const feladatok = {
  "Az évfolyam tematikája": [
    { title: "Tematika", file: "/evfolyam10/tematika.pdf" }
  ],
  "Algebra": [
    { title: "Egyenletek gyakorló", file: "/pdf/algebra1.pdf" },
    { title: "Kifejezések átalakítása", file: "/pdf/algebra2.pdf" },
  ],
  "Geometria": [
    { title: "Háromszögek", file: "/pdf/geo1.pdf" },
    { title: "Szögek és kerületek", file: "/pdf/geo2.pdf" },
  ],
};

export default function evfolyam10() {
  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#33d4ff] mb-6">Feladatok 10. évfolyam számára</h1>

      {Object.entries(feladatok).map(([tema, files]) => (
        <section key={tema} className="mb-12">
          <h2 className="text-2xl font-semibold text-white">{tema}</h2>
          <hr className="border-t-4 border-[#33d4ff] my-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {files.map((file, idx) => (
              <Link
                href={file.file}
                target="_blank"
                key={idx}
                className="group bg-[#1e1e1e] border border-[#33d4ff] rounded-xl p-4 text-white flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:bg-[#33d4ff]/10 transition duration-300"
              >
                <FaFilePdf className="text-5xl text-[#33d4ff] group-hover:scale-110 transition-transform" />
                <p className="mt-4 font-semibold text-center group-hover:text-[#33d4ff]">{file.title}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
