import {
  FaMapMarkedAlt,
  FaUserCheck,
  FaBolt,
  FaMoneyCheckAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Features = () => {

  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Live GPS Tracking",
      desc: "Track repairers in real-time."
    },
    {
      icon: <FaUserCheck />,
      title: "Verified Repairers",
      desc: "Trusted and verified technicians."
    },
    {
      icon: <FaBolt />,
      title: "Fast Arrival",
      desc: "Quick response nearby service."
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Online Payment",
      desc: "Secure online transactions."
    },
    {
      icon: <FaClock />,
      title: "Real-time Status",
      desc: "Track every repair progress."
    },
    {
      icon: <FaStar />,
      title: "Rating System",
      desc: "Review technician quality."
    },
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Why Choose FixGo
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 80
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}

              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 0px 30px rgba(6,182,212,0.3)"
              }}

              viewport={{ once: true }}

              className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              backdrop-blur-xl
              hover:border-cyan-400
              transition
              "
            >

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.2
                }}
                className="text-5xl text-cyan-400"
              >
                {item.icon}
              </motion.div>

              <h2 className="text-2xl font-semibold mt-6">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;