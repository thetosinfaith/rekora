import { Button } from "@/components/ui/button";
import Ruth from "../assets/Founder.jpg";

export default function MeetFounder() {
  return (
    <div className="min-h-screen">
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-rekora-light-blue font-body">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="absolute top-8 right-8">
              <svg
                className="h-12 w-12 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rekora-dark-blue mb-6 font-heading">
              Meet the Founder
            </h1>
            <div className="mb-6 h-1 w-16 bg-rekora-dark-blue"></div>

            <p className="text-black text-lg mb-3">
              When I first discovered neuroscience at Bowdoin College, I
              realized how limited it was back in Nigeria.{" "}
              <span className="font-bold text-rekora-dark-blue text-lg mb-3 max-w-lg bg">
                Rekora exists to change that.
              </span>
            </p>

            <p className="font-bold text-lg text-rekora-dark-blue mb-4">
              I believe African students deserve more than theory, they deserve
              microscopes, mentors, and opportunities for young Africans.
            </p>
            <p className="text-black text-lg mb-4">
              I am a final-year student at Bowdoin College in the U.S.,
              studying Neuroscience and German. Born and raised in Lagos,
              Nigeria, I am so full of energy, ideas, and a big heart for young
              people.
            </p>

            <p className="text-black text-lg mb-6">
              I lead Teenation Africa, where I help young minds dream big,
              lead boldly, and grow with confidence. At Rekora, I am all
              about helping children feel brilliant and unstoppable. I
              see every child as a scientist in the making and I am here to
              cheer them on every step of the way.
            </p>

            <Button className="bg-rekora-dark-blue text-white rounded-full px-6 py-6 flex items-center gap-2 text-lg">
              Connect With Ruth
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden border-4 border-rekora-dark-blue relative">
              <div className="absolute -top-6 -left-6 bg-yellow-400 h-12 w-24 transform rotate-12 z-10"></div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 h-12 w-24 transform rotate-12 z-10"></div>
              <div className="h-[300px] sm:h-[400px] lg:h-[550px] relative">
                <img
                  src={Ruth}
                  alt="Kids playing with toys"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
