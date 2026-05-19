import { motion } from "framer-motion";

const GPSPulse = () => {
  return (
    <div className="relative flex items-center justify-center">

      {/* Pulse rings */}
      <motion.div
        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute w-10 h-10 bg-cyan-400 rounded-full"
      />

      <motion.div
        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute w-10 h-10 bg-cyan-400 rounded-full"
      />

      {/* Center dot */}
      <div className="w-4 h-4 bg-cyan-500 rounded-full z-10" />

    </div>
  );
};

export default GPSPulse;