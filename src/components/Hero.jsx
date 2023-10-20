function Hero() {
  return (
    <div className="max-w-[1640] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-start z-[2]">
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-[10%] lg:mt-[5%] ">
            Die <span className="text-orange-600">besten</span>
          </h1>
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            <span className="text-orange-500">Speisen</span> geliefert
          </h1>
        </div>

        <img
          className="w-full max-h-[500px] object-cover scale-x-[-1] z"
          src="https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Foto des Burgers"
        />
      </div>
    </div>
  );
}

export default Hero;
