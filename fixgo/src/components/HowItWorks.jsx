import {
  FaMapMarkerAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const HowItWorks = () => {

  const steps = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Share Location",
      desc: "Allow GPS to find nearby repairers."
    },
    {
      icon: <FaTools />,
      title: "Request Repair",
      desc: "Choose your repair service."
    },
    {
      icon: <FaCheckCircle />,
      title: "Repairer Accepts",
      desc: "Technician confirms your request."
    },
    {
      icon: <FaCheckCircle />,
      title: "Repair Completed",
      desc: "Service completed successfully."
    },
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-20">
          How It Works
        </h1>

        <div className="grid md:grid-cols-4 gap-10 relative">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >

              <div className="
              w-24 h-24
              mx-auto
              rounded-full
              bg-cyan-500/20
              border border-cyan-400
              flex items-center justify-center
              text-4xl text-cyan-400
              ">
                {step.icon}
              </div>

              <h2 className="text-2xl font-semibold mt-6">
                {step.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {step.desc}
              </p>

              {index !== steps.length - 1 && (
                <div className="
                hidden md:block
                absolute top-12 left-[60%]
                w-full h-1
                bg-gradient-to-r from-cyan-400 to-blue-500
                "></div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;