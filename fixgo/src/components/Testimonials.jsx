const Testimonials = () => {

  const reviews = [
    {
      name: "David",
      review: "Amazing fast repair service!",
      rating: "★★★★★"
    },
    {
      name: "Sophia",
      review: "Very professional technician.",
      rating: "★★★★★"
    },
    {
      name: "John",
      review: "Live tracking is very useful.",
      rating: "★★★★★"
    },
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Customer Reviews
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item,index)=>(
            <div
              key={index}
              className="
              bg-white/5
              border border-white/10
              rounded-3xl
              p-8
              "
            >

              <div className="flex items-center gap-4">

                <img
                  src={`https://i.pravatar.cc/150?img=${index + 10}`}
                  alt=""
                  className="w-16 h-16 rounded-full"
                />

                <div>
                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-yellow-400">
                    {item.rating}
                  </p>
                </div>

              </div>

              <p className="text-gray-400 mt-6">
                {item.review}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;