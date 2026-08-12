import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <h2 className="text-5xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">

        <p className="mb-4">
          <FaEnvelope className="inline mr-2" />
          ayeshsiddiqa04@gmail.com
        </p>

        <p className="mb-4">
          <FaGithub className="inline mr-2" />
          github.com/ayeshasiddiqa04
        </p>

        <p>
          <FaLinkedin className="inline mr-2" />
          linkedin.com/in/ayesha-siddiqa-70635b340
        </p>

      </div>
    </section>
  );
}