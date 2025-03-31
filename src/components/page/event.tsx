import { useState } from "react";
import { Brain, Puzzle, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

// Tech Images
import tech1 from "/public/img/tech5.png";
import tech2 from "/public/img/tech2.avif";
import tech3 from "/public/img/tech4.png";

interface EventRound {
  title: string;
  icon: JSX.Element;
  time: string;
  description: string;
  image: string; // If using imported images, change to `image: any;`
  furtherDetails: string;
}

const EventPage = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [selectedRound, setSelectedRound] = useState<EventRound | null>(null);

  const eventRounds: EventRound[] = [
    {
      title: "Round 1: APTIVERSE",
      icon: <Brain className="h-8 w-8" />,
      time: "25 minutes [30 questions]",
      description:
        "Types of Questions comprises of Quiz, Riddles, Aptitude, GK/GS. Screening of top 15 to 20 teams (Yet to be decided)",
      image: tech1,
      furtherDetails:
        "APTIVERSE is the first screening round that tests participants' quick thinking and knowledge across diverse domains. The 30 questions will be a balanced mix of general knowledge, logical puzzles, quantitative aptitude, and current affairs. Teams must answer within the strict 25-minute time limit. This round emphasizes accuracy under pressure, with the top 15-20 teams advancing based on their scores. No partial marking will be applied, so precision is key. Participants should brush up on their mental math, pattern recognition, and general awareness to excel in this round.",
    },
    {
      title: "Round 2: VIDZARD",
      icon: <Puzzle className="h-8 w-8" />,
      time: "75 minutes total (15 min planning + 60 min solving)",
      description:
        "First 15 minutes: Write solution approach on paper. General problem-solving questions; coding allowed on any platform for the rest 1 hour. Internet access allowed for one-fourth of the total time (approx. 18-19 minutes), mainly for downloading compilers if needed.",
      image: tech2,
      furtherDetails:
        "VIDZARD challenges teams with complex problem-solving scenarios. The round begins with a 15-minute paper-based planning phase where teams must document their solution approach without any digital tools. This tests structured thinking and planning skills. The subsequent 60 minutes allow coding on any platform to implement solutions. Limited internet access (about 18-19 minutes) is permitted strictly for technical setup and research - not for finding direct solutions. Teams must demonstrate creativity in problem-solving while adhering to ethical guidelines. Any use of AI tools or unfair practices will result in immediate disqualification. This round evaluates both technical skills and integrity under constrained resources.",
    },
    {
      title: "Round 3: TRYME-ZE",
      icon: <Award className="h-8 w-8" />,
      time: "45 minutes",
      description: "6 Teams selected from Round 2. Round consists of Riddle solving using given storyline for each team.",
      image: tech3,
      furtherDetails:
        "TRYME-ZE is the ultimate test of creativity and lateral thinking for the top 6 qualifying teams. Each team will receive a unique storyline packed with embedded riddles and puzzles. Teams must unravel the narrative, identify hidden clues, and solve interconnected challenges within the 45-minute timeframe. This round emphasizes teamwork, out-of-the-box thinking, and the ability to connect disparate information. Judges will evaluate not just correct answers but also the elegance of solutions and collaborative dynamics. The storyline format makes this round particularly engaging, requiring participants to maintain both logical rigor and imaginative flexibility throughout the challenge.",
    },
  ];

  const handleCardFlip = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handleShowMore = (index: number) => {
    setSelectedRound(eventRounds[index]);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedRound(null);
  };

  return (
    <section
      id="event"
      className="relative min-h-screen bg-[#001d35] px-4 py-20 sm:px-6"
    >
      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        <motion.h2
          className="font-orbitron mb-12 pt-24 text-center text-4xl font-bold uppercase text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Event Rounds
        </motion.h2>

        <div className="space-y-16">
          {eventRounds.map((round, index) => (
            <div
              key={round.title}
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } justify-center gap-8`}
            >
              <div className="relative w-full max-w-[400px] flex-1">
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    boxShadow: "0 0 20px rgba(233, 69, 96, 0.8)",
                    animation: "neon-glow 2s ease-in-out infinite alternate",
                  }}
                />
                <img
                  src={round.image}
                  alt={round.title}
                  className="relative z-10 h-[250px] w-full rounded-lg object-cover"
                />
              </div>

              <motion.div
                className="relative z-20 flex min-h-[200px] w-full max-w-[400px] flex-1 flex-col items-center justify-center rounded-2xl border border-white/20 bg-[#E94560]/20 p-6 backdrop-blur-lg transition-all duration-200 hover:bg-[#E94560]/30 hover:shadow-[0_0_20px_rgba(233,69,96,0.5)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => handleCardFlip(index)}
              >
                {!flippedCards.includes(index) && (
                  <div className="flex h-full w-full flex-col items-center justify-center p-6">
                    <div className="text-white">{round.icon}</div>
                    <h3 className="font-orbitron mt-4 text-center text-xl font-bold uppercase text-white sm:text-2xl">
                      {round.title}
                    </h3>
                  </div>
                )}

                {flippedCards.includes(index) && (
                  <div className="w-full space-y-4 p-6 text-center">
                    <h3 className="font-orbitron text-xl font-bold uppercase text-white sm:text-2xl">
                      {round.title}
                    </h3>
                    <div className="flex items-center justify-center gap-4 text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span className="font-general">{round.time}</span>
                    </div>
                    <p className="font-circular-web text-sm text-gray-200 sm:text-base">
                      {round.description}
                    </p>
                    <motion.button
                      className="mt-4 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF] px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-105"
                      style={{ boxShadow: "0 0 10px rgba(0, 255, 135, 0.8)" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShowMore(index)}
                    >
                      Show More
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {popupVisible && selectedRound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            className="relative mx-4 flex w-full max-w-2xl flex-col rounded-2xl border border-white/20 bg-[#E94560]/20 p-6 backdrop-blur-lg sm:p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-orbitron text-xl font-bold uppercase text-white sm:text-2xl">
              {selectedRound.title}
            </h3>
            <p className="font-circular-web mt-2 text-sm text-gray-200 sm:text-base">
              {selectedRound.furtherDetails}
            </p>
            <motion.button
              className="mt-4 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF] px-4 py-2 text-sm font-bold"
              onClick={handleClosePopup}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default EventPage;