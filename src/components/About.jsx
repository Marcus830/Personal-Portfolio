import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-5 max-w-8xl mx-auto"
    >
      {/* Title */}
      <motion.h1
        className="text-5xl text-center text-white mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h1>

      <div className="flex items-center gap-10 flex-wrap">
        {/* Text Block */}
        <motion.div
          className="flex-1 min-w-[300px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-lg leading-relaxed text-white bg-black/30 p-7 rounded-2xl shadow-2xl border border-white/10">
            I'm currently a Computer Science major at Mississippi State
            University with a passion for technology and innovation. My goal is
            to become a skilled Full-stack developer, creating impactful
            solutions that bridge the gap between user needs and technical
            possibilities.
            <br />
            I'm actively seeking Full time opportunities where I can apply my
            knowledge, learn from experienced professionals, and contribute to
            meaningful projects. I enjoy tackling complex problems and am always
            eager to expand my skill set with new technologies and frameworks.
            <br />
            When I'm not coding, you can find me exploring the latest tech
            trends, working on personal projects, or collaborating with fellow
            developers on innovative solutions.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-none w-[350px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src="boomdocks wallpapper.jpg"
            alt="Marcus Michael - Software Developer"
            className="rounded-lg shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About