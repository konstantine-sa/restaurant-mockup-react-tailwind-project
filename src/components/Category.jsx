import { categories } from "../data/data";

function Category() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-6 sm:py-12  ">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-6 sm:mb-8">
        Bestbewertete Menüpunkte
      </h1>

      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 px-4 mt-2 sm:mt-4 bg-slate-200 ">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg p-2 sm:p-4 flex justify-between items-center cursor-pointer hover:scale-105 hover:shadow-xl duration-200"
          >
            <h2 className="font-bold text-gray-900 text-xs sm:text-xl ">
              {item.name}
            </h2>
            <img src={item.image} alt={item.name} className="w-10 sm:w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
