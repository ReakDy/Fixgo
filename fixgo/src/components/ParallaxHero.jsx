import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxHero = () => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <motion.div style={{ y }} className="relative">
      <h1 className="text-6xl font-bold">
        FixGo Repair Service
      </h1>
    </motion.div>
  );
};

export default ParallaxHero;