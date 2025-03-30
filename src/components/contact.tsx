import { JSX } from "react";
import { Button } from "./button";

// Define the props for ImageClipBox
interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}


export const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="my-20 min-h-96 w-screen px-10"
      aria-label="Contact Section"
    >
      <div 
        className="relative rounded-lg py-24 text-blue-50 sm:overflow-hidden"
        style={{
          backgroundImage: "url('/img/hel.png')", // Adjust path as needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text readability
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase tracking-wider">
            Reach Us
          </p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Having Any
            <br /> kind of Trouble ? <br />{" "}
            <span className="text-[#84F38A]">Contact Us</span>
          </p>

          <a href="/contact">
            <Button 
              containerClass="mt-10 cursor-pointer rounded-md bg-[#84F38A] px-6 py-3 text-black hover:bg-sky-500 transition-colors"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};