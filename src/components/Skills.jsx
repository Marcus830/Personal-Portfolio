function Skills(){
    return(
        <section id="skills" className="py-25 px-5 max-w-8xl mx-auto">
          <h2 className="text-4xl text-center text-white mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl text-white mb-2">Skill 1</h3>
              <p className="text-gray-300">Description of Skill 1</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl text-white mb-2">Skill 2</h3>
              <p className="text-gray-300">Description of Skill 2</p>
            </div>
            <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl text-white mb-2">Skill 3</h3>
              <p className="text-gray-300">Description of Skill 3</p>
            </div>
          </div>
        </section>
    );
}
export default Skills