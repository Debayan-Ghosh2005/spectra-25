import { JSX, PropsWithChildren, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({
  children,
  className = "",
}: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`block md:grid ${className}`} // Ensure block display on mobile, grid on md and above
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative w-full h-full">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
        />
      )}

      <div className="relative z-10 flex w-full h-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="text-sm mt-2 max-w-64 sm:text-base md:mt-3">
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = (): JSX.Element => {
  return (
    <section
      className="bg-[#001d35] pb-20 sm:pb-32 md:pb-52"
      aria-label="Features Section"
    >
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-3 py-16 sm:px-5 sm:py-24 md:py-32">
          <p className="font-circular-web text-base sm:text-lg text-blue-50">
            Immerse yourself in the exciting realm of the event's game layer!
          </p>

          <p className="max-w-md font-circular-web text-base sm:text-lg text-blue-50 opacity-50 mt-4">
            The event's game layer offers an immersive experience where
            participants can engage in exciting challenges, solve puzzles, and
            explore thrilling adventures. Get ready to test your skills and have
            fun!
          </p>
        </div>

        <div
          id="nexus"
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:grid-rows-3 h-auto md:h-[135vh]"
        >
          <BentoTilt className="bento-tilt_1 h-64 sm:h-80 md:h-auto md:col-span-1 md:row-span-2">
            <BentoCard
              src="https://res.cloudinary.com/dl5pkrids/video/upload/v1743330988/bgli_fzpjq3.mp4"
              title={<>Tribute to Ghibli Studio Animation</>}
              description="From Team SPECTRA"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-64 sm:h-80 md:h-auto mx-0 md:col-span-1 md:ms-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/img/art7.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <BentoCard
                title={<span className="text-white">Round 1</span>}
                description={
                  <span className="text-white">
                    An anime and gaming-inspired NFT collection - the IP primed
                    for expansion.
                  </span>
                }
                src=""
              />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 h-64 sm:h-80 md:h-auto mx-0 md:col-span-1 md:me-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/img/db.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <BentoCard
                title={<span className="text-white">Round 2</span>}
                description={
                  <span className="text-white">
                    An anime and gaming-inspired NFT collection - the IP primed
                    for expansion.
                  </span>
                }
                src=""
              />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-64 sm:h-80 md:h-auto w-full">
            <div
              className="w-full h-full bg-cover bg-center p-5"
              style={{
                backgroundImage: "url('/img/colg.jpg')",
              }}
            >
              <div className="h-full flex flex-col justify-between">
                <h1 className="bento-title special-font max-w-64 text-[#FFF000]">
                  {/* W<b>i</b>n Amazin<b>g</b> Prizes */}
                </h1>
                <TiLocationArrow className="m-3 sm:m-4 md:m-5 scale-[3] sm:scale-[4] md:scale-[5] self-end text-[#FFF000]" />
              </div>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 h-64 sm:h-80 md:h-auto w-full">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/img/art3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <BentoCard
                title={<span className="text-white">Round 3</span>}
                description={
                  <span className="text-white">
                    An anime and gaming-inspired NFT collection - the IP primed
                    for expansion.
                  </span>
                }
                src=""
              />
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};