import { useState } from "react";
import { data } from "../data/data";

function Food() {
  const [foods, setFoods] = useState(data);
  const [sortOrder, setSortOrder] = useState("asc");

  //   filter by type of food
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // sort by price
  const sortPrice = (price) => {
    let sortedFoods;

    if (price === "asc") {
      // Sort in ascending order
      sortedFoods = [...foods].sort((a, b) => a.price - b.price);
      setSortOrder("asc");
    } else if (price === "desc") {
      // Sort in descending order
      sortedFoods = [...foods].sort((a, b) => b.price - a.price);
      setSortOrder("desc");
    }

    setFoods(sortedFoods);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-8">
      <h1 className="text-orange-600 font-bold text-2xl sm:text-4xl text-center">
        Höchstbewertete Menüpunkte
      </h1>

      {/* filter row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-start mt-4">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700 text-center sm:text-left sm:ml-1 mb-2">
            Filtertyp
          </p>
          <div className="flex justify-center sm:justify-start flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-xs p-2 sm:text-base"
            >
              Alle
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-xs p-2 sm:text-base"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-xs p-2 sm:text-base"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-xs p-2 sm:text-base"
            >
              Salate
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-xs p-2 sm:text-base"
            >
              Hähnchen
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700 text-center sm:text-right sm:mr-1 mb-2">
            Nach Preis sortieren
          </p>
          <div className="flex justify-center sm:justify-end gap-2  w-full">
            <button
              onClick={() => sortPrice("asc")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-xs p-2 sm:text-base"
            >
              Günstigste zuerst
            </button>
            <button
              onClick={() => sortPrice("desc")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white text-xs p-2 sm:text-base"
            >
              Teuersten zuerst
            </button>
          </div>
        </div>
      </div>

      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg hover:scale-105 duration-200 ease-in rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full max-h-[100px] sm:max-h-[200px] object-cover rounded-t-lg"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center px-2 py-2 sm:py-4">
              <p className="text-center font-bold text-sm sm:text-base">
                {item.name}
              </p>
              <p className="sm:justify-self-end">
                <span className="text-center sm:text-end text-xs sm:text-sm  font-bold bg-orange-500 text-white p-1 rounded-full p-1">
                  {item.price} €
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
