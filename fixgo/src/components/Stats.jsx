import { motion } from "framer-motion";

const Stats = () => {

  const data = [
    {
      title: "1000+",
      desc: "Repairers"
    },
    {
      title: "20K+",
      desc: "Customers"
    },
    {
      title: "4.9",
      desc: "Rating"
    }
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {data.map((item, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 60
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}

            animate={{
              boxShadow: [
                "0px 0px 10px rgba(6,182,212,0.1)",
                "0px 0px 30px rgba(6,182,212,0.5)",
                "0px 0px 10px rgba(6,182,212,0.1)"
              ]
            }}

            whileHover={{
              scale: 1.05,
              y: -10
            }}

            transition={{
              repeat: Infinity,
              duration: 3
            }}

            viewport={{ once: true }}

            className="
            bg-white/5
            border border-cyan-500/20
            rounded-3xl
            p-10
            text-center
            backdrop-blur-xl
            "
          >

            <motion.h1
              animate={{
                scale: [1, 1.05, 1]
              }}

              transition={{
                repeat: Infinity,
                duration: 2
              }}

              className="
              text-5xl
              font-bold
              text-cyan-400
              "
            >
              {item.title}
            </motion.h1>

            <p className="mt-3 text-gray-400">
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Stats;