const RequestRepair = () => {
  return (
    <div className="min-h-screen pt-32 px-6">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">

          <h1 className="text-4xl font-bold mb-8">
            Request Repair
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Device Name"
              className="w-full bg-[#111827] p-4 rounded-xl"
            />

            <textarea
              placeholder="Problem Description"
              className="w-full bg-[#111827] p-4 rounded-xl h-40"
            />

            <button className="w-full bg-cyan-500 p-4 rounded-xl">
              Share Location
            </button>

            <button className="w-full bg-blue-600 p-4 rounded-xl">
              Submit Request
            </button>

          </div>

        </div>

        <div className="bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">

          <h1 className="text-2xl text-gray-400">
            Google Map Here
          </h1>

        </div>

      </div>

    </div>
  );
};

export default RequestRepair;