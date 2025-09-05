import { useState } from "react";

function Projects() {
  const [current, setCurrent] = useState(0); // track the active slide

  // Array of unique project objects
  const projects = [
    {
      title: "Inmate Management System",
      subtitle: "A system for managing inmate records",
      image: "inmate management page.png",
      description:
        "A web app to manage inmate data, track records, and generate reports.",
      tech: "HTML/CSS/Javascript, Node.js, Express.js, MySQL",
      author: "John Doe",
      problem: "Manual inmate record keeping is error-prone and inefficient.",
      solution: "A digital system to automate and secure inmate management.",
      outcome: "Improved efficiency and reduced errors in record keeping.",
    },
    {
      title: "Complaint Management System",
      subtitle: "A system for managing complaints",
      image: "assets/react.svg",
      description:
        "A modern web app to handle customer complaints and feedback.",
      tech: "ASP.NET, C#, SQL PostgreSQL, Docker, GitHub Actions",
      author: "Marcus",
      problem:
        "Organizations often struggle with handling customer or employee complaints efficiently",
      solution:
        "developed a system enabling efficient complaint tracking and resolution.",
      outcome:
        "Delivered a working full-stack application that demonstrates real-world problem solving skills.",
    },
    {
      title: "E-commerce store (CLI)",
      subtitle: "Backend API for an online store",
      image: "",
      description: "RESTful API for managing products, orders, and users.",
      tech: "Node.js, Express, MongoDB",
      author: "Jane Smith",
      problem: "Needed a scalable backend for an e-commerce platform.",
      solution: "Developed a robust API with authentication and CRUD features.",
      outcome: "Enabled rapid development of the frontend and mobile apps.",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div id="projects" className="relative py-10">
      {/* Carousel container */}
      <div className="overflow-hidden max-w-3xl mx-auto relative">
        {/* Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out" 
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center px-4"
              style={{ width: "100%" }}
            >
              {/* Flip Card */}
              <div className="relative w-full max-w-md perspective-1000">
                <div className="relative border-2 rounded-lg shadow-xl transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] h-[450px]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-black backface-hidden rounded-lg p-4 flex flex-col">
                    <h1 className="text-xl font-bold text-center">
                      {project.title}
                    </h1>
                    <h2 className="text-gray-300 text-center">
                      {project.subtitle}
                    </h2>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg shadow-lg mx-auto my-4 max-h-40"
                    />
                    <p className="m-2 p-2 border-2 border-white/30 rounded-xl bg-white/10">
                      {project.description}
                    </p>
                    <p className="m-2 p-2 border-2 border-white/30 rounded-xl bg-white/10">
                      Tech: {project.tech}
                    </p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-zinc-700 backface-hidden rotate-y-180 rounded-lg p-4 text-white flex flex-col">
                    <p className="text-2xl text-gray-300 text-center">
                      {project.author}
                    </p>
                    <p className="m-2 p-2 border-2 border-gray-300 rounded-xl bg-white/10">
                      Problem: {project.problem}
                    </p>
                    <p className="m-2 p-2 border-2 border-gray-300 rounded-xl bg-white/10">
                      Solution: {project.solution}
                    </p>
                    <p className="m-2 p-2 border-2 border-gray-300 rounded-xl bg-white/10">
                      Outcome: {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons (overlay style) */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/70 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/70 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ▶
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
