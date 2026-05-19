import {
  FaMobileAlt,
  FaLaptop,
  FaTv,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Services = () => {

  const services = [
    {
      icon: <FaMobileAlt />,
      name: "Phone Repair",
      desc: "Fast smartphone repair service"
    },
    {
      icon: <FaLaptop />,
      name: "Laptop Repair",
      desc: "Professional laptop repair"
    },
    {
      icon: <FaTv />,
      name: "TV Repair",
      desc: "Home television repair"
    },
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 50 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring"
              }}

              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(6,182,212,0.4)"
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

              <div className="text-5xl text-cyan-400">
                {item.icon}
              </div>

              <h2 className="text-2xl font-semibold mt-6">
                {item.name}
              </h2>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 20px rgba(6,182,212,0.5)"
                }}

                whileTap={{ scale: 0.95 }}

                className="
                mt-6
                bg-cyan-500
                px-5
                py-3
                rounded-xl
                font-semibold
                "
              >
                Book Now
              </motion.button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;