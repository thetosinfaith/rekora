import React, { useState } from "react";
import { Link } from "react-router-dom";
import Kid1 from "../assets/kid1.png";
import Kid2 from "../assets/Kid2.png";
import Kid3 from "../assets/workshop.jpg";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";

import { ArrowRight, Microscope, FlaskConical, Activity } from "lucide-react";

import VisitSchedulerModal from "./VisitSchedulerModal";

const programsData = [
  {
    icon: Microscope,
    title: "Neuroscience Workshop",
    description:
      "A series of engaging 90-minute in-school workshops introducing students to the brain, nervous system, and fun neuro experiments to spark their curiosity.",
    linkText: "Register Interest",
    image: Kid3,
    linkTo: "/register-interest",
    type: "link",
  },
  {
    icon: FlaskConical,
    title: "Rekora Bootcamp",
    description:
      "A one-day intensive neuroscience experience bringing students together for immersive labs and talks by professionals in different STEM careers.",
    linkText: "Apply Now",
    image: Kid1,
    linkTo: "/apply-now",
    type: "link",
  },
  {
    icon: Activity,
    title: "Equipment Access",
    description:
      "A free sign-up system for neuroscience tools (e.g., EEG headsets, brain models) for teachers and students to use at our partner-hub for self-guided learning.",
    linkText: "Choose Visit Date",
    image: Kid2,
    type: "modal",
  },
];

const StemProgram = () => {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  const handleOpenVisitModal = () => {
    setIsVisitModalOpen(true);
  };

  const handleCloseVisitModal = () => {
    setIsVisitModalOpen(false);
  };

  return (
    <section className="relative z-20 mx-auto -mt-6 max-w-[90%] rounded-3xl bg-rekora-light-blue px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-16">
      <div className="mb-8 flex flex-col items-start md:mb-12 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <h2
            className="font-heading mb-6 text-4xl font-bold text-black sm:text-5xl"
            data-aos="fade-up"
          >
            What We Offer
          </h2>
          <div
            className="mb-6 h-1 w-16 bg-rekora-dark-blue"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="mb-8 text-lg text-black"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We have a host of events at Rekora, from school outreaches to
            bootcamps. We also partner with a hub where students can sign up and
            use neuroscience experiments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
        {programsData.map(
          (
            { icon: Icon, title, description, linkText, image, linkTo, type },
            idx
          ) => (
            <div key={idx} className="flex h-full flex-col">
              <Icon className="mb-4 h-7 w-7 text-black sm:h-8 sm:w-8" />
              <h3 className="font-heading mb-3 text-lg font-bold text-black sm:mb-4 sm:text-xl">
                {title}
              </h3>
              <p className="font-body mb-6 max-w-full text-lg text-black sm:mb-8 sm:max-w-[20rem] md:max-w-none">
                {description}
              </p>
              <img
                src={image}
                alt={title}
                className="mt-2 h-80 w-full rounded-xl object-cover"
              />

              {type === "link" ? (
                <Button
                  asChild
                  className="mt-6 flex items-center gap-2 rounded-full bg-rekora-dark-blue px-6 py-6 text-lg text-white"
                >
                  <Link to={linkTo}>
                    {linkText}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={handleOpenVisitModal}
                  className="mt-6 flex items-center gap-2 rounded-full bg-rekora-dark-blue px-6 py-6 text-lg text-white"
                >
                  {linkText}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              )}
            </div>
          )
        )}
      </div>

      <VisitSchedulerModal
        isOpen={isVisitModalOpen}
        onClose={handleCloseVisitModal}
      />
      <Toaster richColors />
    </section>
  );
};

export default StemProgram;