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
      className={className}
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
  description?: React.ReactNode; // Updated to accept ReactNode instead of string
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="tetx-xl mt-3 max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = (): JSX.Element => {
  return (
    <section className="bg-[#001d35] pb-52" aria-label="Features Section">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Immerse yourself in the exciting realm of the event's game layer!
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            The event's game layer offers an immersive experience where
            participants can engage in exciting challenges, solve puzzles, and
            explore thrilling adventures. Get ready to test your skills and have
            fun!
          </p>
        </div>

        {/* <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt> */}

        <div
          id="nexus"
          className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7"
        >
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/img/art7.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <BentoCard
                title={<span className="text-white">Round 1</span>} // Line 134
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

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/img/wwy.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <BentoCard
                title={<span className="text-black">Round 2</span>} // Line 160
                description={
                  <span className="text-black">
                    An anime and gaming-inspired NFT collection - the IP primed
                    for expansion.
                  </span>
                }
                src=""
              />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div
              className="flex size-full flex-col justify-between bg-cover bg-center p-5"
              style={{ backgroundImage: "url('/img/colg.jpg')" }}
            >
              <h1 className="bento-title special-font max-w-64 text-[#FFF000]">
                {/* W<b>i</b>n Amazin<b>g</b> Prizes */}
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end text-[#FFF000]" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div
              style={{
                backgroundImage: "url('/img/art3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <BentoCard
                title={<span className="text-white">Round 3</span>} // Line 215
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