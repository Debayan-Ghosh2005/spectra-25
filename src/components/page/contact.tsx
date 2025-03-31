import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaWhatsapp, FaPhone, FaInstagram, FaEnvelope } from "react-icons/fa";

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I register for Spectra 2025",
      answer: "You can register through the official Spectra 2025 website",
    },
    {
      question: "Can I participate in Spectra 2025 across different departments and years?",
      answer: "Yes, participation across departments and years is allowed. Cross-college participation is also permitted."
    },
    {
      question: "What is the registration fee for Spectra 2025?",
      answer: "₹50 per team for MCKVIE students, ₹70 per team for outside students, and ₹70 per team for cross-college teams.",
    },
    {
      question: "What is the last day to register?",
      answer: "The last date for registration is 7th of April",
    },
    {
      question: "What is the prize pool?",
      answer: "The prize pool is ₹9000.",
    },
  ];

  const contacts = [
    { name: "Madhuparna Das", phone: "+919875317470", whatsapp: "+919875317470" },
    { name: "Monojit Das", phone: "+919836771886", whatsapp: "+919836771886" },
    { name: "Debarati Ghosh", phone: "+917980815043", whatsapp: "+917980815043" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-[#001D35] text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a2b3c] p-8 rounded-2xl shadow-lg">
            <h1 className="text-5xl font-zentry text-white mb-2 pb-11">
              Send Your Queries or<br />Problems
            </h1>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">FULL NAME *</label>
                  <input type="text" placeholder="Richard Hammond" className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">EMAIL ADDRESS *</label>
                  <input type="email" placeholder="support@gmail.com" className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">PHONE NUMBER *</label>
                  <input type="text" placeholder="+91 9999999999" className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500" />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">SUBJECT *</label>
                  <input type="text" placeholder="I would like to discuss" className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">MESSAGE *</label>
                <textarea placeholder="Write message" className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"></textarea>
              </div>
              <button type="submit" className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
                Send Us Message
              </button>
            </form>
          </div>

          <div className="bg-[#1a2b3c] p-8 rounded-2xl shadow-lg">
            <h1 className="text-5xl font-zentry text-white mb-2">
              Need Help? <br /> Contact Us Without Hesitation
            </h1>
            <p className="text-gray-400 text-sm mb-6">
              You can reach out to us if you have any doubts!
            </p>

            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between bg-[#253746] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mt-4">
                <span className="text-xl font-semibold text-white">{contact.name}</span>
                <div className="flex space-x-6">
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-500 transition transform hover:scale-110"
                    title="WhatsApp"
                  >
                    <FaWhatsapp size={36} />
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-blue-400 hover:text-blue-500 transition transform hover:scale-110"
                    title="Call"
                  >
                    <FaPhone size={36} />
                  </a>
                </div>
              </div>
            ))}

            <div className="flex space-x-12 justify-center mt-8">
              <div className="flex flex-col items-center">
                <a href="mailto:spectraaiml@gmail.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500 transition transform hover:scale-110">
                  <FaEnvelope className="text-6xl drop-shadow-lg" />
                </a>
                <span className="text-gray-300 text-base mt-3">Mail Us</span>
              </div>
              <div className="flex flex-col items-center">
                <a href="https://www.instagram.com/spectra_2k25_/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition transform hover:scale-110">
                  <FaInstagram className="text-6xl drop-shadow-lg" />
                </a>
                <span className="text-gray-300 text-base mt-3">Follow Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-zentry mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 bg-[#1a2b3c] rounded-lg focus:outline-none"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="mt-2 p-4 bg-[#253746] rounded-lg text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-zentry mb-8 text-center">Locate Us</h2>
          <div className="h-[400px] overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.915324404707!2d88.3451222091869!3d22.619636979372576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1743003836835!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(30%) contrast(120%) brightness(90%) sepia(10%) hue-rotate(230deg)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;