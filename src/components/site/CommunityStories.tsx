import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, X } from "lucide-react";
import storyImg from "@/assets/story.png";

export function CommunityStories() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative z-10 bg-[#0A0909] text-gray-100 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[580px] rounded-[2.5rem] overflow-hidden bg-[#121111]"
          >
            <img
              src={storyImg}
              alt="Community Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-[70%] aspect-square bg-[#A82323]/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center p-8 border border-white/10"
            >
              <h1 className="text-white text-4xl font-bold uppercase font-serif">
                Every face tells a
              </h1>
              <span className="text-[#E6C343] text-6xl mt-2 rotate-[-3deg]">Story</span>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-5xl font-serif text-white">
              Read journeys.{" "}
              <span className="text-[#D59D82]">Help directly.</span>
            </h2>
            <p className="text-gray-400">
              Women from all regional pathways can document their experiences
              while viewers allocate micro-grants and support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-4 bg-[#D59D82] text-black font-bold rounded-xl"
            >
              <MessageSquarePlus size={18} /> Share Your Story
            </motion.button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#0A0909] border border-white/10 p-8"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-serif text-white mb-2">Share Your Story</h3>
              <p className="text-sm text-gray-400 mb-6">
                Your story can inspire thousands of women. We read every submission.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#D59D82]/60"
                />
                <input
                  type="text"
                  placeholder="Your city / state"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#D59D82]/60"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us your story..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#D59D82]/60 resize-none"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full rounded-xl bg-[#D59D82] py-3 text-sm font-bold text-black transition hover:bg-[#c68e73]"
                >
                  Submit Story
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}