import Layout from "./layout";
import { FaYoutube, FaInstagram, FaFacebookF, FaGlobe, FaDiscord } from "react-icons/fa";

export default function HomePage() {
  return (
    <Layout>
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Videó szekció */}
        <section className="mb-16">
          <div className="w-full max-w-[900px] mx-auto aspect-video">
            <iframe
              src="https://www.youtube.com/embed/3Xc3CA655Y4"
              title="Mathematics Explained"
              allowFullScreen
              className="w-full h-full rounded-xl border-4 border-[#33d4ff] shadow-lg"
            />
          </div>
        </section>

        {/* Közösségi média szekció */}
        <section>
          <div className="flex flex-wrap justify-center gap-8">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-52 h-52 bg-[#121212] border-2 border-[#33d4ff] rounded-2xl text-white shadow-xl
                transition-transform transform hover:-translate-y-2 hover:scale-105 hover:bg-[#33d4ff] hover:text-black duration-300"
            >
              <FaYoutube className="text-6xl text-[#33d4ff] group-hover:text-black mb-3 transition-colors duration-300" />
              <span className="font-semibold text-xl">YouTube</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-52 h-52 bg-[#121212] border-2 border-[#33d4ff] rounded-2xl text-white shadow-xl
                transition-transform transform hover:-translate-y-2 hover:scale-105 hover:bg-[#33d4ff] hover:text-black duration-300"
            >
              <FaInstagram className="text-6xl text-[#33d4ff] mb-3 transition-colors duration-300" />
              <span className="font-semibold text-xl">Instagram</span>
            </a>

            {/* Discord */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-52 h-52 bg-[#121212] border-2 border-[#33d4ff] rounded-2xl text-white shadow-xl
                transition-transform transform hover:-translate-y-2 hover:scale-105 hover:bg-[#33d4ff] hover:text-black duration-300"
            >
              <FaDiscord className="text-6xl text-[#33d4ff] mb-3 transition-colors duration-300" />
              <span className="font-semibold text-xl">Discord</span>
            </a>

            {/* Weboldal */}
            <a
              href="https://www.gaalmark.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-52 h-52 bg-[#121212] border-2 border-[#33d4ff] rounded-2xl text-white shadow-xl
                transition-transform transform hover:-translate-y-2 hover:scale-105 hover:bg-[#33d4ff] hover:text-black duration-300"
            >
              <FaGlobe className="text-6xl text-[#33d4ff] mb-3 transition-colors duration-300" />
              <span className="font-semibold text-xl">Weboldal</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
