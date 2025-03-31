import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socials: {
    twitter?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    role: "Lead Developer",
    image: "https://res.cloudinary.com/dqievv927/image/upload/v1743086403/Vizu1/velye9g6dhk0zwtzlzxi.jpg",
    bio: "Specializes in React and Next.js. Known for never giving up on debugging.",
    socials: {
      twitter: "https://twitter.com/naruto",
      instagram: "https://instagram.com/naruto",
      github: "https://github.com/naruto",
      linkedin: "https://linkedin.com/in/naruto",
    },
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    role: "Senior Developer",
    image: "https://via.placeholder.com/150",
    bio: "Expert in TypeScript and performance optimization. Always striving for perfection.",
    socials: {
      twitter: "https://twitter.com/sasuke",
      github: "https://github.com/sasuke",
      linkedin: "https://linkedin.com/in/sasuke",
    },
  },
  {
    id: 3,
    name: "Sakura Haruno",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    bio: "Creates stunning interfaces with a focus on user experience and accessibility.",
    socials: {
      instagram: "https://instagram.com/sakura",
      github: "https://github.com/sakura",
      linkedin: "https://linkedin.com/in/sakura",
    },
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    bio: "Leads with expertise and calm. Always reading the latest project management books.",
    socials: {
      twitter: "https://twitter.com/kakashi",
      github: "https://github.com/kakashi",
      linkedin: "https://linkedin.com/in/kakashi",
    },
  },
  {
    id: 5,
    name: "Itachi Uchiha",
    role: "CTO",
    image: "https://via.placeholder.com/150",
    bio: "Visionary technology leader with expertise in AI and cloud architecture.",
    socials: {
      twitter: "https://twitter.com/itachi",
      instagram: "https://instagram.com/itachi",
      linkedin: "https://linkedin.com/in/itachi",
    },
  },
  {
    id: 6,
    name: "Hinata Hyuga",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    bio: "Specializes in React animations and CSS. Attentive to the smallest details.",
    socials: {
      instagram: "https://instagram.com/hinata",
      github: "https://github.com/hinata",
      linkedin: "https://linkedin.com/in/hinata",
    },
  },
  {
    id: 7,
    name: "Gaara",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    bio: "Node.js and database expert. Rock solid code that stands the test of time.",
    socials: {
      twitter: "https://twitter.com/gaara",
      github: "https://github.com/gaara",
      linkedin: "https://linkedin.com/in/gaara",
    },
  },
  {
    id: 8,
    name: "Rock Lee",
    role: "Graphic Designer",
    image: "https://via.placeholder.com/150",
    bio: "Creative genius who works tirelessly to perfect every pixel and design element.",
    socials: {
      twitter: "https://twitter.com/rocklee",
      instagram: "https://instagram.com/rocklee",
      linkedin: "https://linkedin.com/in/rocklee",
    },
  },
];

type RoleFilter = "Developer" | "Designer" | "Management";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      delay: 0.1,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
};

const cardGlow = {
  rest: {
    boxShadow: "0 0 15px rgba(101, 31, 255, 0.1)",
  },
  hover: {
    boxShadow: "0 0 25px rgba(101, 31, 255, 0.4)",
  },
};

