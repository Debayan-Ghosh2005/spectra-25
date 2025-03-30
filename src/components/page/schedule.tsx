import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const timelineData: TimelineEntry[] = [
  {
    title: "Register at SPECTRA'25",
    content: (
      <div>
        <p className="text-white dark:text-white">
          Register for SPECTRA 2025 through this website .
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <img
            src="/img/registration.png"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Experience Round-1",
    content: (
      <div>
        <p className="text-white dark:text-white">
          Types of Questions comprises of Quiz, Riddles, Aptitude, GK/GS .
          Screening of top 15 to 20 teams
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <img
            src="/img/round1.jpg"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Lunch Break",
    content: (
      <div>
        <p className="text-white dark:text-white">
          Enjoy the lunch break at the campuss
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <img
            src="/img/colg.jpg"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Experience Round-2",
    content: (
      <div>
        <p className="text-white dark:text-white">
          According to the given scenario the solution approach must have to be
          written down in a sheet within 15 Min.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <img
            src="/img/round2.jpg"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Experience Round-3",
    content: (
      <div>
        <p className="text-white dark:text-white">
          Round consists of Riddle solving using given storyline for each team.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <img
            src="/img/alchemist.jpg"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Prize Distribution",
    content: (
      <div>
        <p className="text-white dark:text-white">
          Prize distribution for top-3 teams.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <img
            src="/img/prize.jpg"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Certificates",
    content: (
      <div>
        <p className="text-white dark:text-white">
          Please be patient for Certificates.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="/img/art3.webp"
            alt="startup template"
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

const Schedule = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const sections = timelineRef.current.querySelectorAll(".timeline-item");
      let index = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          index = i;
        }
      });
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for the timeline items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the header div
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-[#001D35] text-white">
      <div className="mt-10 w-full bg-[#001D35] font-sans md:px-10">
        {/* Animated Header Section */}
        <motion.div
          className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10"
          initial="hidden"
          animate="visible" // Use animate instead of whileInView for initial load animation
          variants={headerVariants}
        >
          <h2 className="mb-4 max-w-4xl text-lg text-white md:text-4xl dark:text-white">
            SPECTRA-2K25 Event Schedule!
          </h2>
          <p className="max-w-sm text-sm text-white md:text-base">
            This timeline showcases the steps for you to complete the event.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-7xl pb-20" ref={timelineRef}>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item flex justify-start pt-10 md:gap-10 md:pt-40`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the item is in view
              variants={itemVariants}
            >
              <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white md:left-3 dark:bg-black">
                  <img
                    src="/img/logo.png"
                    alt="Icon"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="hidden text-xl font-bold text-white md:block md:pl-20 md:text-5xl dark:text-white">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-full pl-20 pr-4 text-white md:pl-4">
                <h3 className="mb-4 block text-left text-2xl font-bold text-white md:hidden">
                  {item.title}
                </h3>
                <div className="text-white">{item.content}</div>
              </div>
            </motion.div>
          ))}

          {/* Progress Bar */}
          <div
            style={{ height: "100%" }}
            className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
          >
            <motion.div
              style={{
                height: progressHeight,
                opacity: 1,
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
