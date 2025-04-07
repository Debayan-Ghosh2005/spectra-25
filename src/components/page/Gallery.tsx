import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    title: "Innauguration & Checkin",
    main: "/img/registration05.JPG",
    related: [
      "/img/registration03.JPG",
      "/img/registration04.JPG",
      "/img/registration06.JPG",
      "/img/registration01.JPG",
    ],
  },
  {
    title: "Round 1 Highlights",
    main: "/img/event01.JPG",
    related: [
      "/img/event05.JPG",
      "/img/event02.JPG",
      "/img/event03.JPG",
      "/img/event04.JPG",
    ],
  },
  {
    title: "Round 2 Highlights",
    main: "/img/event11.JPG",
    related: [
      "/img/event06.JPG",
      "/img/event07.JPG",
      "/img/event08.JPG",
      "/img/event09.JPG",
    ],
  },
  {
    title: "Round 3 Highlights",
    main: "/img/event12.JPG",
    related: [
      "/img/event13.JPG",
      "/img/event14.JPG",
      "/img/event15.JPG",
      "/img/event16.JPG",
    ],
  },
  {
    title: "Prize Distribution",
    main: "/img/event17.JPG",
    related: [
      "/img/event21.JPG",
      "/img/event18.JPG",
      "/img/event19.JPG",
      "/img/event20.JPG",
    ],
  },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % categories.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };
  // relative min-h-screen w-screen overflow-x-hidden bg-[#001D35] text-white
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-[#001D35] p-10 text-white">
      <h1 className="mb-8 mt-24 text-center font-zentry text-4xl">
        SPECTRA 2024 MOMENTS
      </h1>
      <div className="relative w-full max-w-2xl overflow-hidden">
        <h2 className="mb-2 text-center font-general text-2xl">
          {categories[index].title}
        </h2>
        <motion.img
          key={index}
          src={categories[index].main}
          alt={`Spectra 2024 Image ${index + 1}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="h-56 w-full rounded-lg object-cover shadow-lg"
        />
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-3"
          onClick={prevImage}
        >
          ◀
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-3"
          onClick={nextImage}
        >
          ▶
        </button>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {categories[index].related.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Related Image ${idx + 1}`}
            className="h-48 w-full rounded-lg object-cover shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
