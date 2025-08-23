function Header(){
  return (
    <header
      className="bg-gray-900 px-5 py-15 text-center"
      style={{ backgroundColor: "#635e5e" }}
    >
      <div className="max-w-xl mx-auto p-10 border-2 border-gray-700 rounded-lg bg-black bg-opacity-30">
        <h1
          className="text-5xl text-white m-0"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Marcus Michael
        </h1>
        <p className="text-2xl text-gray-300 mt-2 mb-0">
          Aspiring Software Developer
        </p>
      </div>
    </header>
  );
}

export default Header