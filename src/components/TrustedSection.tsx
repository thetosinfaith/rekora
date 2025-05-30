import { Phone } from "lucide-react";
import Testimonials from "./Testimonials";
import yo from "../assets/brain.png";

export default function TrustedSection() {
  return (
    <>
      <section className="relative w-full bg-rekora-dark-blue py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className=" absolute inset-0 bg-[url('import yo from '../assets/brain.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl font-heading">
                Testimonials
              </h2>
              <div className="mb-6 h-1 w-16 bg-rekora-light-blue"></div>

              <p className="mb-10 text-lg text-white font-body">
                Over 5,000 students trained with a 96% satisfaction rate.
              </p>

              <div className="flex flex-col gap-6 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-lg font-body text-white transition-colors hover:bg-white/10"
                >
                  CONTACT US
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rekora-light-blue">
                    <Phone size={24} className="text-rekora-dark-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white font-body">
                      CALL OR WHATSAPP US VIA
                    </p>
                    <p className="text-lg font-bold text-white">
                      +2349090123584000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-row gap-12 lg:w-auto">
              <div className="flex flex-col items-center">
                <h3 className="text-6xl font-bold text-rekora-light-blue md:text-7xl font-heading">
                  5k+
                </h3>
                <p className="text-lg font-medium text-white font-body">
                  Students Trained
                </p>
              </div>

              <div className="flex flex-col items-center font-heading">
                <h3 className="text-6xl font-bold text-rekora-light-blue md:text-7xl font-heading">
                  96%
                </h3>
                <p className="text-lg font-medium text-white font-body">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 hidden w-px bg-amber-500 lg:block"></div>
        <Testimonials />
      </section>
    </>
  );
}
