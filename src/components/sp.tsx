import { JSX } from "react";

interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={`w-full h-full ${clipClass}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export const Sp = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="my-10 min-h-96 w-full px-4 sm:px-10"
      aria-label="Sponsors Section"
    >
      <div
        className="relative rounded-lg bg-[url('/img/bg3.png')] bg-cover bg-center bg-no-repeat py-20 text-blue-50 sm:overflow-hidden flex flex-col items-center"
      >
        {/* Black Transparent Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        <div className="flex flex-col items-center text-center px-4 relative z-10">
          <h2 className="special-font text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Our Title Sponsors
          </h2>


          <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="border-2 border-white h-12 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <ImageClipBox
                src="/img/apple.png"
                alt="Apple Sponsor Logo"
                clipClass="h-full w-full object-cover"
              />
            </div>
            <div className="border-2 border-white h-12 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <ImageClipBox
                src="/img/tesla.jpg"
                alt="Tesla Sponsor Logo"
                clipClass="h-full w-full object-cover"
              />
            </div>
            <div className="border-2 border-white h-12 w-12 sm:h-20 sm:w-20 md:h-28 md:w-28 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <ImageClipBox
                src="/img/images.png"
                alt="Sponsor Logo"
                clipClass="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};