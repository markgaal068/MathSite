import Layout from "./layout";
import { FaYoutube, FaInstagram, FaDiscord, FaGlobe } from "react-icons/fa";

export default function HomePage() {
  return (
    <Layout>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "https://www.youtube.com/@markgaalmg/", icon: <FaYoutube />, label: "YouTube" },
              { href: "https://www.instagram.com/gaal_mark55/", icon: <FaInstagram />, label: "Instagram" },
              { href: "https://discord.gg/JERnc3gq4Z", icon: <FaDiscord />, label: "Discord" },
              { href: "https://www.gaalmark.hu", icon: <FaGlobe />, label: "Weboldal" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-full h-52 bg-[#121212] border-2 border-[#33d4ff] rounded-2xl text-white shadow-xl
                  transition-transform transform hover:-translate-y-2 hover:scale-105 hover:bg-[#33d4ff] hover:text-black duration-300"
              >
                <div className="text-6xl text-[#33d4ff] group-hover:text-[#121212] transition-colors duration-300 mb-3">
                  {icon}
                </div>
                <span className="font-semibold text-xl">{label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
