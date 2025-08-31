import { useState } from "react";

function Skills() {
  return (
    <section id="skills" className="py-25 px-5 max-w-8xl mx-auto">
      <h2 className="text-4xl text-center text-white mb-12">My Skills</h2>
      <h2
        className="text-3xl text-left text-white mb-5"
      >
        Programming Languages
      </h2>
      {/* add a bar or dot system */}
      <div
        className="w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mr-2"
      >
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="nodejs-1-logo-svgrepo-com.svg"
            alt="Skill 1"
            className=" rounded-lg"
          />
        </div>
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="c-logo-svgrepo-com.svg"
            alt="Skill 2"
            className=" rounded-lg"
          />
        </div>
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="javascript-logo-svgrepo-com.svg"
            alt="Skill 3"
            className=" rounded-lg"
          />
        </div>
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img src="Csharp.svg" alt="Skill 3" className=" rounded-lg" />
        </div>
      </div>

      <h2 className="text-3xl text-left text-white mb-5">Databases</h2>
      {/* add a bar or dot system */}
      <div className="w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="mysql-logo-svgrepo-com.svg"
            alt="Skill 1"
            className=" rounded-lg"
          />
        </div>
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="postgresql-logo-svgrepo-com.svg"
            alt="Skill 2"
            className=" rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl text-left text-white mb-5">Version Control</h2>
      {/* add a bar or dot system */}
      <div className="w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="git-icon-logo-svgrepo-com.svg"
            alt="Skill 1"
            className=" rounded-lg"
          />
        </div>
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="src/assets/social-github-svgrepo-com.svg"
            alt="Skill 2"
            className=" rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl text-left text-white mb-5">Cloud Computing</h2>
      {/* add a bar or dot system */}
      <div className="w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-700 p-5 rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            src="azure-svgrepo-com.svg"
            alt="Skill 3"
            className=" rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
export default Skills;