const buttonVariants = {
  inactive: {
    scale: 1,
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    color: "#FFFFFF",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  active: {
    scale: 1.02,
    backgroundColor: "rgba(101, 31, 255, 0.15)",
    color: "#FFFFFF",
    borderColor: "#651FFF",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  hover: {
    scale: 1.03,
    backgroundColor: "rgba(101, 31, 255, 0.2)",
    transition: {
      duration: 0.2,
    },
  },
};

const roleColors: Record<RoleFilter, string> = {
  Developer: "#651FFF",
  Designer: "#00B8D4",
  Management: "#00C853",
};

const Team = () => {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<RoleFilter>("Developer");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categorizeRole = (role: string): RoleFilter => {
    if (role.includes("Developer")) return "Developer";
    if (role.includes("Designer")) return "Designer";
    if (role === "Project Manager" || role === "CTO") return "Management";
    return "Developer"; // Default to Developer if no match
  };

  const filteredMembers = teamMembers.filter(
    (member) => categorizeRole(member.role) === activeFilter
  );

  const roleFilters: RoleFilter[] = ["Developer", "Designer", "Management"];

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-[#001D35] pb-24">
      <style>
        {`
          @font-face {
            font-family: 'zentry';
            src: url('/fonts/zentry-regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'zentry';
            src: url('/fonts/zentry-regular.woff2') format('woff.2');
            font-weight: bold;
            font-style: normal;
          }
          .bg-gradient {
            background: #001D35;
          }
          .card-glass {
            background: rgb(2, 37, 67);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .bio-glass {
            background: rgba(30, 0, 96, 0.3);
            backdrop-filter: blur(8px);
          }
        `}
      </style>

      <Navbar />

      <motion.div
        className="relative z-10 container mx-auto pt-28 px-4 sm:px-8 md:px-16 lg:px-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-zentry"
            style={{
              background: "white",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Meet Our Team
          </motion.h1>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#651FFF] to-[#00B8D4] mt-3 mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-300 text-center max-w-2xl mb-12 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Our talented professionals combine creativity and expertise to deliver exceptional results.
            Each team member brings unique skills and perspectives to help achieve our shared vision.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {roleFilters.map((filter) => (
              <motion.button
                key={filter}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 font-medium transition-all ${
                  activeFilter === filter ? "border-[#651FFF]" : "border-white/10"
                }`}
                variants={buttonVariants}
                initial="inactive"
                animate={activeFilter === filter ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="card-glass rounded-xl overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              whileHover={["hover", "hoverGlow"]}
              viewport={{ once: false, margin: "0px 0px -100px 0px" }}
              variants={{
                ...cardVariants,
                hoverGlow: cardGlow.hover,
              }}
              custom={index}
              onHoverStart={() => setExpandedCardId(member.id)}
              onHoverEnd={() => setExpandedCardId(null)}
            >
              <div className="relative">
                <motion.div
                  className="w-full h-32 sm:h-40 bg-gradient-to-r from-purple-900/30 to-blue-900/30"
                  whileHover={{
                    backgroundColor: `rgba(${roleColors[categorizeRole(member.role)]}, 0.2)`,
                  }}
                />
                <motion.div
                  className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2"
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ x: "-50%" }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-[#08001A] object-cover shadow-xl"
                  />
                </motion.div>
              </div>
              <div className="pt-16 sm:pt-20 pb-6 px-4 sm:px-6 text-center">
                <h2
                  className="text-xl sm:text-2xl font-bold text-white mb-1 font-general"
                >
                  {member.name}
                </h2>
                <motion.p
                  className="font-medium mb-3 text-sm sm:text-base"
                  style={{
                    color: roleColors[categorizeRole(member.role)],
                  }}
                >
                  {member.role}
                </motion.p>
                {member.bio && (
                  <motion.p
                    className="text-xs sm:text-sm text-gray-300 mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: expandedCardId === member.id ? 1 : 0,
                      height: expandedCardId === member.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.bio}
                  </motion.p>
                )}
                <motion.div
                  className="flex justify-center space-x-4"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  {member.socials.linkedin && (
                    <motion.a
                      href={member.socials.linkedin}
                      target="_blank"
                      className="text-white/70 hover:text-[#0A66C2]"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin size={16} />
                    </motion.a>
                  )}
                  {member.socials.github && (
                    <motion.a
                      href={member.socials.github}
                      target="_blank"
                      className="text-white/70 hover:text-white"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={16} />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a
                      href={member.socials.twitter}
                      target="_blank"
                      className="text-white/70 hover:text-[#1DA1F2]"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTwitter size={16} />
                    </motion.a>
                  )}
                  {member.socials.instagram && (
                    <motion.a
                      href={member.socials.instagram}
                      target="_blank"
                      className="text-white/70 hover:text-[#E1306C]"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaInstagram size={16} />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <motion.div
            className="text-center py-12 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg sm:text-xl text-white/80 mb-6 zentry-heading">
              No team members found in this category
            </h3>
            <motion.button
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#651FFF] to-[#7C4DFF] text-white font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(101, 31, 255, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter("Developer")}
            >
              Show Developers
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Team;