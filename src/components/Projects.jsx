import { section } from "framer-motion/client";

function Projects() {
  return (
    <div
      className="bg-gray-900 px-2 mx-0 py-5 text-center grid grid-cols-1 md:grid-cols-3 gap-8"
      style={{ backgroundColor: "#635e5e" }}
    >
      <div className="bg-transparent transition-transform duration-800 hover:[rotateY(180deg)]">
        <div className="perspective-1000 bg-black text-center py-15 mx-auto flex justify-center w-80 h-80 transform-3d border-2 rounded-lg shadow-md duration-300 transition-transform duration-800 hover:[transform:rotateY(180deg)]">
          <div className="absolute top-1 bottom-1 left-1 right-1 w-full rounded-lg bg-white backface-hidden flip-card-front">
            <h1> Project Title </h1>
            <h2>John Doe </h2>
            <p>Short description: A brief overview of the project.</p>
            <p>Tech Stack: React, Node.js, Express</p>
            <p>Links: [GitHub](#) | [Live Demo](#)</p>
          </div>
          <div className="absolute top-1 bottom-1 right-1 left-0 w-full rounded-lg bg-red-500 backface-hidden rotate-y-180 flip-card-back">
            <p>John Doe</p>
            <p>
              The problem: "Description of the problem the project aims to
              solve."
            </p>
            <p>Your solution: "Description of your solution to the problem."</p>
            <p>
              Outcome: "Description of the outcome or result of your solution."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-transparent transition-transform duration-800 hover:[rotateY(180deg)]">
        <div className="perspective-1000 bg-black text-center py-15 mx-auto flex justify-center w-80 h-80 transform-3d border-2 rounded-lg shadow-md duration-300 transition-transform duration-800 hover:[transform:rotateY(180deg)]">
          <div className="absolute top-1 bottom-1 left-1 right-1 w-full rounded-lg bg-white backface-hidden flip-card-front">
            <h1> Project Title </h1>
            <h2>John Doe </h2>
            <p>Short description: A brief overview of the project.</p>
            <p>Tech Stack: React, Node.js, Express</p>
            <p>Links: [GitHub](#) | [Live Demo](#)</p>
          </div>
          <div className="absolute top-1 bottom-1 right-1 left-0 w-full rounded-lg bg-red-500 backface-hidden rotate-y-180 flip-card-back">
            <p>John Doe</p>
            <p>
              The problem: "Description of the problem the project aims to
              solve."
            </p>
            <p>Your solution: "Description of your solution to the problem."</p>
            <p>
              Outcome: "Description of the outcome or result of your solution."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-transparent transition-transform duration-800 hover:[rotateY(180deg)]">
        <div className="perspective-1000 bg-black text-center py-15 mx-auto flex justify-center w-80 h-80 transform-3d border-2 rounded-lg shadow-md duration-300 transition-transform duration-800 hover:[transform:rotateY(180deg)]">
          <div className="absolute top-1 bottom-1 left-1 right-1 w-full rounded-lg bg-white backface-hidden flip-card-front">
            <h1> Project Title </h1>
            <h2>John Doe </h2>
            <p>Short description: A brief overview of the project.</p>
            <p>Tech Stack: React, Node.js, Express</p>
            <p>Links: [GitHub](#) | [Live Demo](#)</p>
          </div>
          <div className="absolute top-1 bottom-1 right-1 left-0 w-full rounded-lg bg-red-500 backface-hidden rotate-y-180 flip-card-back">
            <p>John Doe</p>
            <p>
              The problem: "Description of the problem the project aims to
              solve."
            </p>
            <p>Your solution: "Description of your solution to the problem."</p>
            <p>
              Outcome: "Description of the outcome or result of your solution."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;