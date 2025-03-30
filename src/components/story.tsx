import { useRef } from "react";

import { AnimatedTitle } from "./animated-title";
import { Button } from "./button";
import { RoundedCorners } from "./rounded-corners";

export const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Team
        </p>

        <div className="relative size-full">
          <AnimatedTitle containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10">
            {"The St<b>o</b>ry of <br /> a hidden real<b>m</b>"}
          </AnimatedTitle>

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="Entrance"
                  className="object-contain"
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry the boundless pillar. Discover
              its secrets and shape your fate amidst infinite opportunities.
            </p>

            <Button id="realm-button" containerClass="mt-5">
              Discover Prologue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};