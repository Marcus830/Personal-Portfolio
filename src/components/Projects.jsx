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
    <div
      className="relative bg-gray-900 py-10"
      style={{ backgroundColor: "#635e5e" }}
    >
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
              <div className="relative perspective-1000 w-80 h-80">
                <div className="absolute inset-0 border-2 rounded-lg shadow-md transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-white backface-hidden rounded-lg p-4">
                    <h1>Project {index + 1}</h1>
                    <h2>John Doe</h2>
                    <p>Short description: A brief overview of the project.</p>
                    <p>Tech Stack: React, Node.js, Express</p>
                    <p>Links: [GitHub](#) | [Live Demo](#)</p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-red-500 backface-hidden rotate-y-180 rounded-lg p-4 text-white">
                    <p>John Doe</p>
                    <p>
                      The problem: "Description of the problem the project aims
                      to solve."
                    </p>
                    <p>Your solution: "Description of your solution."</p>
                    <p>Outcome: "Result of your solution."</p>
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
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
