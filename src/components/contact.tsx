import { JSX } from "react";
import { Button } from "./button";

export const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="my-10 md:my-20 w-full px-4 sm:px-6 md:px-10"
      aria-label="Contact Section"
    >
      <div
        className="relative rounded-lg py-12 md:py-24 text-blue-50 overflow-hidden"
        style={{
          backgroundImage: "url('/img/hel.png')", // Adjust path as needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text readability
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="flex flex-col items-center text-center px-4 md:px-0">
          <p className="font-general text-[10px] sm:text-xs uppercase tracking-wider">
            Reach Us
          </p>
          
          <p className="special-font mt-6 md:mt-10 w-full font-zentry text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] leading-tight md:leading-[0.9]">
            Having Any
            <br /> kind of Trouble ? <br />{" "}
            <span className="text-[#84F38A]">Contact Us</span>
          </p>
          
          <a href="/contact">
            <Button
              containerClass="mt-6 md:mt-10 cursor-pointer rounded-md bg-[#84F38A] px-4 sm:px-6 py-2 sm:py-3 text-black hover:bg-sky-500 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};