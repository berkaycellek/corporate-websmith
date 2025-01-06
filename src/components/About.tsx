const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate About Creating Beautiful Digital Solutions
          </h2>
          <p className="text-gray-600">
            With years of experience in web development, I specialize in creating
            modern, responsive websites that help businesses grow their online
            presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Modern Design",
              description:
                "Creating beautiful, intuitive interfaces that engage users and drive results.",
            },
            {
              title: "Clean Code",
              description:
                "Writing maintainable, scalable code that stands the test of time.",
            },
            {
              title: "User Experience",
              description:
                "Focusing on creating seamless experiences that users love.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;