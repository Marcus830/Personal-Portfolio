import { useState } from "react";

function Projects() {
  const [current, setCurrent] = useState(0); // track the active slide

  // Example: 3 cards (could map from an array instead)
  const projects = [1, 2, 3];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div id="projects" className="relative py-10">
      {/* Carousel container */}
      <div className="overflow-hidden max-w-3xl mx-auto">
        {/* Track */}
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {projects.map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex justify-center"
            >
              {/* Flip Card */}
              <div className="relative perspective-1000 w-100 h-100">
                <div className="absolute inset-0 border-2 rounded-lg shadow-xl transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-black backface-hidden rounded-lg p-4">
                    <h1 className="text-xl font-bold text-center">
                      Project {index + 1}
                    </h1>
                    <h2 className="text-gray-300 text-center">
                      Inmate Management System
                    </h2>
                    <img
                      src="inmate management page.png"
                      alt="Inmate Management System"
                      className="rounded-lg shadow-lg mx-auto mb-4"
                    />
                    <p className="m-2 p-2 border-2 border-white/30 rounded-xl bg-white/10">
                      Short description: A brief overview of the project.
                    </p>
                    <p className="m-2 p-2 border-2 border-white/30 rounded-xl bg-white/10">
                      Tech Stack: React, Node.js, Express
                    </p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-zinc-700 backface-hidden rotate-y-180 rounded-lg p-2 text-white">
                    <p className="text-2xl text-gray-300 text-center">John Doe</p>
                    <p className="m-2 p-2 border-2 border-gray-300 rounded-xl bg-white/10">
                      The problem: "Description of the problem the project aims
                      to solve."
                    </p>
                    <p className="m-2 p-2 border-2 border-gray-300 rounded-xl bg-white/10">
                      Your solution: "Description of your solution."
                    </p>
                    <p className="m-2 p-2 border-2 border-gray-300 rounded-xl bg-white/10">
                      Outcome: "Result of your solution."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between max-w-3xl mx-auto mt-6">
        <button
          onClick={prevSlide}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
