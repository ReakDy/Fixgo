import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Find Nearby
            <span className="text-cyan-400"> Repairers </span>
            Instantly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-gray-400 text-lg"
          >
            Book trusted repair technicians near your location.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 mt-8"
          >

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 25px rgb(6,182,212)"
              }}
              whileTap={{ scale: 0.95 }}
              className="
              bg-cyan-500
              px-7 py-4
              rounded-xl
              font-semibold
              "
            >
              Request Repair
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#06B6D4"
              }}
              className="
              border border-white/20
              px-7 py-4
              rounded-xl
              "
            >
              Track Repair
            </motion.button>

          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <motion.div
            animate={{
              y: [0, -15, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            className="
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-6
            "
          >

            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt=""
              className="rounded-3xl"
            />

          </motion.div>

          {/* GPS */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
            className="
            absolute
            top-10
            right-10
            bg-cyan-500
            p-5
            rounded-full
            shadow-lg
            shadow-cyan-500/50
            "
          >
            <FaMapMarkerAlt />
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;